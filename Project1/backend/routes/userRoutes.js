import { addUser, getAllUsers, loginUser } from "../controllers/userController.js";
import { Router } from "express";
import express from 'express';

const router = express.Router();

router.post("/", addUser);
router.get("/", getAllUsers);
router.post("/login", loginUser);

export default router;