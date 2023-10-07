import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

export const Computer = db.define(
  "computer",
  {
    nama_computer: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);
