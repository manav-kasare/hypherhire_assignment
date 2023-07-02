import { Router } from "express";
import { getComments } from "../controllers/comments";
const router = Router();

// post

// put

// get
router.get('/', getComments)

export default router;
