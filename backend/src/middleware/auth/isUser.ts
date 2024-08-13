import { UserService } from "@/service/User/User.service";

const IsUser = async (req, res, next) => {
  try {
    const { sort, log } = req.cookies;
    const User = await UserService.CookieValidator(sort, log);
    const UserJson = User.toJSON();
    req.user = UserJson;
    next();
  } catch (error) {
    res.status(401).send(error);
  }
};

export default IsUser;
