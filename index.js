var express = require("express");
var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.post("/form", (req, res) => {
  let html =
    "<html><head><title>Registro</title></head><body><h1>Hola " +
    req.body.name +
    ", </h1><br/><h2>Los datos ingresados son: </h2>" +
    "<ul><li><b>Nombre: </b>" +
    req.body.name +
    " " +
    req.body.lastName +
    "</li>" +
    "<li><b>Edad: </b>" +
    req.body.age +
    "</li>" +
    "<li><b>Tel. Celular: </b>" +
    req.body.cel +
    "</li>" +
    "<li><b>Pais: </b>" +
    req.body.country +
    "</li>" +
    "<li><b>Pais de residencia: </b>" +
    req.body.residence +
    "</li></ul>" +
    "<p><a href=/index.html>Volver</a><p>" +
    "</body><html></html>";
  res.send(html);
});

app.listen(3000, () => {
  console.log("corriendo en el puerto 3000");
});
