import jwt, { SignOptions, JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret123";
const DEFAULT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d"; // read from .env

type Payload = object;

// Type-safe function to generate JWT token
export const generateToken = (
  payload: Payload,
  expiresIn: string | number = DEFAULT_EXPIRES_IN
): string => {
  // Cast string to StringValue for type safety
  const options: SignOptions = {
    expiresIn:
      typeof expiresIn === "string"
        ? (expiresIn as `${number}${"s" | "m" | "h" | "d" | "w" | "y"}`)
        : expiresIn,
  };

  return jwt.sign(payload, JWT_SECRET as string, options);
};

// Type-safe function to verify JWT token
export const verifyToken = (token: string): JwtPayload | string => {
  return jwt.verify(token, JWT_SECRET as string);
};
