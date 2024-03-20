import db from "./src/utils/db_relation.js";

export const dbConnection = () => {
  console.log("inside dbConnection");
  db.mongoose
    .connect(db.url)
    .then(() => {
      console.log("Connected to the database!");
    })
    .catch((err) => {
      console.log("Cannot connect to the database!", err);
      process.exit();
    });
};
