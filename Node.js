let http = require("http");
let dt = require("./myfirsmodul");
let os = require("os");
let path = require("path");
let gdt = require("./personalmodules");
http
  .createServer(function(reques, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1> System information</h1>");
    response.write("Current user name : " + os.userInfo().username);
    response.write("<br/> OS type: " + os.type());
    response.write("<br/> System work time : " + os.uptime());
    response.write(
      "<br/> Server file name: " + path.basename("/js VSC/lesson11/Node.js")
    );
    response.write("<br/> The date and time is :" + dt.myDateTime());
    response.end("<br/>" + gdt.goodDate() + ",  " + os.userInfo().username);

    console.log(response.statusCode);
  })
  .listen(5000);

console.log("Server running at http://127.0.0.1:5000/");
