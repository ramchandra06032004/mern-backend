import dotenv from "dotenv";

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("server is live on port :", process.env.PORT);
    });
    app.on("error", (error) => {
      console.log("ERROR :- ", error);
      throw error;
    });

    app.get("", (req, res) => {
      res.send("hello world sakec");
    });
  })
  .catch((err) => {
    console.log("databse connection ERROR !!!:-", err);
  });

/*
import  express  from "express";
const app=express();


; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERROR :- ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is live on ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("ERROR :- ", error);
        throw error;
    }
})()

connectDB();

*/
