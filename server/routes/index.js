const express = require('express');
const router = express.Router();
const path = require('path');

/* GET React Frontend. */
router.get('/', function (req, res, next) {
  res.sendFile(path.resolve('../') + '/client/build/index.html');
});

module.exports = router;
