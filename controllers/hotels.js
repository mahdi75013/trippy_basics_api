//Controller of Hotels
var express = require('express');
var HotelModel = require('./models/hotels');

// Create Hotels
app.post("/hotels", function (req, res) {
  var hotel = new HotelModel({
    name: req.body.name || "",
    address: req.body.address || "",
    city: req.body.city || "",
    country: req.body.country || "",
    stars: parseInt(req.body.stars) || 0,
    hasSpa: Boolean(req.body.hasSpa) || false,
    hasPool: Boolean(req.body.hasPool) || false,
    priceCategory: parseInt(req.body.priceCategory) || 0
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

module.exports = app;