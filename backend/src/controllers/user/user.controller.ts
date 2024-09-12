import { db } from "@/database";
import { errorCreate } from "@/middleware/errorHandler";
import { DonorService } from "@/service/donor/Donor.service";
import { UserService } from "@/service/User/User.service";
import SendEmail from "@/utility/email/Connection";
import { compare } from "@/utility/encryption";
import generateOTP from "@/utility/otp";

export const UserController = {
  async CreateUser(req, res, next) {
    try {
      const { email, name, password } = req.body;
      const OTP = generateOTP();
      console.log("🚀 ~ CreateUser ~ OTP:", OTP);

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
      console.log("send Otp to email");
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
  async OtpValidation(req, res, next) {
    try {
      const { email, otp } = req.body;
      const User = await UserService.GetUSerByEmailUnscope(email);
      if (!User) {
        throw errorCreate(404, "User not found ");
      }

      console.log("🚀 ~ OtpValidation ~ ", otp, User.toJSON().session);
      if (otp === User.toJSON().session) {
        // login
        await User.update({
          status: "active",
        });
        return await UserService.LoginCookie(res, User);
      } else {
        throw errorCreate(401, "Otp is Not valid");
      }
    } catch (error) {
      next(error);
    }
  },
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const User = await db.User.unscoped().findOne({
        where: {
          email: email,
        },
      });

      if (!User) {
        throw errorCreate(401, "Invalid information");
      }
      const hash = User.toJSON().password;
      const Comparer = compare(password, hash);

      if (Comparer) {
        UserService.LoginCookie(res, User);
      } else {
        throw errorCreate(401, "Invalid Credentials");
      }
    } catch (error) {
      next(error);
    }
  },
  // set donor information
  async SetDonor(req, res, next) {
    try {
      const { body, user } = req;
      const data = await DonorService.CreateDonor({
        country: body.country,
        district: body.district,
        division: body.division,
        email: user.email,
        latitude: body.latitude,
        longitude: body.longitude,
        name: user.name,
        phone: body.phone || user.phone,
        photo: user.photo,
        upazila: body.upazila,
        user_id: user.id,
        date_of_barth: body.date_of_barth,
        address: body.address,
        gender: body.gender,
        blood_group: body.blood_group,
      });

      if (!user.phone) {
        await db.User.update(
          { phone: body.phone },
          {
            where: {
              id: user.id,
            },
          }
        );
      }
      res.send(data);
    } catch (error) {
      next(error);
    }
  },
  async GetLast20(req, res, next) {
    try {
      const Data = await db.User.findAll({
        limit: 20,
      });
      res.send(Data);
    } catch (error) {
      next(error);
    }
  },
  async GetAllUser(req, res, next) {
    try {
      const Data = await UserService.GetAllUser();
      res.send(Data);
    } catch (error) {
      next(error);
    }
  },
};
