import express from "express";
import { getPosts } from "../controllers/position";

const router = express.Router();

router.get("/:id", getPosts);

export default router;
