const Food = require('../models/food.model');

const foodControllers = {
    
    // get all foods
    getAllFoods: async(req, res, next) => {
        const listFoods = await Food.find();
        res.send(listFoods);
    }
    
};

module.exports = foodControllers;