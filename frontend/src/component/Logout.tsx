import { useNavigate } from "react-router-dom";

export function LogoutButton(){
const navigate = useNavigate();
    function onclick(){
         navigate("/");
         localStorage.removeItem("token");
    }
    return <div>
        <button onClick={onclick} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 :bg-blue-600">Logout</button>
    </div>
}