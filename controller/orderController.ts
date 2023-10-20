import { Application, Request, Response } from "express";
import orderService = require('../service/orderService')
import { Order } from "../model/order";

module.exports = function(app: Application){
    app.get('/orders', async (req: Request, res: Response) =>{
        let data: Order[];

        try{
            data = await orderService.getAllOrders()
        }catch(e){
            console.error(e);
        }
        res.render('list-order', { orders: data })

    })
    app.get('/orders/:id', async (req: Request, res: Response) =>{
        let data: Order;

        try{
            const { id } = req.params;
            data = await orderService.getOrderById(parseInt(id))
        }catch(e){
            console.error(e);
        }
        res.render('view-order', { order: data })
    })

}
