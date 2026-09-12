const express=require("express");
const app=express.json();
const port=3000;
app.use(express.json());






app.get('/',(req,res)=>{
    res.send("server running fine !")
});


app.listen(port,()=>{
    console.log(`server is running at this port ${port}`)
})