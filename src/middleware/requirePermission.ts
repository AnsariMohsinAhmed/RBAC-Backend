import { Request, Response, NextFunction } from "express";

export const requirePermission = (permission: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('requirePermission() middleware invoked ----->');
            if (!req.user) {
                return res.status(401).json({ message: 'Unauthorized: User not authenticated!'});
            }

            if (!req.user.permissions.includes(permission)) {
                console.log(`Insufficient permissions of userID ${req.user.id} with roles ${req.user.roles}`);
                return res.status(403).json({ message: 'Forbidden: Insufficient permissions!'});
            }

            // all ok then
            next();
        } catch (error) {
            console.log('Error in requirePermission middleware :- ', error);
            return res.status(500).json({ message: 'Internal Server Error!'});
        }
    };
};