import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async () => {
 return prisma.user.findMany({
   select : {
    id : true, 
    name: true, 
    email: true, 
    createdAt: true
   }
 });
}

export const getUserById = async (id) => {
 return prisma.user.findUnique({
  where: {id}, 
  select : {
   id: true, 
   name: true, 
   email: true, 
   createdAt:true
  }
 });
}

export const updateUser = async(id) => {
 return prisma.user.update({
  where: {id},
  select: {
   id: true, 
   name: true,
   email: true, 
   createdAt:true
  }
  
 });
}
export const deleteUser = async (id) => {
  return prisma.user.delete({
    where: { id }
  });
};