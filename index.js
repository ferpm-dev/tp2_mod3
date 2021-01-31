"use strict";

var express = require("express");
var app = express();
var router = express.Router();

router.get("/router", function (req, res, next) {
  res.render("index", { title: "Express" });
});

app.get("/", (req, res) => {
  res.send("Hello word from myExpress");
});

app.get("/json", (req, res) => {
  res.json({
    id: 1,
    name: "Fer",
    age: 56,
  });
});
app.listen(3000, () => {
  console.log("servidor 3000 corriendo...");
});

module.exports = router;
