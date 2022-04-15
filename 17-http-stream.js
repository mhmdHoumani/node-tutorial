const { createReadStream } = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    const fileStream = createReadStream("./content/big.txt", "utf-8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => res.end(err));
  })
  .listen(5000);
