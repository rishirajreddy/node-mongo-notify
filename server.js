import { dbConnection } from "./config/database.js";
import Subscription from "./src/api/subscriptions/models/subscription.js";
import Team from "./src/api/teams/models/team.js";
import User from "./src/api/user/models/user.js";

async function generateModels() {
  dbConnection();
  await User.createCollection();
  await Team.createCollection();
  await Subscription.createCollection();
  process.exit();
}

generateModels();
