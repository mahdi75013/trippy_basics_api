var mongoose = require("mongoose");
//Connection
mongoose.connect("mongodb://localhost:27017/trippy_basics_api", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

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

var restaurantSchema = new mongoose.Schema({
    name: String,
    address:{ type: mongoose.Types.ObjectId, ref: 'Address'},
    city: String,
    country: String,
    stars: Number,
    cuisine: String,
    priceCategory: Number
});

//Model creation
var hotelModel = new mongoose.model('hotel', hotelSchema);
var restaurantModel = new mongoose.model('restaurant', restaurantSchema);

