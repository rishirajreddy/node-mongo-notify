import User from "../models/user.js";
import bcrypt from "bcryptjs";

export const create = async (req, res, next) => {
  try {
    //create user
    const { name, email, password } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({ name: name, email, password: hashPassword });

    await user.save();
    return res.status(200).send(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
};
