import http from "http";
import fs from "fs";
import url from "url";

const myServer = http.createServer((req, res) => {
  const logs = `${Date.now()}: ${req.url} Received\n`;
  const myUrl = url.parse(req.url);
  console.log(myUrl);
  fs.appendFile("logs.txt", logs, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home");
        break;
      case "/about":
        res.end("About");
        break;
      default:
        res.end("404");
    }
  });
});

myServer.listen(8000, () => {
  console.log("server is running");
});
