import { useParams } from "react-router-dom";
import { useBlog } from "../assets/hooks/useBlog";
import { AppBar } from "../component/AppBar";
import { SpecificBlog } from "../component/SpecificBlog";
import { SpecificBlogSkeleton } from "../component/Skeleton";

export const Blog = () =>{
    const {id} = useParams();
    const { loadings,blog } = useBlog({
        id: id || ""
    });
    if(loadings){
        return <div>
            <div className="mt-60 mt grid grid-cols-2 ml-40">
                <SpecificBlogSkeleton/>
                 <SpecificBlogSkeleton/>
            </div>
        </div>
    }
  return <div>
    <AppBar/>
      <SpecificBlog blog={blog}/>
  </div>

}