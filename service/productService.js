const axios = require('axios');

module.exports.getProducts = async function () {
    try{
        const response = await axios.get('http://localhost:8080/api/products')
        return response.data
    }catch(e){
        return new Error('Could not get products')
    }
}