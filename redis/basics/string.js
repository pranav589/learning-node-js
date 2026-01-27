import client from "./client.js";

async function init() {
  //set value
  //   await client.set("user:5", "Shripad");

  //set a expiry time
  //   await client.expire("user:5", 10);

  // Get value
  const result = await client.get("user:5");
  console.log("result", result);
}

init();
