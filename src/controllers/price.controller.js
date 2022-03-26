const Price = require('../models/price');
//const { Alert } = require('../object/Alert');

class Alert{
    
    constructor(coin, price){
        this.coin = coin;
        this.price = price;
    }

    attach(){
        console.log('entro');
    }

    detach(){
        console.log('salgo')
    }

    notify(){
        console.log('notifico')
    }
}

const setAlert = async (req, res) => {
    const { title, price } = req.body;
    const new_price = new Price({ title, price });
    await new_price.save();

    let new_alert = new Alert(title, price);
    console.log(new_alert.price);

    return res.json({status:"Done"});
}

module.exports = { setAlert }
