var express = require("express");
var app = express();
var expressValidator = require("express-validator");

var validationResult = expressValidator.validationResult;
var body = expressValidator.body;

app.post('/hotels',
    body("stars").isLength({ min: 4}),
    body("priceCategory").isLength({ min: 8 }),
    function (req, res) {
        var errors = validationResult(req);
        if (errors.isEmpty() === false) {
            res.json({
                errors: errors.array() // to be used in a json loop
            });
            return;
        } else {
            res.json({
                success: true,
                message: 'Hotel will be saved'
            });
        }
    }
);

app.listen(3000, function () {
    console.log('Server started');
});