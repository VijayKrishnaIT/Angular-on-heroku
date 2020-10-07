const express = require("express");
const app = express();
app.use(express.static("./dist/angular-on-heroku"));
app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/dist/angular-on-heroku/index.html");
});
app.listen(process.env.PORT || 8080);
