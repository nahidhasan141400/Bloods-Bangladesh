import { hash } from "@utility/encryption";
import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";

export interface DonorI
  extends Model<InferAttributes<DonorI>, InferCreationAttributes<DonorI>> {
  id: CreationOptional<string>;
  name: string;
  email: string;
  phone: string;
  date_of_barth: string;
  gender: "male" | "female" | "others";
  blood_group: "A+" | "B+" | "O+" | "AB+" | "A-" | "B-" | "O-" | "AB-";
  photo: string;
  country: string;
  division: string;
  district: string;
  upazila: string;
  longitude: string;
  latitude: string;
  address: string;
  coordinates: { type: string; coordinates: string[] };

  status: "active" | "deactivate" | "un-verify";
  organization_id?: ForeignKey<string>;
  admin_id?: ForeignKey<string>;
  user_id?: ForeignKey<string>;
  createdAt?: Date;
  updatedAt?: Date;
}

export function DonorModel(sequelize: Sequelize) {
  return sequelize.define<DonorI>("donor", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      allowNull: true,
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      allowNull: true,
      type: DataTypes.STRING(255),
    },
    photo: {
      allowNull: true,
      type: DataTypes.STRING(255),
    },
    date_of_barth: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    name: {
      type: DataTypes.STRING,
    },
    address: {
      allowNull: true,
      type: DataTypes.TEXT("long"),
    },
    gender: {
      type: DataTypes.ENUM("male", "female", "others"),
    },
    blood_group: {
      allowNull: false,
      type: DataTypes.ENUM("A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"),
    },
    country: {
      type: DataTypes.STRING,
    },
    division: {
      type: DataTypes.STRING,
    },
    district: {
      type: DataTypes.STRING,
    },
    upazila: {
      type: DataTypes.STRING,
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    coordinates: {
      type: DataTypes.GEOMETRY("POINT"),
      allowNull: true,
    },

    status: {
      type: DataTypes.ENUM("active", "deactivate", "un-verify"),
    },
  });
}
