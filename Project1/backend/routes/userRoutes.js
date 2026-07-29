import { addUser, deleteUser, editUser, getAllUsers, loginUser, logout } from "../controllers/userController.js";
import { Router } from "express";
import express from 'express';

const router = express.Router();

router.post("/", addUser);
router.get("/", getAllUsers);
router.post("/login", loginUser);
router.delete("/:id", deleteUser);
router.put("/:id", editUser);
router.post("/logout", logout);

export default router;