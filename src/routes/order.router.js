const orderControllers = require('../controllers/order.controller');

const router = require('express').Router();

// add order
router.post('/add', orderControllers.addOrder);

// get orders
router.get('/list', orderControllers.getOrders);

module.exports = router;