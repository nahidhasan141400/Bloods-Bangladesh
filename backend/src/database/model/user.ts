import { hash } from "@utility/encryption";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";

export interface UserI
  extends Model<InferAttributes<UserI>, InferCreationAttributes<UserI>> {
  id: CreationOptional<string>;
  name: string;
  email: string;
  phone: string;
  photo: string;
  password: string;
  session: string;
  status: "active" | "deactivate" | "un-verify";
  createdAt?: Date;
  updatedAt?: Date;
}

export function UserModel(sequelize: Sequelize) {
  return sequelize.define<UserI>(
    "user",
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
