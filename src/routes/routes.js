const express = require('express');
const router = express.Router();
const Price = require('../models/price')

router.post('/', async (req, res) => {
  const { title, price } = req.body;
  const new_price = new Price({ title, price });
  await new_price.save();
  res.json({status:"Done"});
});

module.exports = router;