import axios from 'axios';
import { Customer } from "../model/customer";

export async function getCustomers(): Promise<Customer[]> {
   
    try {
        const { data } = await axios.get(`http://localhost:8080/api/customers`);
        return data;
    } catch (e) {
        throw new Error('Could not get Customers');
    }
}