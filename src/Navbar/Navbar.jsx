import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/Context";

const Navbar = () => {

   let {user,setSingOut} = useContext(AuthContext)

   let  handleSingOut = () => {
       setSingOut()
       .then(()=> {
        console.log("Sign-out successful.")
       })
       .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });
   }

    return (
        <div>
           <div className="navbar bg-base-100 mt-9">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="mr-2 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <ul className="menu menu-horizontal gap-4 px-1 text-[#757575] font-[400]">
      <NavLink className={({isActive}) => isActive && "text-[steelblue]"} to="/">Home</NavLink>
      <NavLink className={({isActive}) => isActive && "text-[steelblue]"} to="/statistics">Statistics</NavLink>
      <NavLink className={({isActive}) => isActive && "text-[steelblue]"} to="/applied">Applied Jobs</NavLink>
      <NavLink className={({isActive}) => isActive && "text-[steelblue]"} to="blog">Blog</NavLink>
    </ul>  
      </ul>
    </div>
    <a className=" font-bold text-xl md:text-2xl">CareerHub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 md:flex gap-9 text-[#757575] font-[500]">
      <NavLink className={({isActive}) => isActive && "text-[steelblue]"} to="/">Home</NavLink>
      <NavLink className={({isActive}) => isActive && "text-[steelblue]"} to="/statistics">Statistics</NavLink>
      <NavLink className={({isActive}) => isActive && "text-[steelblue]"} to="/applied">Applied Jobs</NavLink>
      <NavLink className={({isActive}) => isActive && "text-[steelblue]"} to="blog">Blog</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    {
      !user ?<>
      <Link to="/singUp"><button className="btn mr-2 bg-[#7E90FE] text-white">SingUp</button></Link>
      <Link to="/singIn"><button className="btn bg-[#7E90FE] text-white ">SingIn</button></Link>
       </> 

       :<> 
        <p className="hidden md:flex xl font-bold mx-3">{user.displayName}</p>
        <button onClick={handleSingOut} className="btn bg-[#7E90FE] text-white">SingOut</button>
       </>


    }

  </div>
</div> 
    {
      user &&     
      <p className='md:hidden text-[12px] font-semibold text-right mr-3'>{user.displayName}</p>

    }

        </div>
    );
};

export default Navbar;