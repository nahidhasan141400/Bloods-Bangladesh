import { UserController } from "@/controllers/user/user.controller";
import CreateRouter from "@CreateRoute";

// create registration route
const MakeRouter = new CreateRouter("/ui/user");
const app = MakeRouter.getApp();
// path
app.post("/registration", UserController.CreateUser);

export default MakeRouter;
