import { BrowserRouter,Route, Routes } from "react-router-dom";
import  Signup from "./pages/Signup";
import  Signin  from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { Publish } from "./pages/Publish";
import { Landing } from "./pages/Landing";
import { RecoilRoot } from 'recoil';

function App(){
  return <>
  <RecoilRoot>
    <BrowserRouter>
       <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/blog/:id" element={<Blog />}></Route>
            <Route path="/blogs/" element={<Blogs />}></Route>
            <Route path="/publish" element={<Publish/>}></Route>
       </Routes>
     </BrowserRouter>
    </RecoilRoot>
  </>
}

export default App;
