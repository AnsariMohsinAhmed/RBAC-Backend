import jwt from "jsonwebtoken";
import { JWTPayload } from "../types/auth.types";

const JWT_SECRET = process.env.JWT_SECRET as string;

export const verifyToken = (token: string): JWTPayload => {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
}