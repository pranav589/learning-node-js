import client from "./client.js";

async function init() {
  // adds to the set- if not already exist.
  //if already exist- ignores it
  const res1 = await client.sadd("bikes:racing:france", "bike:1");
  console.log({ res1 });
  const res2 = await client.sadd("bikes:racing:france", ["bike:2", "bike:3"]);
  console.log({ res2 });
  const res3 = await client.sadd("bikes:racing:usa", "bike1");
  console.log({ res3 });
  // check whether present in set
  const res4 = await client.sismember("bikes:racing:usa", "bike1");
  console.log({ res4 });
}

init();
