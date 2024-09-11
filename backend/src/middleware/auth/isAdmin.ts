import { AdminService } from "@/service/Admin/Admin.service";
import { errorCreate } from "../errorHandler";

export const isAdmin = async (req, res, next) => {
  try {
    const { tx_id, ss_log } = req.cookies;

    const admin = await AdminService.ValidateCookie(tx_id, ss_log);

    if (!admin) {
      throw errorCreate(401, "Please Login !");
    }
    req.admin = admin;
    next();
  } catch (error) {
    next(error);
  }
};
