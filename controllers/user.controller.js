import { Computer } from "../models/computer.js";
import { Departement } from "../models/departement.js";
import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getUsersById = async (req, res) => {
  try {
    const response = await User.findOne({
      // coba balikin line ini, ngaruh gk?
      where: { id: req.params.id },
      include: [Computer, Departement],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createUser = async (req, res) => {
  const { name, nik, departement_id } = req.body;
  try {
    await User.create({
      name,
      nik,
      departement_id,
    });

    res.status(201).json({ message: "Berhasil mendaftar!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!user)
    return res.status(404).json({ message: "Pengguna tidak ditemukan!" });
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Berhasil menghapus akun!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
