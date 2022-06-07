import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

const app=express();

//midđleware
// cho phép tất cả các tên miền truy cập vào server
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
//nhận được các html form
app.use(express.urlencoded())


/// DB


// Routes

app.get('/hi',(req,res)=>{
    res.json({msg:'Hello'})
})



// start server

const port=process.env.PORT||5000;

app.listen(port,()=>{
    console.log(`port ${port}`)
})