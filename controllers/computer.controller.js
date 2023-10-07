import { Computer } from "../models/computer.js";
import { User } from "../models/user.js";

export const getAllComputers = async (req, res) => {
  try {
    const response = await Computer.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getComputerById = async (req, res) => {
  try {
    const response = await Computer.findOne({
      where: { id: req.params.id },
      include: [User],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createComputer = async (req, res) => {
  const { nama_computer, user_id } = req.body;
  try {
    await Computer.create({ nama_computer, user_id });
    res.status(201).json({ message: "Berhasil membuat data" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteComputer = async (req, res) => {
  const computer = await Computer.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!computer)
    return res.status(404).json({ message: "Pengguna tidak ditemukan!" });
  try {
    await Computer.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Berhasil menghapus akun!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
