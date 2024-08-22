import { DonorController } from "@/controllers/donor/Donor.controller";
import CreateRouter from "@CreateRoute";

// create registration route
const MakeRouter = new CreateRouter("/ui/donor");
const app = MakeRouter.getApp();
// path
app.post("/registration", DonorController.SearchDonor);

export default MakeRouter;
