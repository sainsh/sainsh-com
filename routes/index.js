var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  fs.readFile('./public/text/about.txt', 'utf8', function (err, contents) {
    if (err) {
      res.render('error', { error: err })
    } else {
      
      res.render('index', { title: 'Sainsh.com', about: contents.split("\n")});
    }
  });

});

module.exports = router;
