import User from "../models/User.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const addUser = async (req, res) => {
  try {
    const { name, email, age, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.findOne({ email });
    if (user) {
      res.json({
        message: "User already exists",
      });
    }
    const new_user = await User.create({
      name,
      email,
      age,
      password: hashedPassword,
    });
    if (new_user) {
      res.status(200).json({
        message: "User added",
        user: new_user,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users) {
      res.status(200).json({
        message: "Users fetched",
        users: users,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(404).json({
          message: "Password does not match",
        });
      }

      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "7d" },
      );

      res.status(200).json({
        message: "User login sucessful",
        user: user,
        token: token,
      });
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error,
    });
    throw error;
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    if (user) {
      res.status(200).json({
        message: "User deleted",
      });
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

export const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age, password } = req.body;

    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (user) {
      res.status(200).json({
        message: "User updated",
      });
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

export const logout = async (req, res) => {
  res.status(200).json({
    message: "User logged out",
  });
};
