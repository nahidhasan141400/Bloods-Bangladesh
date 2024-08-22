import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";

export interface DistrictI
  extends Model<
    InferAttributes<DistrictI>,
    InferCreationAttributes<DistrictI>
  > {
  id: CreationOptional<string>;
  name: string;
  status: "active" | "deactivate" | "un-verify";
  division_id?: ForeignKey<string>;
  createdAt?: Date;
  updatedAt?: Date;
}

export function DistrictModel(sequelize: Sequelize) {
  return sequelize.define<DistrictI>("district", {
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
    status: {
      type: DataTypes.ENUM("active", "deactivate", "un-verify"),
      defaultValue: "active",
    },
  });
}
