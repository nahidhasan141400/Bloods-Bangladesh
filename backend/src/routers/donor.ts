import { DonorController } from "@/controllers/donor/Donor.controller";
import { isAdmin } from "@/middleware/auth/isAdmin";
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
app.get("/get-all-by-admin", isAdmin, DonorController.GetAllByAdmin);
app.post("/add-donor-by-admin", isAdmin, DonorController.addByAdmin);

export default MakeRouter;
