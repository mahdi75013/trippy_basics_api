var mongoose = require('mongoose');

var schema = new mongoose.Schema({ 
    name: String,
    address: String,
    city: String,
    country: String,
    stars: Number,
    hasSpa: Boolean,
    hasPool: Boolean,
    priceCategory: Number
    });

var model = mongoose.model('hotels', schema);
module.exports = model;