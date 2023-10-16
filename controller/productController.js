const productService = require('../service/productService')

module.exports = function(app){

    app.get('/products', async (req, res) =>{
        let data = [];

        try{
            data = await productService.getProducts()
        }catch(e){
            console.error(e);
        }
        res.render('list-products', {products: data})
    })
}