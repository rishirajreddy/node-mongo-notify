import("dotenv");
import express from "express";
import { json } from "express";
import cors from "cors";
import { dbConnection } from "./config/database.js";
import { port } from "./config/env.js";
import user_routes from "./src/api/user/routes/user.js";
const app = express();

app.use(
  json({
    limit: "1mb",
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);

dbConnection();
app.use(cors({ origin: "*" }));
app.use("/api", user_routes);
const PORT = port || 3000;
console.log("Intializing Server🚀");

console.log("Setting Up Configuration📤");
console.log("Server Started!💻");
console.log(
  `╔═════════════════════════════════════════╗\n║ Server Running On http://localhost:${PORT} ║\n╚═════════════════════════════════════════╝`
);

app.listen(PORT);

export default app;
