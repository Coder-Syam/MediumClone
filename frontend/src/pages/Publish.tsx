import { useState } from "react"
import { AppBar } from "../component/AppBar"
import axios from "axios";
import { BACKEND_URL } from "./config";
import { useNavigate } from "react-router-dom";


export function Publish(){
    const navigate = useNavigate();
    const [titles,setTitles] = useState("");
    const [contents,setContents] = useState("");

    async function onClick(){
       const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
            title:titles,
            content:contents
        },{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        navigate(`/blog/${response.data.id}`)
    }

    return <div>
        <AppBar/>
        <div className="mt-4">
            <div className="flex justify-center text-5xl font-medium">
                  <input className="h-24 w-full mx-60 pl-2 border-l-1 border-slate-600 bg-slate-100 rounded-xl focus:outline-none" onChange={(e)=>{
                    setTitles(e.target.value);
                  }} type="text" placeholder="Title"/>
            </div>
            <div className="flex justify-center pt-0 mt-2 text-xl">
                 <textarea id="editor" rows={8} className="w-full mx-60 pl-2 pt-2 text-sm text-gray-800 bg-slate-100 border-0 focus:outline-none bg-slate-100 rounded-xl" onChange={(e)=>{
                    setContents(e.target.value);
                 }} placeholder="Write an article..." required ></textarea>
            </div>
            <div className="flex">
                <button type="button" onClick={onClick} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-4 mx-60">Post</button>
            </div>
        </div>
    </div>

}