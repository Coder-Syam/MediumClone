import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../pages/config";
import { useRecoilState } from "recoil";

export interface Blogtype{
    "id": number,
    "title": string,
    "content": string,
    "author": {
        "name": string
    }
}

export function useBlog({id}:{id:string}){
    const [loadings,setLoadings] = useState(true);
    const [blog,setBlog] = useState<Blogtype[]>([])
    useEffect(()=>{
            axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
             headers:{
                 Authorization:localStorage.getItem("token")
              }
            })
              .then(response=>{
                 setBlog(response.data.blog);
                 setLoadings(false)
              })
    },[id])
    return {
        loadings,
        blog
    }   
}

export function useBlogs(){
    const [loading,setLoading] = useState(true);
    const [blogs,setBlogs] = useState<Blogtype[]>([])
    useEffect(()=>{
       axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
        headers:{
            Authorization:localStorage.getItem("token")}
       })
         .then(response=>{
            setBlogs(response.data.blog);
            setLoading(false)
         })
    },[])
    return {
        loading,
        blogs
    }
}