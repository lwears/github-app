const express = require('express');
const router = express.Router();
const path = require('path');

/* GET React Frontend. */
router.get('/', (req, res) => {
  res.sendFile(path.resolve('../') + '/github-app/client/build/index.html');
});

module.exports = router;
