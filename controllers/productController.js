const product=require("../models/producSchema");

const getProducts=(async(req,res)=>{
    try{
        const saved_products=await product.find();
        if(!saved_products){
            return res.status(404).json({message:"products not found"});
        }
        res.status(200).json({message:"Products_collection",saved_products});

    }catch(err){
        res.status(400).json({message:"server error",err});
    }
    
})




module.exports=getProducts;