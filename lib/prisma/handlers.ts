import { Prisma, User } from "@prisma/client";
import prisma from "./index"

export async function registerUser ({name, email, password}: User):Promise<User | void> {
  try {
    const user = await prisma.user.create({data: {name, email, password}})
    return user;
  } catch (error) {
    if(error instanceof Prisma.PrismaClientKnownRequestError) {
      // https://tinyurl.com/2mmxxmco
      if (error.code === 'P2002') {
        // https://tinyurl.com/2fkot932
        throw new Error(
          'There is a unique constraint violation, a new user cannot be created with this email'
        )
      } else {
        throw new Error('register-user', error)
      }
    }
    if(error instanceof Prisma.PrismaClientValidationError) {
      throw new Error(error.message)
    }
  }
}
