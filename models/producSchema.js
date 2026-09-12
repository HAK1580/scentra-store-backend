const mongoose=require("mongoose");
const productSchema= new mongoose.Schema({
    id:String,
    image:String,
    title:String,
    price:Number,
    oldprice:Number,
    desc:String,

})

const products=mongoose.model('products_collection',productSchema);

module.exports=products;