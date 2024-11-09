import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from "hono/jwt";
import { blogInputnSchema,blogUpdatenSchema } from "@syam29/medium-common1";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL : string;
        JWT_SECRET: string;
      },
      Variables:{
        userId:string
      }
}>()

blogRouter.use("/*",async(c,next)=>{
    const token = c.req.header("authorization") || ""
    const user = await verify(token,c.env.JWT_SECRET)
    if(user){
        //@ts-ignore
    c.set("userId",user.id);
        await next();
    }else {
        c.status(403);
        return c.text("User not logged in");
    }
})

blogRouter.post('/', async(c) => {
    const body =await c.req.json();
    const {success} = blogInputnSchema.safeParse(body);
    console.log(success)
    if(!success){
      c.status(411)
      return c.json({
        message:"User not found"
      })
    }
    const userId = c.get("userId")
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
      const blog = await prisma.post.create({
        data:{
          title:body.title,
          content:body.content,
          authorId:Number(userId)
        }
      })
      return c.json({
        id:blog.id
      })
  })

  blogRouter.put('/', async(c) => {
    const body =await c.req.json();
    const {success} = blogUpdatenSchema.safeParse(body);
    if(!success){
      c.status(404)
      return c.text("User not found")
    }
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

      const blog = await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
          title:body.title,
          content:body.content,
        }
      })
      return c.json({
        id:blog.id
      })
  }) 

  blogRouter.get('/bulk', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      const blog = await prisma.post.findMany({
        select:{
          id:true,
          title:true,
          content:true,
          author:{
            select:{
              name:true
            }
          }
        }
      })
      if(!blog){
        return c.text("Something went wrong")
      }else {
        return c.json({
            blog
        })
      }
  })

  blogRouter.get('/:id',async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        const blog = await prisma.post.findFirst({
            where:{
                id:Number(id)
            } ,
            select:{
              id:true,
              title:true,
              content:true,
              author:{
                select:{
                  name:true
                }
              }

            }
          })
          return c.json({
            blog
          })
    }catch(e){
        console.log(e)
        c.status(403)
        return c.text("Error while fetching the data");
    }

  })


