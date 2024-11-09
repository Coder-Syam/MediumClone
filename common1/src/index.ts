import z from "zod"

export const signupSchema = z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()
})

export const signinSchema = z.object({
    email:z.string().email(),
    password:z.string().min(6),   
})

export const blogInputnSchema = z.object({
    title:z.string(),
    content:z.string(),   
})

export const blogUpdatenSchema = z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()
})
export type SignupSchema = z.infer<typeof signupSchema>
export type SigninSchema = z.infer<typeof signinSchema>
export type BlogInputnSchema = z.infer<typeof blogInputnSchema>
export type BlogUpdatenSchema = z.infer<typeof blogUpdatenSchema>