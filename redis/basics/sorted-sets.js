import client from "./client.js";

async function init(params) {
  const res1 = await client.zadd(
    "racer_scores",
    10,
    "Norem",
    20,
    "Alex",
    15,
    "John",
  );

  console.log(res1);
  console.log(client.zadd);
}

init();
