const axios = require('axios');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const setError = (code, message) => {
    const error = new Error();
    error.code = code;
    error.message = message;
    return error;
}

const cryptoPrice = function ()
{
    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,matic-network&vs_currencies=usd')
    .then(res => { 
      myEmitter.emit('eventPrice',res.data)
    })
}

module.exports = { setError, cryptoPrice, myEmitter };