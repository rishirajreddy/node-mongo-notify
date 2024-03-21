import mongoose from "mongoose";
import config from "./db.config.js";
export const dbConnection = async () => {
  console.log("inside dbConnection");
  mongoose
    .connect(config.url)
    .then(() => {
      console.log("Connected to the database!");
    })
    .catch((err) => {
      console.log("Cannot connect to the database!", err);
      process.exit();
    });
};
