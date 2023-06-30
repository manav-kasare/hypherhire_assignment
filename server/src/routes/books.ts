import { Router } from "express";
import { getBooks } from "../controllers/books";
const router = Router();

// post

// put

// get
router.get('/', getBooks)

export default router;
