const mongoose = require('mongoose');
const { Schema } = mongoose;

const PriceSchema = new Schema({
    title : { type: String, required: true },
    price : { type: Number }
});

module.exports = mongoose.model('Price', PriceSchema);;