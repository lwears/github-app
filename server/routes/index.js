const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(path.resolve('../') + '/client/build/index.html');
  // res.render('index', { title: 'Express' });
});

module.exports = router;
