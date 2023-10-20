import { Order } from "../model/order";
const axios = require('axios');

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
