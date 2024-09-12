import { ENV } from "@config/env";
import { logger } from "@utility/logger";
import { Sequelize, HasMany, Transaction } from "sequelize";

import { log } from "console";
import { UserModel } from "./model/user";
import { DonorModel } from "./model/donor";
import { CountryI, CountryModel } from "./model/country";
import { DivisionI, DivisionModel } from "./model/Division";
import { DistrictI, DistrictModel } from "./model/District";
import { UpazilaI, UpazilaModel } from "./model/Upazila";
import { SuperAdminModel } from "./model/SuperAdmin";
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
const Country = CountryModel(sequelize);
const Division = DivisionModel(sequelize);
const District = DistrictModel(sequelize);
const Upazila = UpazilaModel(sequelize);
const SuperAdmin = SuperAdminModel(sequelize);

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

SuperAdmin.hasMany(Donor, {
  foreignKey: "admin_id",
  onDelete: "SET NULL",
  as: "donor",
});

Donor.belongsTo(SuperAdmin, {
  foreignKey: "admin_id",
  onDelete: "SET NULL",
  as: "super_admin",
});

// Country < Division

Country.hasMany<CountryI, DivisionI>(Division, {
  foreignKey: "country_id",
  as: "divisions",
  onDelete: "CASCADE",
});

Division.belongsTo<DivisionI, CountryI>(Country, {
  foreignKey: "country_id",
  as: "country",
  onDelete: "CASCADE",
});
// Division < District
Division.hasMany<DivisionI, DistrictI>(District, {
  foreignKey: "division_id",
  as: "district",
  onDelete: "CASCADE",
});
District.belongsTo<DistrictI, DivisionI>(Division, {
  foreignKey: "division_id",
  as: "division",
  onDelete: "CASCADE",
});
// Upazila> District
District.hasMany<DistrictI, UpazilaI>(Upazila, {
  foreignKey: "district_id",
  as: "upazila",
  onDelete: "CASCADE",
});

Upazila.belongsTo<UpazilaI, DistrictI>(District, {
  foreignKey: "district_id",
  as: "district",
  onDelete: "CASCADE",
});

export const db = {
  sequelize,
  User,
  Donor,
  Country,
  Division,
  District,
  Upazila,
  SuperAdmin,
} as const;
