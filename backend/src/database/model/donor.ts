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
  photo: string;
  country: string;
  division: string;
  district: string;
  upazila: string;
  longitude: string;
  latitude: string;
  password: string;
  session: string;
  status: "active" | "deactivate" | "un-verify";
  organization_id?: ForeignKey<string>;
  user_id?: ForeignKey<string>;
  createdAt?: Date;
  updatedAt?: Date;
}

export function DonorModel(sequelize: Sequelize) {
  return sequelize.define<DonorI>(
    "donor",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        allowNull: false,
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

      name: {
        type: DataTypes.STRING,
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

      session: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM("active", "deactivate", "un-verify"),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(255),
        set(value: string) {
          this.setDataValue("password", hash(value));
        },
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: ["password", "session"],
        },
      },
    }
  );
}
