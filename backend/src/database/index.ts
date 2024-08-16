import { ENV } from "@config/env";
import { logger } from "@utility/logger";
import { Sequelize, HasMany, Transaction } from "sequelize";

import { log } from "console";
import { UserModel } from "./model/user";
import { DonorModel } from "./model/donor";
const LogQuery = false;

const sequelize = new Sequelize({
  dialect: "mysql",
  host: ENV.DATABASE_HOST,
  port: ENV.DATABASE_PORT,
  database: ENV.DATABASE_NAME,
  password: ENV.DATABASE_PASSWORD,
  username: ENV.DATABASE_USER,
  timezone: "+06:00",
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    underscored: true,
  },
  pool: {
    min: 0,
    max: 5,
  },
  logQueryParameters: ENV.NODE_ENV === "development",
  logging:
    ENV.NODE_ENV === "development" && LogQuery
      ? (query, time) => {
          log("\n ☢ " + time + "ms:" + " " + query);
        }
      : false,
  // logging: false,
  benchmark: true,
});

sequelize.authenticate();
// init model
const User = UserModel(sequelize);
const Donor = DonorModel(sequelize);

// user - Donor
User.hasOne(Donor, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
  as: "donor",
});

Donor.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
  as: "user",
});

export const db = {
  sequelize,
  User,
  Donor,
} as const;
