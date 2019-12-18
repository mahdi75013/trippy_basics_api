var mongoose = require("mongoose");
//Connection
mongoose.connect("mongodb://localhost:27017/mongoose_populate", {
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
// instannt creation
var address = new AddressModel({
streetName: 'rue de Charonne',
streetNumber:'177',
postCode: '75011',
city: 'Paris'
});
address.save(function(err, addressDb){
    console.log('err', err);
    console.log('adressDb', addressDb);
     
    var student = new StudentModel({
        firstName: 'Marion',
        surname: 'Cottilard',
        address: addressDb._id
});
address.save(function(err, addressDb){
    console.log('err', err);
    console.log('adressDb', addressDb);
    var studentId = studentId;
    StudentModel
        .findOne({_id: studentId})
        .populate('adress')
        .exec(function (err, finalStudent) {
        console.log('err', err);
        console.log('finalStudent', finalStudent);
        });
    });
});  