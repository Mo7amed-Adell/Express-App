import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const register = async({name, email, password}) => {
    if (!name || !email ) {
    throw new Error("Missing required fields");
    }
  const hashed = await bcrypt.hash(password, 10);
  try {
   return prisma.user.create({
    data: {name, email, password: hashed}
   });
  }catch (err) {
   throw new Error("Email already exists");
  }
}

export const login = async({email, password}) => {
  const user = await prisma.user.findUnique({
   where: {email}
  });
  if(!user) throw new Error("Invalid credentials");
  const valid = await bcrypt.compare(password, user.password);
  if(!valid) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  return token;
}