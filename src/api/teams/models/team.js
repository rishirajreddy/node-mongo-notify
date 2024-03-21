import mongoose from "mongoose";

let Team = new mongoose.Schema(
  {
    name: String,
    coach: String,
    captain: String,
    score: Number,
  },
  { timestamps: true }
);

Team = mongoose.model("Team", Team);
export default Team;
