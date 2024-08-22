import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";

export interface UpazilaI
  extends Model<InferAttributes<UpazilaI>, InferCreationAttributes<UpazilaI>> {
  id: CreationOptional<string>;
  name: string;
  status: "active" | "deactivate" | "un-verify";
  district_id?: ForeignKey<string>;
  createdAt?: Date;
  updatedAt?: Date;
}

export function UpazilaModel(sequelize: Sequelize) {
  return sequelize.define<UpazilaI>("upazila", {
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
    },
  });
}
