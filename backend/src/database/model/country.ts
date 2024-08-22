import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";

export interface CountryI
  extends Model<InferAttributes<CountryI>, InferCreationAttributes<CountryI>> {
  id: CreationOptional<string>;
  name: string;
  code: string;
  status: "active" | "deactivate" | "un-verify";
  createdAt?: Date;
  updatedAt?: Date;
}

export function CountryModel(sequelize: Sequelize) {
  return sequelize.define<CountryI>("country", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    code: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM("active", "deactivate", "un-verify"),
      defaultValue: "active",
    },
  });
}
