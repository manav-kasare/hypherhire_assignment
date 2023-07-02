import { Router } from "express";
import { getReplies } from "../controllers/replies";
const router = Router();

// post

// put

// get
router.get('/:commentId', getReplies)

export default router;
