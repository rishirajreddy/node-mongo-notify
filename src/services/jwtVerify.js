import JWT from "jsonwebtoken";

export function issue(payload) {
  try {
    const token = JWT.sign(payload, JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    console.log(error);
    return { error };
  }
}
export function verifyJWT(req) {
  try {
    if (req.headers.hasOwnProperty("authorization")) {
      const token = req.headers.authorization.split(" ")[1];
      const data = JWT.verify(token, jwt_access_token_secret);
      return data;
    } else {
      return { error: "No Bearer token pass in request" };
    }
  } catch (error) {
    console.log(error);
    return { error };
  }
}
