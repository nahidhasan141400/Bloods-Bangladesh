import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";

export interface DivisionI
  extends Model<
    InferAttributes<DivisionI>,
    InferCreationAttributes<DivisionI>
  > {
  id: CreationOptional<string>;
  name: string;
  status: "active" | "deactivate" | "un-verify";
  country_id?: ForeignKey<string>;
  createdAt?: Date;
  updatedAt?: Date;
}

export function DivisionModel(sequelize: Sequelize) {
  return sequelize.define<DivisionI>("division", {
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
