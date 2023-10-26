const axios = require('axios');
import { Product } from "../model/product";
const productValidator = require ('../validator/productValidator');
const API_BASE_URL: string = 'http://localhost:8080/api';

export async function getProducts(): Promise<Product[]> {
    try{
        const response = await axios.get(`${API_BASE_URL}/products`);
        return response.data
    }catch(e){
        throw new Error('Could not get products')
    }
}
export async function getProductById (id: number): Promise<Product> {
    try{
        const response = await axios.get(`${API_BASE_URL}/products/${id}`)
        return response.data
    }catch(e){
        throw new Error('Cannot find product')
    }
}

module.exports.createProduct = async function (product: Product): Promise<number> {
const error: string = productValidator.validateProduct(product)
        if (error) {
            throw new Error(error)
        }
  
    try{
        const response= await axios.post(`${API_BASE_URL}/products/`, product)
        return response.data
    }catch (e){
           throw new Error('Could not create product') 
    }
}  




