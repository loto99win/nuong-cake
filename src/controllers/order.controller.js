const Order = require('../models/order.model');

const orderControllers = {
     
    // add order
    addOrder: async(req, res, next) => {
        const newObject = {
            hoten: req.body.hoten,
            phone: req.body.phone,
            product: req.body.product
        }

        const newOrder = new Order(newObject);
        await newOrder.save()
        .then((order) => {
            res.send(order);
        })
        .catch((err) => {
            res.send(err)
        });
    },

    // get orders
    getOrders: async(req, res, next) => {
        const listOrder = await Order.find();
        res.send(listOrder);
    }
}

module.exports = orderControllers;