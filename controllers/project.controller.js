import { Departement } from "../models/departement.js";
import { Project } from "../models/project.js";

export const getAllProjects = async (req, res) => {
  try {
    const response = await Project.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getProjectsById = async (req, res) => {
  try {
    const response = await Project.findOne({
      where: { id: req.params.id },
      include: [Departement],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createProject = async (req, res) => {
  const { project_head, project_name, project_description, departement_id } =
    req.body;
  try {
    const project = await Project.create({
      project_head,
      project_name,
      project_description,
    });
    const departement = await Departement.findOne({
      where: {
        id: departement_id,
      },
    });
    await project.addDepartement(departement);
    res.status(201).json({ message: "Berhasil membuat data!", data: project });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteProject = async (req, res) => {
  const response = await Project.findOne({
    where: {
      project_id: req.params.id,
    },
  });
  if (!response)
    return res.status(404).json({ message: "Pengguna tidak ditemukan!" });
  try {
    await Project.destroy({
      where: {
        project_id: req.params.id,
      },
    });
    res.status(200).json({ message: "Berhasil menghapus akun!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
