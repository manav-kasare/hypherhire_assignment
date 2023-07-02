import "dotenv/config";
import express from "express";
import config from "./utils/config";

import books from './routes/books';
import comments from './routes/comments';
import replies from './routes/replies';

const { PORT } = config;

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Hi"));

app.use("/books", books);
app.use("/comments", comments);
app.use("/replies", replies);

app.listen(PORT, () => {
    console.log("server running on port:", PORT);
});
