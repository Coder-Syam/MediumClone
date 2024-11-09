import { Link } from "react-router-dom";

export interface BlogCardProps{
    id:number
    authorName:string,
    title:string,
    content:string,
    publishedDate:string;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}:BlogCardProps) => {
  return  <Link to={`/blog/${id}`}>
         <div className="mt-2 border-b border-slate-200 w-screen max-w-lg">
          <div className="flex">
            <div className="pr-2">
            <Avatar size="small" name={authorName}/>
            </div>
            <div className="font-xs text-slate-500">
            {authorName}
            </div>
            <div className="flex justify-center flex-col px-2 text-slate-400">
            <Circle/> 
            </div>
            <div className="text-green-400">
            {publishedDate}
          </div>
            </div>
          <div className="font-bold text-xl pt-2">
            {title}
          </div>
          <div className="font-xs text-slate-500">
            {content.substring(0, 100)+ "..."}
          </div>
          <div className="text-slate-400 font-thin pt-3">
            {`${Math.ceil(content.length / 100)} minutes`}
          </div>
    </div>
    </Link>
}

function Circle(){
  return <div className="text-xs">
    <p>&#9679;</p>
  </div>
}

export function Avatar({ name, size }: { name:string , size:"small" | "big" }){
  return <div>
            <div className={`relative inline-flex items-center justify-center ${size ==="small"? "w-6 h-6 text-sm" : "w-10 h-10 text-lg"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className={`text-gray-600 dark:text-gray-300`}>{name[0]}</span>
        </div>
  </div>
}

