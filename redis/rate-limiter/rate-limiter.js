import client from "../basics/client.js";

// Fixed window rate limiter
const RATE_LIMIT = 5;
const WINDOW_SIZE = 10;

export default async function rateLimiter(req, res, next) {
  const identifier = req.ip;

  const key = `rate_limi:${identifier}`;

  const currentCount = await client.incr(key);

  //first request->set expiry
  if (currentCount === 1) {
    await client.expire(key, WINDOW_SIZE);
  }

  if (currentCount > RATE_LIMIT) {
    const ttl = await client.ttl(key);

    return res.status(429).json({
      error: "Too many requests",
      retryAfter: `${ttl} seconds`,
    });
  }
  next();
}
