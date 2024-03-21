import mongoose from "mongoose";

let User = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

User = mongoose.model("User", User);
export default User;
