import mongoose from "mongoose";

let Subscription = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  },
  { timestamps: true }
);

Subscription = mongoose.model("Subscription", Subscription);
export default Subscription;
