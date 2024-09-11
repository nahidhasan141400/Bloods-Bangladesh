import { AdminController } from "@/controllers/Admin/admin.controller";
import { isAdmin } from "@/middleware/auth/isAdmin";
import CreateRouter from "@CreateRoute";

// create registration route
const MakeRouter = new CreateRouter("/ui/admin");
const app = MakeRouter.getApp();

// path
app.post("/login", AdminController.Login);
app.get("/verify", isAdmin, AdminController.ValidateCookies);

export default MakeRouter;
