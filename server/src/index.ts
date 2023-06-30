import "dotenv/config";
import express from "express";
import config from "./utils/config";

import books from './routes/books';

const { PORT } = config;

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Hi"));

app.use("/books", books);

app.listen(PORT, () => {
    console.log("server running on port:", PORT);
});
