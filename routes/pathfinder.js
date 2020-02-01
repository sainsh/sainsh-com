var express = require('express');
var router = express.Router();



/* GET pathfinder/world page. */
router.get('/world', function (req, res, next) {
    res.render('pathfinder/world', {title: 'World', world: 'world', saisjo: 'saisjo', ohfun:"ohfun", Romliearth:"romliearth", ishalhan:"ishalhan", other:"others"})

});

/* GET pathfinder/characters page. */
router.get('/characters', function (req, res, next) {
   
    res.send("characters")
});

/* GET pathfinder/religion page. */
router.get('/religion', function (req, res, next) {
   
    res.send("religion")
});

module.exports = router;