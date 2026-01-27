import client from "./client.js";

async function init(params) {
  const res1 = await client.hset("bike1", {
    model: "Deimgos",
    brand: "Ergonom",
    type: "Enduro bikes",
    price: 4972,
  });
  console.log(res1);
  const res2 = await client.hget("bike1", "model");
  console.log({ res2 });

  const res3 = await client.hgetall("bike1");
  console.log({ res3 });
}

init();
