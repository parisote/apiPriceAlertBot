const axios = require('axios');

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
      console.log(Object.values(res.data)[0].usd)
      console.log(Object.values(res.data)[1].usd)
      console.log(Object.values(res.data)[2].usd)
    })
}

module.exports = { setError, cryptoPrice };