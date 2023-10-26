import { Order } from "../model/order";

module.exports.validateOrder = function (order: Order): string {
    let todayDate: Date = new Date();
    const dateMinus1Year = new Date(todayDate.setFullYear(todayDate.getFullYear() -1))
    const orderDate = new Date(order.orderDate)

    console.log(dateMinus1Year)
    console.log(orderDate)

    if (orderDate < dateMinus1Year ) {
        return "Order date must not be older than 1 year";
    }
console.log("in here")
    return null
}