import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupSchema,signinSchema } from "@syam29/medium-common1";


export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string;
        JWT_SECRET:string
    }
}>()

userRouter.post('/signup', async(c) => {
    const body =await c.req.json();
    const { success } = signupSchema.safeParse(body)
    console.log(success);
    if(!success){
      c.status(400)
      return c.text("Inavlid information")
    }
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
      const user = await prisma.user.create({
        data:{
          name:body.name,
          email:body.email,
          password:body.password
        }
      })
      const jwtToken = await sign({
        id:user.id,
      },c.env.JWT_SECRET)
      return c.text(jwtToken)
    }catch (e) {
      console.log(e)
      c.status(411)
       return c.text("User alredy exists");
    }
  })
  
  userRouter.post('/signin',async (c) => {
    const body =await c.req.json();
    const {success} = signinSchema.safeParse(body)
    if(!success){
      c.status(400)
      return c.text("Inavlid information")
    }
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
      const user = await prisma.user.findFirst({
        where:{
          email:body.email,
          password:body.password
        }
      })
      if(!user){
        c.status(403)
        return c.text("Incorrect credentials");
      }
      const jwtToken = await sign({
        id:user.id,
      },c.env.JWT_SECRET)
      return c.text(jwtToken)
    }catch (e) {
       console.log(e)
    }
})
  