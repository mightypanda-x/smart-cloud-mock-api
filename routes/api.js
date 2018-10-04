var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/dataPie', function(req, res) {
  const jsonData = [{
    key: 'Red',
    value: 50
  }, {
    key: 'Blue',
    value: 32
  }, {
    key: 'Green',
    value: 72
  }];
  setTimeout(() => {
      res.send(jsonData);
  }, 200);
});

module.exports = router;
