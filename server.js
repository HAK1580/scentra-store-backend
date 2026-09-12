const express=require("express");
const app=express();
const port=3000;
const connectDB=require('../scentra-perfumes-back-end/config/db');
const productRoutes=require("./routes/productRoute")
app.use(express.json());
connectDB();

app.use('/api/product',productRoutes);



app.get('/',(req,res)=>{
    res.send("server running fine !")
});


app.listen(port,()=>{
    console.log(`server is running at this port ${port}`)
})