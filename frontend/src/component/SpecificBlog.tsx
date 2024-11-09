import { Blogtype } from "../assets/hooks/useBlog"
import { Avatar } from "./BlogCard"

export function SpecificBlog({ blog }:{ blog : Blogtype }){
    return <div className="grid grid-cols-12 px-24 pt-20">
        <div className="col-span-8">
            <div className="text-5xl font-extrabold">
                        {blog.title}
                        </div>
                            <div className="pt-2 text-slate-600">
                                Posted on 24 Aug
                            </div>
                    <div className="pt-2 text-slate-800">
                        {blog.content}s
                        </div>           
        </div>
            <div className="col-span-4">
                    <div className="text-lg font-semibold">
                        Author
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <div>
                            <Avatar name={blog.author.name} size="big"/>
                        </div>
                            <div>
                                <div className="font-semibold text-lg">
                                {blog.author.name || "Anonymous"}
                                </div>
                                <div>
                                    Random person fro the earth who wants to be a Chess master
                                </div>
                        </div>
                    </div>
            </div>
    </div>
}