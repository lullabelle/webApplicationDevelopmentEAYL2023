import { Application, Request, Response } from "express";
const orderService = require('../service/orderService')
const customerService = require('../service/customerService')
import { Order } from "../model/order";
import { Customer } from "../model/customer";

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

    
        app.get('/add-order', async(req: Request, res: Response) => {
            let data: Customer[];
    
            try {
                data = await customerService.getCustomers();
            } catch (e) {
                console.error(e);
            }
    
            res.render('add-order', {
                customers: data,
            })
        });
   
    app.post('/add-order', async (req: Request, res: Response) =>{
        let data: Order = req.body
        let id: Number
        
        try{
            id= await orderService.createOrder(data)
            res.redirect('/orders/' + id)
            }catch(e){
                console.error(e);
                res.locals.errormessage = e.message
                res.render('add-order', req.body)
                console.log(res.locals.errormessage)
            }
            
        })
          /************************************** */
    app.get('/add-orderId', async (req: Request, res: Response) => {
        if(!req.session.product){
            req.session.product ={}
        }
        res.render('add-orderId')
    })
    app.post('/add-orderId', async (req: Request, res: Response) => {
        req.session.order["orderId"] = req.body.name

        res.redirect('/add-orderDate')
    })


        
    }//end
        
    


