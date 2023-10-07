import { Deptproj } from "../models/deptproj.js";

export const getAllDeptproj = async (req, res) => {
  try {
    const response = await Deptproj.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createProject = async (req, res) => {
  const { project_id, departement_id } = req.body;
  try {
    await Deptproj.create({
      departement_id: departement_id,
      project_id: project_id,
    });
    res.status(201).json({ message: "Berhasil membuat data!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
