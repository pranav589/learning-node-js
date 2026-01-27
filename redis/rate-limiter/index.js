import express from "express";
import rateLimiter from "./rate-limiter.js";
import slidingRateLimiter from "./sliding-rate-limiter.js";

const app = express();

// app.use(rateLimiter);
app.use(slidingRateLimiter);

app.get("/api", (req, res) => {
  res.json({ message: "Request successful 🚀" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
