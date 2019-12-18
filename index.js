var express = require('express')
var app = express()
var bodyParser = require("body-parser");
// var exphbs = require('express-handlebars');
// var user = require('./controllers/users');
var mongoose = require('mongoose');
var hotels = require('./hotels');
var port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var schema = { name: String };

var Schema = new mongoose.Schema(schema);
var HotelModel = mongoose.model("Hotel", Schema);
  mongoose.connect("mongodb://localhost:27017/trippy_basics", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
// Create Hotels
app.post("/hotels", function(req, res) {
    var hotel = new HotelModel({
        name: req.body.name || ""
    });
    hotel.save(function(err, hotelDb) {
        console.log('this is an error ' + err);
        console.log('this is a hotelDb' + hotelDb);
        res.json({
            success: true,
            data: hotelDb
        });
    });
});

  //Read Hotels
 app.get("/hotels", function(req, res) {
    HotelModel.find({}, function(err, hotelDb) {
      res.json({
        success: true,
        data: hotelDb
      });
    });
  });

  app.listen(port, function () {
      console.log("Server is started in" + port)
  })
