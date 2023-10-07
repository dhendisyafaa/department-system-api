import { Sequelize } from "sequelize";
import db from "../config/database.js";
import { Departement } from "./departement.js";
import { Project } from "./project.js";

const { DataTypes } = Sequelize;

export const Deptproj = db.define(
  "deptproj",
  {},
  {
    freezeTableName: true,
  },
  {
    timestamps: false,
  }
);

Departement.belongsToMany(Project, { through: Deptproj });
Project.belongsToMany(Departement, { through: Deptproj });
