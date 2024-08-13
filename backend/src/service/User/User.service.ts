import { db } from "@/database";

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
};
