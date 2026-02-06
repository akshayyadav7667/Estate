import prisma from "../lib/prisma.js";
// import { bcrypt } from "bcrypt";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await prisma.user.findUnique({
      where: { id },
    });

    res.status(200).json({ response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Faild to get user !" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json({ message: "GETll users", users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const userId = req.userId;
  const { password, avatar, ...inputs } = req.body;

  if (id !== userId) {
    return res.status(403).json({ message: "Not Authorized !" });
  }

  let updatedPassword = null;

  try {
    if (password) {
      updatedPassword = await bcrypt.hash(password, 10);
    }

    const updateUser = await prisma.user.update({
      where: { id },
      data: {
        ...inputs,
        ...(updatedPassword && { password: updatedPassword }),
        ...(avatar && { avatar }),
      },
    });

    const {password:updatedPassword, ...rest}= updateUser

    return res.status(201).json(rest);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const userId = req.userId;

  if (id !== userId) {
    return res.status(403).json({ message: "Not Authorized !" });
  }
  try {
    await prisma.user.delete({
      where: { id },
    });

    (res.status(200), json({ message: "User Deleted " }));
  } catch (error) {
    return res.status(500).json({ error });
  }
};
