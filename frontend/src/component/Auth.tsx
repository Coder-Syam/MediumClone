import { ChangeEvent, useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import { SignupSchema } from "@syam29/medium-common1"
import axios from "axios"
import { BACKEND_URL } from "../pages/config"


export const Auth = ({type}: {type: "signup" | "signin"}) =>{
    const navigate = useNavigate();
    const [postInputs,setPostInputs] = useState<SignupSchema>({
        name:"",
        email:"",
        password:""
    })

    async function SendRequest(){
      try{  
        const resposnse =  await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup"?"signup":"signin"}`,postInputs);
        const jwt = resposnse.data;
        localStorage.setItem("token",jwt)
        navigate("/blogs");
      }catch(e){
        alert("Error while signing up")
      }
      }

    return <div className="h-screen flex justify-center items-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-2">
    <div className="max-w-md text-3xl font-bold">
        Create an account
      </div>
      <div className="text-slate-300">
        {type === "signup"? "Already have an account?":"Don't have any account?" }
        <Link className="pl-2 underline" to={type ==="signup"? "/signin" : "/signup"}>
        {type === "signup" ? "Sign in":"Signup"}
        </Link>
      </div>
      </div>
      <div className="pt-4">
      {type === "signup"?<LabeledInput label="Username" placeholder="syam..." onChange={(e)=>{
        setPostInputs({
            ...postInputs,
            name:e.target.value
        })
      }} />:null}
            <LabeledInput label="Email" placeholder="syam@gmail.com" onChange={(e)=>{
        setPostInputs({
            ...postInputs,
            email:e.target.value
        })
      }} />
            <LabeledInput label="Password" type={"password"} placeholder="123456" onChange={(e)=>{
        setPostInputs({
            ...postInputs,
            password:e.target.value
        })
      }} />
      <button onClick={SendRequest} type="button" className="w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 
      focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 
      dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
        {type === "signup"? "Signup":"Signin"}
        </button>
      </div>
      </div>
        </div>
    </div>
} 

interface labeledInputType {
    label:string,
    placeholder:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=> void;
    type?:string
}


function LabeledInput({label,placeholder,onChange,type}:labeledInputType){
    return <div>
<label className="block mb-2 text-sm text-black font-bold pt-2">{label}</label>
<input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} />
    </div>
    }
