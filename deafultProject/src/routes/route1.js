const express = require('express');
const path = require('path');
const router1 = express.Router();

router1.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'html', 'index.html'));
});

module.exports = router1;
