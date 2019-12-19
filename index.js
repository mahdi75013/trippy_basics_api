var express = require('express');
var app = express();
var bodyParser = require("body-parser");
// var exphbs = require('express-handlebars');
var hotelsRoutes = require('./controllers/hotels');
var restaurantsRoutes = require('./controllers/restaurants');

var port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Controllers routes
app.use('/hotels', hotelsRoutes);
app.use("/restaurants", restaurantsRoutes);

app.listen(port, function () {
  console.log("Server is started in : " + port)
})
