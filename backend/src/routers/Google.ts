import { configureEnv } from "@/config/env";
import { errorCreate } from "@/middleware/errorHandler";
import { UserService } from "@/service/User/User.service";
import { GetGoogleOauthURL } from "@/utility/Google";
import CreateRouter from "@CreateRoute";
const MakeRouter = new CreateRouter("/");
const App = MakeRouter.getApp();
import axios from "axios";
import jwt from "jsonwebtoken";
import qs from "qs";
import { v4 as uuidv4 } from "uuid";

interface TokenData {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
  id_token: string;
}
type GoogleAccountInfo = {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  at_hash: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  iat: number;
  exp: number;
};

App.get("/google/login", async (req, res, next) => {
  try {
    const url = GetGoogleOauthURL(
      configureEnv().REDIRECT_URIS,
      configureEnv().CLIENT_ID
    );

    // res.send(url);
    res.redirect(url);
  } catch (e) {
    next(e);
  }
});

App.get("/api/google/auth", async (req, res, next) => {
  // get the code from qs
  const code = req.query.code as string;
  // get the is and access token with the code
  const url = "https://oauth2.googleapis.com/token";

  const value = {
    code,
    client_id: configureEnv().CLIENT_ID,
    client_secret: configureEnv().CLIENT_SECRET,
    redirect_uri: configureEnv().REDIRECT_URIS,
    grant_type: "authorization_code",
  };

  try {
    const response = await axios.post(url, qs.stringify(value), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const user: GoogleAccountInfo = jwt.decode(
      response.data.id_token
    ) as unknown as GoogleAccountInfo;

    const User = await UserService.GetUSerByEmail(user.email);

    if (User) {
      if (User.toJSON().status === "deactivate") {
        return errorCreate(401, "user not active");
      }
      let Status = User.toJSON().status;

      if (User.toJSON().status === "un-verify") {
        Status = "active";
        await User.update({
          status: "active",
        });
      }

      await UserService.LoginCookie(res, User, false);
      return res.redirect("/");
    } else {
      const session = await uuidv4();
      const newUser = await UserService.CreateUser({
        email: user.email,
        session: session,
        name: user.name,
        photo: user.picture,
        status: "active",
        password: "",
      });
      await UserService.LoginCookie(res, newUser, false);
      return res.redirect("/dashboard");
    }
  } catch (error) {
    console.log("🚀 ~ App.get ~ error:", error);
    next(error);
  }

  // get user with token

  // upset the user

  // create the session

  //  set the cookies
});

export default MakeRouter;
