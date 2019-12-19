//Controller of restaurants

var express = require('express');
var router = express.Router();

router.get('/restaurants', function(req, res) {
  res.send('list of restaurants');
});

router.get('/restaurants:id', function(req, res) {
  res.send('restaurant id: '+ req.params.id);
});

module.exports = router;