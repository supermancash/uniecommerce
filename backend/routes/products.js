const express = require('express');

const catalog = require('../resources/products.json');


const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(catalog);
});

module.exports = router;
