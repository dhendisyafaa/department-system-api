import { Departement } from "../models/departement.js";
import { Project } from "../models/project.js";
import { User } from "../models/user.js";

export const getAllDepartements = async (req, res) => {
  try {
    const response = await Departement.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getDepartementById = async (req, res) => {
  try {
    const response = await Departement.findOne({
      where: { id: req.params.id },
      include: [User, Project],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createDepartement = async (req, res) => {
  const { departement_head, departement_description } = req.body;
  try {
    await Departement.create({
      departement_head,
      departement_description,
    });
    res.status(201).json({ message: "Berhasil membuat data" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteDepartement = async (req, res) => {
  const departement = await Departement.findOne({
    where: {
      departement_id: req.params.id,
    },
  });
  if (!departement)
    return res.status(404).json({ message: "Departement tidak ditemukan!" });
  try {
    await Departement.destroy({
      where: {
        departement_id: req.params.id,
      },
    });
    res.status(200).json({ message: "Berhasil menghapus departement!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
