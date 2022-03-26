const express = require('express');
const router = express.Router();
const Price = require('../models/price')
const { setAlert } = require('../controllers/price.controller');

router.post('/', setAlert);

module.exports = router;