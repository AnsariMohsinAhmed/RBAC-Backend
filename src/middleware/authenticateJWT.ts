import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) return res.status(401).json({ message: 'missing Authorization header!' });

        if (!authorizationHeader.startsWith('Bearer ')) return res.status(401).json({ message: 'Invalid token format!' });

        const token = authorizationHeader.split(' ')[1];
        if(!token) return res.status(401).json({ message: 'Invalid token format! '});
        const payload = verifyToken(token);
        req.user = {
            id: Number(payload?.sub),
            email: payload?.email,
            roles: payload?.roles,
            permissions: payload?.permissions,
            ...(payload?.schoolId !== undefined && { schoolId: payload?.schoolId })
        }
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token!' });
    }
};