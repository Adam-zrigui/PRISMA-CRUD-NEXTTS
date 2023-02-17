import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default prisma;


export async function getUsers() {
    try {
        const users = await prisma.user.findMany()
        return { users }
    } catch (error) {
        return { error : error }
    }
}
export async function createUser(user: any) {
  try {
    const userFromDB = await prisma.user.create({
      data: {
        name: user.name,
        age: user.age,
        email: user.email,
        about: user?.about
      },
    });
    return { user: userFromDB };
  } catch (error : any) {
    return {error : error.message};
  }
}
export async function FindById(id : any)  {
try {
  const user = await prisma.user.findUnique({where : { id }})
  return { user }
} catch (error) {
  return { error }
}
}
