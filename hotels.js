var mongoose = require("mongoose");

// Schema Definition
var hotelSchema = new mongoose.Schema({
    name: String,
    address:{ type: mongoose.Types.ObjectId, ref: 'Address'},
    city: String,
    country: String,
    stars: Number,
    hasSpa: Boolean,
    priceCategory: Number 
});

var hotelModel = new mongoose.model('hotel', hotelSchema);

module.exports = hotelModel;