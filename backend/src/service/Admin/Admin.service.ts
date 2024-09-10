import { db } from "@/database";
import { errorCreate } from "@/middleware/errorHandler";
import { compare } from "@/utility/encryption";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { ENV } from "@/config/env";
import cookie from "cookie";

export const AdminService = {
  async AdminLogin(username: string, password: string, res: any) {
    try {
      const user = await db.SuperAdmin.unscoped().findOne({
        where: { email: username },
      });

      if (!user) {
        throw errorCreate(401, "Wrong Username or Password !");
      }

      const Comp = compare(password, user.toJSON().password);

      if (!Comp) {
        throw errorCreate(401, "Wrong Password or Username !");
      }
      const session = await uuidv4();
      await user.update({
        session: session,
      });

      const Token = await jwt.sign(
        {
          name: user.toJSON().name,
          user: user.toJSON().id,
          session: session,
        },
        ENV.SECRET_KEY,
        {
          expiresIn: "30d",
        }
      );

      res.setHeader("Set-Cookie", [
        cookie.serialize("tx_id", Token, {
          maxAge: 1 * 24 * 60 * 60,
          sameSite: "strict",
          path: "/",
          httpOnly: true,
        }),
        cookie.serialize("ss_log", session, {
          maxAge: 1 * 24 * 60 * 60,
          sameSite: "strict",
          path: "/",
          httpOnly: true,
        }),
      ]);

      res.send({ login: true });
    } catch (error) {
      throw error;
    }
  },
  async ValidateCookie(tx_log, ss_log) {
    try {
      let userDecode: {
        name: string;
        user: string;
        session: string;
      } | null;
      // validate cookie
      try {
        userDecode = jwt.verify(tx_log, ENV.SECRET_KEY) as {
          name: string;
          user: string;
          session: string;
        };
      } catch (error) {
        throw errorCreate(401, "Invalid User please login");
      }

      const User = await db.SuperAdmin.unscoped().findOne({
        where: {
          id: userDecode.user,
        },
      });
      if (!User) {
        throw errorCreate(401, "Invalid User Please login");
      }

      if (User.toJSON().session !== ss_log) {
        throw errorCreate(401, "Invalid User Please login");
      }
      const userData = User.toJSON();

      delete userData.session;
      delete userData.password;

      return userData;
    } catch (error) {
      throw error;
    }
  },
};
