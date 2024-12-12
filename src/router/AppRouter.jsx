import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../Navbar";
import { Home,C,Java,Javascript,Php,Python, } from "../pages";

export const AppRouter = () => {
    return  <>
        <Routes>
            <Route path ="/" element={<Navbar/>}>
                <Route index element={<Home/>}  />
                <Route path='login' element={<C/>}  />
                <Route path='register' element={<Java/>}  />
                <Route path='dashboard' element={<Javascript/>}  />
                <Route path='login' element={<Php/>}  />
                <Route path='login' element={<Python/>}  />
            </Route>
        </Routes>
    </>
    
}