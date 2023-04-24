const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    heten:{type:String,required:true},
    phone:{type:String,required:true},
    product:{type:String,required:true}
});

module.exports = model('Order', orderSchema);