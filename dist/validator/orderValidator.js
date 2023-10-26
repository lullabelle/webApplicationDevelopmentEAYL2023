"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports.validateOrder = function (order) {
    var todayDate = new Date();
    var dateMinus1Year = new Date(todayDate.setFullYear(todayDate.getFullYear() - 1));
    var orderDate = new Date(order.orderDate);
    console.log(dateMinus1Year);
    console.log(orderDate);
    if (orderDate < dateMinus1Year) {
        return "Order date must not be older than 1 year";
    }
    console.log("in here");
    return null;
};
//# sourceMappingURL=orderValidator.js.map