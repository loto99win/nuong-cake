const { Schema, model } = require('mongoose');

const foodSchema = new Schema({
        name: {type:String, required:true},
        price: {type:Number, required:true},
        tags: {type:[String]},
        favorite:{type:Boolean, default:false},
        stars:{type:Number, required:true},
        imageUrl:{type:String,required:true},
        origins:{type:[String], required:true},
        cookTime:{type:String, required:true}
});

module.exports = model('Food', foodSchema);