import dbConfig from "../../config/db.config.js";

import mongoose from "mongoose";

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

export default db;
