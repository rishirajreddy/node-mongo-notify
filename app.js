import("dotenv");
import express from "express";
import { json } from "express";
import cors from "cors";
import { dbConnection } from "./server.js";
const app = express();

app.use(
  json({
    limit: "1mb",
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);

app.use(cors({ origin: "*" }));
const PORT = process.env.PORT || 4500;
console.log("Intializing Server🚀");

console.log("Setting Up Configuration📤");
console.log("Server Started!💻");
console.log(
  `╔═════════════════════════════════════════╗\n║ Server Running On http://localhost:${PORT} ║\n╚═════════════════════════════════════════╝`
);

dbConnection();
app.listen(PORT);
