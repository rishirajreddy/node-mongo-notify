import dbConfig from "../../config/db.config.js";
import Team from "../api/teams/models/team.js";
import User from "../api/user/models/user.js";

import mongoose from "mongoose";

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
export default db;
