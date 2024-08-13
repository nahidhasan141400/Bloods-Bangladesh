import { errorCreate } from "@/middleware/errorHandler";
import { UserService } from "@/service/User/User.service";
import SendEmail from "@/utility/email/Connection";
import generateOTP from "@/utility/otp";

export const UserController = {
  async CreateUser(req, res, next) {
    try {
      const { email, name, password } = req.body;
      const OTP = generateOTP();

      // check user
      const ExistUser = await UserService.GetUSerByEmail(email);
      if (ExistUser) {
        if (ExistUser.toJSON().status !== "un-verify") {
          throw errorCreate(401, "Email Already registered");
        }
      }

      if (!ExistUser) {
        const NewUser = await UserService.CreateUser({
          email: email,
          name: name,
          password: password,
          status: "un-verify",
          session: OTP,
        });
      } else {
        await ExistUser.update({
          session: OTP,
        });
      }

      // send Otp to email
      await SendEmail({
        attachments: [],
        bcc: "",
        to: email,
        html: `<h1>Your Bloodsbd.com OTP is = ${OTP}</h1>`,
        subject: "Your Bloodsbd.com OTP ",
        text: "Your Bloodsbd.com OTP " + OTP,
      });

      res.send({
        email: email,
      });
    } catch (error) {
      next(error);
    }
  },
};
