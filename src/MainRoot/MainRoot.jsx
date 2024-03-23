import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainRoot = () => {
    return (
        <div>
            <div className="md:w-[80%] mx-auto">
            <Navbar></Navbar>
            </div>
            <div className="md:w-[80%] mx-auto">
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default MainRoot;