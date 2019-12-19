//Controller of Hotels

var express = require('express');
var router = express.Router();

router.get('/hotels', function(req, res) {
  res.send('list of hotels');
});

router.get('/hotels:id', function(req, res) {
  res.send('hotel id: ' + req.params.id);
});

module.exports = router;