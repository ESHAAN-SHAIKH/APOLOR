const express=require('express');
const app = express();

app.get('/health',(req,res)=>{
    res.status(200).send("OK");
})

app.listen(5000,()=>console.log("the server is running at http://localhost:5000"));