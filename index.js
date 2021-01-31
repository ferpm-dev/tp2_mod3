var express = require("express");
var app = express();

app.use(express.static("public"));
app.use(express.urlencoded());

app.post("/form", (req, res) => {
  let html =
    "<html><head><title>Registro</title></head><body><h1>Hola " +
    req.body.nombre +
    ",</h1><br/><h2>Fuiste registrado con los siguientes datos: </h2>" +
    "<ul><li><b>Nombre completo: </b>" +
    req.body.nombre +
    " " +
    req.body.apellido +
    "</li>" +
    "<li><b>Edad: </b>" +
    req.body.edad +
    "</li>" +
    "<li><b>Tel. Celular: </b>" +
    req.body.celular +
    "</li>" +
    "<li><b>Pais de origen: </b>" +
    req.body.origen +
    "</li>" +
    "<li><b>Pais de residencia: </b>" +
    req.body.residencia +
    "</li></ul>" +
    "<p><a href=/index.html>Registrarse nuevamente</a><p>" +
    "</body><html></html>";
  res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app escuchando en el puerto ${PORT}`);
});
