const foodControllers = require('../controllers/food.controller');
const router = require('express').Router();

// get all foods
router.get('/list', foodControllers.getAllFoods);

module.exports = router;