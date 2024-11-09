import { useBlogs } from "../assets/hooks/useBlog"
import { AppBar } from "../component/AppBar"
import { Avatar, BlogCard } from "../component/BlogCard"
import { Skeleton } from "../component/Skeleton";

export const Blogs=()=>{
 const { loading, blogs } = useBlogs();

if(loading){
    return <div className="w-screen h-screen">
        <div className="mt-20">
        <Skeleton/>  
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        </div>
        </div>
}
return <div>
        <AppBar/>
        <div className="flex justify-center flex-col items-center">
        <div>
            {blogs.map( blog => <BlogCard
        id={blog.id}
        authorName={blog.author.name || "Anonymous"}
        title={blog.title}
        content={blog.content}
        publishedDate={"2nd Feb 2024"}/> )}
        </div>
    </div>
</div>
}