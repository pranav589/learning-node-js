// USER ROUTES
import express from "express";
import pool from "./pool.js";
import UserRepo from "./repos/user-repo.js";

pool
  .connect()
  .then(() => {
    app.listen(8000, () => {
      console.log("Server connected");
    });
  })
  .catch((err) => {
    console.error(err);
  });

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await UserRepo.find();
  res.send(users);
});

app.get("/users/:id", async (req, res) => {});

app.post("/users", async (req, res) => {});

app.put("/users/:id", async (req, res) => {});

app.delete("/users/:id", async (req, res) => {});
