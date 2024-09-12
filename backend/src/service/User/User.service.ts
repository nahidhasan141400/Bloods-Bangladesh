import { db } from "@/database";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { ENV } from "@/config/env";
import cookie from "cookie";
import { errorCreate } from "@/middleware/errorHandler";

export const UserService = {
  // crete user
  async CreateUser(data: {
    session: string;
    status: "active" | "deactivate" | "un-verify";
    photo?: string;
    phone?: string;
    password: string;
    name: string;
    email: string;
  }) {
    try {
      const NewUser = await db.User.create({
        email: data.email,
        name: data.name,
        password: data.password,
        phone: data.phone,
        photo: data.photo,
        status: data.status,
        session: data.session,
      });
      return NewUser;
    } catch (error) {
      throw error;
    }
  },
  // get by id
  async GetUserById(id: string) {
    try {
      const User = await db.User.findOne({
        where: {
          id,
        },
      });
      return User;
    } catch (error) {
      throw error;
    }
  },
  // get User by email
  async GetUSerByEmail(email: string) {
    try {
      const User = await db.User.findOne({
        where: {
          email: email,
        },
      });
      return User;
    } catch (error) {
      throw error;
    }
  },
  // get User by email
  async GetUSerByEmailUnscope(email: string) {
    try {
      const User = await db.User.unscoped().findOne({
        where: {
          email: email,
        },
      });
      return User;
    } catch (error) {
      throw error;
    }
  },
  // cookey login

  async LoginCookie(res, user, send = true) {
    try {
      const session = await uuidv4();

      await user.update({
        session: session,
      });

      const token = await jwt.sign(
        {
          name: user.toJSON().name,
          user: user.toJSON().id,
          session: session,
        },
        ENV.SECRET_KEY,
        {
          expiresIn: "30d",
        }
      );

      res.setHeader("Set-Cookie", [
        cookie.serialize("sort", token, {
          maxAge: 1 * 24 * 60 * 60,
          sameSite: "strict",
          path: "/",
          httpOnly: true,
        }),
        cookie.serialize("log", session, {
          maxAge: 1 * 24 * 60 * 60,
          sameSite: "strict",
          path: "/",
          httpOnly: true,
        }),
      ]);
      if (send) {
        return res.send({ login: true });
      }
      return;
    } catch (error) {
      throw error;
    }
  },
  async CookieValidator(sort, log) {
    try {
      let userDecode: {
        name: string;
        user: string;
        session: string;
      } | null;
      // validate cookie
      try {
        userDecode = jwt.verify(sort, ENV.SECRET_KEY) as {
          name: string;
          user: string;
          session: string;
        };
      } catch (error) {
        throw errorCreate(401, "Invalid User please login");
      }

      const User = await db.User.unscoped().findOne({
        where: {
          id: userDecode.user,
        },
        include: [
          {
            model: db.Donor,
            as: "donor",
          },
        ],
      });

      if (!User) {
        throw errorCreate(401, "Invalid User Please login");
      }

      if (User.toJSON().session !== log) {
        throw errorCreate(401, "Invalid User Please login");
      }
      const userData = User.toJSON();

      delete userData.session;
      delete userData.password;

      return userData;
    } catch (error) {
      throw error;
    }
  },
  async GetAllUser() {
    return await db.User.findAll({
      include: [
        {
          model: db.Donor,
          as: "donor",
        },
      ],
    });
  },
};
