const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("ok, funciona!!");
});

app.post("/form01", (req, res) => {
  let name = req.body.name;
  let lastName = req.body.lastName;
  let age = req.body.age;
  let mobile = req.body.mobile;
  let nacionality = req.body.nacionality;
  let residence = req.body.residence;

  let html =
    "El nombre es " +
    name +
    "<br>" +
    "El apellido es " +
    lastName +
    "<br>" +
    "El celular es " +
    mobile +
    "<br>" +
    '<a href="/">volver</a>';
  res.send(html);
});

app.listen(3000, () => {
  console.log("la aplicación esta corriendo");
});
