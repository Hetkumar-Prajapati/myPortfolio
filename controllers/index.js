var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hetkumar' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Hetkumar' });
});

/* GET Skills page. */
router.get('/skills', function(req, res, next) {
  res.render('skills', { title: 'Hetkumar' });
});

/* GET Work page. */
router.get('/work', function(req, res, next) {
  res.render('work', { title: 'Hetkumar' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Hetkumar' });
});

module.exports = router;
