const mongoose=require("mongoose");

async function connectDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/Scentra_Store");
        console.log(`db connection successfull ! `)



    }catch(err){
         console.log("db connetion faield",err)
    }
}

module.exports=connectDB