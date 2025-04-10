import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    application.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error:", error);
    process.exit(1);
  });

//second way to connect to the database from index.js using async await and try catch block
/*
import mongoose from 'mongoose';
import { DB_name } from './constants.js';
import dotenv from 'dotenv';
dotenv.config();


connect to the database from index.js using async await and try catch block
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
        console.log("Connected to the database")
    }catch(error){
        console.log("Error:",error)
        process.exit(1);
    }
})()
*/
