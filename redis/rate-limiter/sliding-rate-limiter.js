import client from "../basics/client.js";

const WINDOW_SIZE = 10;
const MAX_REQUESTS = 5;

export default async function slidingRateLimiter(req, res, next) {
  const identifier = req.ip;

  const key = `rate_limit:${identifier}`;

  const now = Date.now();
  const windowStart = now - WINDOW_SIZE * 1000;

  //remove older entries
  //   Delete all requests that happened before the last 10 seconds
  await client.zremrangebyscore(key, 0, windowStart);

  //count requests in window
  const requestCount = await client.zcard(key);

  if (requestCount >= MAX_REQUESTS) {
    return res.status(429).json({
      error: "Too many requests",
      message: `Max ${MAX_REQUESTS} requests in ${WINDOW_SIZE}`,
    });
  }

  await client.zadd(key, now, `${now}-${Math.random()}`);

  await client.expire(key, WINDOW_SIZE);
  next();
}
