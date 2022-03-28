const Price = require('../models/price');

class Alert{
    constructor(coin, price){
        this.coin = coin;
        this.price = price;
    }
}

const setAlert = async (req, res) => {
    const { title, price } = req.body;
    const new_price = new Price({ title, price });
    await new_price.save();

    return res.json({status:"Done"});
}

module.exports = { setAlert }
