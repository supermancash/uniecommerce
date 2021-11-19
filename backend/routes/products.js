const express = require('express');
const archiver = require('archiver');
const fs = require('fs');
const path = require("path");

const catalog = require('../resources/products.json');


const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(catalog);
});

module.exports = router;
