export interface JWTPayload {
    sub: string;
    email: string;
    roles: string[];
    permissions: string[];
    schoolId?: number;
    iat?: number;
    exp: number;
}

export interface AuthUser {
    id: number;
    email: string;
    roles: string[];
    permissions: string[];
    schoolId?: number;
}