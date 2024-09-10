import { DonorController } from "@/controllers/donor/Donor.controller";
import IsUser from "@/middleware/auth/isUser";
import CreateRouter from "@CreateRoute";

// create registration route
const MakeRouter = new CreateRouter("/ui/donor");
const app = MakeRouter.getApp();
// path
app.post("/create", IsUser, DonorController.CreateDonor);
app.post("/search", DonorController.SearchDonor);
app.post("/get-by-id", DonorController.GetDonorById);
app.get("/get-near-by", DonorController.SearchDonorNearBy);

export default MakeRouter;
