import { UserController } from "@/controllers/user/user.controller";
import IsUser from "@/middleware/auth/isUser";
import CreateRouter from "@CreateRoute";

// create registration route
const MakeRouter = new CreateRouter("/ui/user");
const app = MakeRouter.getApp();
// path
app.post("/registration", UserController.CreateUser);
app.post("/otp", UserController.OtpValidation);
app.post("/login", UserController.login);
app.post("/set-donor", UserController.SetDonor);
app.get("/verify", IsUser, (req, res) => {
  // @ts-expect-error skip
  res.send(req.user);
});

app.get("/20-user", UserController.GetLast20);

export default MakeRouter;
