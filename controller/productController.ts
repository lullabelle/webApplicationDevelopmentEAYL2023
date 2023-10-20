import { Application, Request, Response } from "express";
import productService = require('../service/productService');
import { Product } from "../model/product";

module.exports = function(app: Application){    
    app.get('/products', async (req: Request, res: Response) =>{
        let data: Product[];

        try{
            data = await productService.getProducts();
        }catch(e){
            console.error(e);
        }
        res.render('list-product', { products: data })
})

    app.get('/products/:id', async (req: Request, res: Response) =>{
        let data: Product;

        try{
            const { id } = req.params;
            data = await productService.getProductById(parseInt(id));
        }catch(e){
            console.error(e);
        }
        res.render('view-product', { product: data, })
    })
}