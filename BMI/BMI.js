const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ encoded: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var result = weight / (height * height);
  res.send("The BMI is: " + result);
});

app.listen(3000, function () {
  console.log("Server Started");
});
