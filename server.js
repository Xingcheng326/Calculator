const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
var port = 4000;
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("Thanks for input, result is " + result);
});

app.listen(port, function() {
  console.log("server on:" + port);
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
  var num1 = Number(req.body.weight);
  var num2 = Number(req.body.hight);
  var result = num1 / (num2 * num2 * 1.0);
  res.send("Thanks for input, result is " + result);
});
