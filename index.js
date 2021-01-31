"use strict";

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("files"));
app.use(express.urlencoded({ extended: true }));

app
  .route("/")
  .get(function (req, res) {
    res.sendFile(path.join(__dirname + "/form.html"));
  })

  .post(function (req, res) {
    let html =
      "<html><head><meta charset='UTF-8'><meta name='viewport';  content='width=device-width, initial-scale=1.0'><title>Usuario</title></head><body><div class='ui container'><h3>Nombre:</h3>" +
      req.body.name +
      "<p><h3>Apellido:</h3>" +
      req.body.lastName +
      "<h3>Edad:</h3>" +
      req.body.age +
      "<h3>Celular:</h3>" +
      req.body.mobileNumber +
      "<h3>Nacionalidad:</h3>" +
      req.body.contryOrigin +
      "<h3>País de residencia:</h3>" +
      req.body.countryResidence +
      "<br><br><a class='ui button' href='/'>volver</a></p></div></body><html>";
    res.send(html);
  });

app.listen(3000, () => {
  console.log("servidor 3000 corriendo...");
});
