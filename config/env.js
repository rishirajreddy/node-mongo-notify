import dotenv from "dotenv";

dotenv.config();
export const jwt_access_token_secret = process.env.JWT_ACCESS_TOKEN_SECRET;
export const port = process.env.PORT;
export const environment = process.env.ENVIRONMENT;
