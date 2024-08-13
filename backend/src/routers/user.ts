import { UserController } from "@/controllers/user/user.controller";
import CreateRouter from "@CreateRoute";

// create registration route
const MakeRouter = new CreateRouter("/ui/user");
const app = MakeRouter.getApp();
// path
app.post("/registration", UserController.CreateUser);
app.post("/otp", UserController.OtpValidation);

export default MakeRouter;
