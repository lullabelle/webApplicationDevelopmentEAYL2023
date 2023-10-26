import { Order } from "../model/order";
import { Customer } from "../model/customer";
const axios = require('axios');
const orderValidator = require ('../validator/orderValidator');

export async function getAllOrders(): Promise<Order[]> {
    try{
        const response = await axios.get('http://localhost:8080/api/orders')
        return response.data
    }catch(e){
        throw new Error('Could not get orders')
    }
}
export async function getOrderById (id: number): Promise<Order>{
    try{
        const response = await axios.get('http://localhost:8080/api/orders/' + id)
        return response.data
    }catch(e){
        throw new Error('Order could not be found')
    }
}

module.exports.createOrder = async function (order: Order): Promise<number> {
    const error: string = orderValidator.validateOrder(order)
            if (error) {
                throw new Error(error)
            }
      console.log(order)
        try{
            const response= await axios.post(`http://localhost:8080/api/orders/`, order)
            return response.data
        }catch (e){
               throw new Error('Could not create order') 
        }
    }


