import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const databseConnectionFunction = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`,
    );
    console.log(
      `mongoDB Connected !! DB Host :${databseConnectionFunction.connection.host}`,
    );
  } catch (error) {
    console.log("databse connection ERROR :-", error);
    process.exit(1);
  }
};

export default connectDB;
