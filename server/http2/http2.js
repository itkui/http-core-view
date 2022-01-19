const { createSecureServer } = require("http2");
const fs = require("fs");
const path = require('path')
createSecureServer(
  {
    key: fs.readFileSync(path.resolve(__dirname, "./../cert/www.dingshiyi.cn.key")),
    cert: fs.readFileSync(path.resolve(__dirname, "./../cert/www.dingshiyi.cn_bundle.crt")),
  },
  function (req, res) {
    setTimeout(() => {
      res.writeHead(200, {
        "Content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      });
      res.write(
        JSON.stringify({
          errno: 0,
          message: "",
          data: true,
        })
      );
      res.end();
    }, 2000);
  }
).listen(8000, () => {
  console.log("server in listen on 8000");
});
