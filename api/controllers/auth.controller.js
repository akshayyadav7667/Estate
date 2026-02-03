import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists....
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    // console.log(newUser);

    res.status(201).json({
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
      createdAt: newUser.createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // console.log(username);

    const user = await prisma.user.findUnique({
      where: { username },
    });

    // console.log(user);

    // console.log(username, password);

    if (!user) {
      res.status(400).json({ message: "Invalid Credentials !!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    // console.log(isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credentails" });
    }

    const age = 1000 * 60 * 60 * 24 * 7;
    // console.log(user);

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age },
    );


    const {password:userPassword,...userInfo}= user

    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: age,
      })
      .status(200)
      .json(userInfo);

    // res.status(200).json({ username, password });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Falied to login !" });
  }
};

export const logout = (req, res) => {
  try {
    res
      .clearCookie("token")
      .status(200)
      .json({ message: "Logout successFully " });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Falid to LogOut !!" });
  }
};
