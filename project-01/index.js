import express from "express";
import users from "./MOCK_DATA.json" assert { type: "json" };

const app = express();

const PORT = 8000;

app.use((req, res, next) => {
  console.log("Hello from M1");
  // return res.json("Hello From M1");
  next();
});

app.use((req, res, next) => {
  console.log("Hello from M2");
  // return res.json("Hello From M1");
  next();
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  console.log(req);
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  console.log(user);
  if (!user) {
    return res.status(404).json({
      error: "User not found",
    });
  }
  return res.json(user);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  return res.status(201).json({
    status: "Success",
    user: body,
  });
});

app.listen(PORT, () => console.log("Server Started"));
