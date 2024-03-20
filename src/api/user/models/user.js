import mongoose from "mongoose";

let User = await mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

User = mongoose.model("users", User);
return User;
