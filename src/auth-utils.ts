import { User, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

const prisma = new PrismaClient();
const saltRounds = 10;

export const encryptPassword = (password: string) => {
  return bcrypt.hash(password, saltRounds);
};

export const createUnsecuredUserInformation = (user: User) => ({
  username: user.username,
});

export const createTokenForUser = (user: User) => {
  return jwt.sign(createUnsecuredUserInformation(user), "super-secret");
};

const jwtInfoSchema = z.object({
  username: z.string(),
  iat: z.number(),
});

export const getDataFromAuthToken = (token?: string) => {
  if (!token) return null;
  try {
    return jwtInfoSchema.parse(jwt.verify(token, "super-secret"));
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const [, token] = req.headers.authorization?.split?.(" ") || [];
  const myJwtData = getDataFromAuthToken(token);
  if (!myJwtData) {
    return res.status(401).json({ message: "Invalid token" });
  }
  const userFromJwt = await prisma.user.findFirst({
    where: {
      username: myJwtData.username,
    },
  });
  if (!userFromJwt) {
    return res.status(401).json({ message: "User not found" });
  }
  req.user = userFromJwt;
  next();
};
