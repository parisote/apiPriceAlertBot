const mongoose = require('mongoose');
const { Schema } = mongoose;

const PriceSchema = new Schema({
    coin : { type: String, required: true },
    who : { type: String, require: true},
    price : { type: Number, require: true },
    send : { type: Boolean, default: false }
});

module.exports = mongoose.model('Price', PriceSchema);;