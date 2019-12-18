var express = require('express')
var app = express()
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
var user = require('./controllers/users');
var mongoose = require('mongoose');
var port = 3000;


mongoose.connect("mongodb://localhost:27017/trippy_basics_api", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

app.get("/", function (req, res) {
    console.log("GET /");
    res.send("home");
});

app.listen(port, function () {
    console.log("Server started");
});




