import { AdminService } from "@/service/Admin/Admin.service";

export const AdminController = {
  async Login(req, res, next) {
    try {
      const { username, password } = req.body;
      console.log("🚀 ~ Login ~ username, password:", username, password);
      const Res = await AdminService.AdminLogin(username, password, res);
    } catch (error) {
      next(error);
    }
  },
  async ValidateCookies(req, res, next) {
    try {
      res.send(req.admin);
    } catch (error) {
      next(error);
    }
  },
};
