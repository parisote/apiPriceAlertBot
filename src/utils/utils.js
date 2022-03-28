const axios = require('axios');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

function c1(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

myEmitter.on('eventOne', c1);

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
      myEmitter.emit('eventOne',Object.values(res.data)[0].usd, Object.values(res.data)[1].usd, Object.values(res.data)[2].usd)
    })
}

module.exports = { setError, cryptoPrice };