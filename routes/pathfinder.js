var express = require('express');
var router = express.Router();



/* GET pathfinder/world page. */
router.get('/world', function (req, res, next) {
    res.render('pathfinder/world', {title: 'World'})

});

/* GET pathfinder/characters page. */
router.get('/characters', function (req, res, next) {
   
    res.render('pathfinder/characters', {title: 'Characters'})
});

/* GET pathfinder/religion page. */
router.get('/religion', function (req, res, next) {
   
    res.render('pathfinder/religion', {title: 'Religion'})
});

module.exports = router;