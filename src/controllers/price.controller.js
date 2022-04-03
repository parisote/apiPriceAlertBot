const Price = require('../models/price');
const { myEmitter } = require('../utils/utils');

class Alert{
    constructor(coin, price){
        this.coin = coin;
        this.price = price;
    }
}

const setAlert = async (req, res) => {
    const { coin, price, who } = req.body;
    const new_price = new Price({ coin, price, who });
    await new_price.save();
    return res.json({status:"Done"});
}

const getAlertByPrice = async(data) => {
    const value = Object.values(data)[1].usd;
    const alerts = await Price.find({ price : { $lte:value }}).exec();
    console.log(alerts)
}

myEmitter.on('eventPrice', getAlertByPrice);

module.exports = { setAlert }
