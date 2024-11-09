import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";
import { LogoutButton } from "./Logout";

export function AppBar(){
    return <div className="flex px-10 py-4 justify-between border-b">
        <Link to={"/blogs"}>
        <div>
           Medium
        </div>
        </Link>
        <div className="flex justify-between">
            <Link to={"/publish"}>
        <button type="button" className="text-white bg-green-700 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-8">Publish</button>
            </Link>
            <Avatar size="big" name="Syam Sethi" />
            <LogoutButton></LogoutButton>
        </div>     
    </div>
}