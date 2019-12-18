var mongoose = require("mongoose");

var restaurantSchema = new mongoose.Schema({
    name: String,
    address:{ type: mongoose.Types.ObjectId, ref: 'Address'},
    city: String,
    country: String,
    stars: Number,
    cuisine: String,
    priceCategory: Number
});

var restaurantModel = new mongoose.model('restaurant', restaurantSchema);