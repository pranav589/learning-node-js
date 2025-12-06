import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Home");
});

app.get("/about", (req, res) => {
  res.send("Hello from About");
});

app.listen(8000, () => {
  console.log("Server Started");
});
