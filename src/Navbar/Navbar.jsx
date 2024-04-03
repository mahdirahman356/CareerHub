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
    <div className="flex items-center gap-5">
    <div role="button" className="drawer lg:hidden">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-50 min-h-full bg-base-200 text-base-content space-y-4">
      <NavLink className={({isActive}) => isActive && "text-[steelblue]"} to="/">Home</NavLink>
      <NavLink className={({isActive}) => isActive && "text-[steelblue]"} to="/singIn">SingIn</NavLink>
      <NavLink className={({isActive}) => isActive && "text-[steelblue]"} to="/singUp">SingUp</NavLink>
      <NavLink className={({isActive}) => isActive && "text-[steelblue]"} to="/applied">Applied Jobs</NavLink>
      <NavLink className={({isActive}) => isActive && "text-[steelblue]"} to="blog">Blog</NavLink>
    </ul>
  </div>
</div>
    <a className=" font-bold text-xl md:text-2xl">CareerHub</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 md:flex gap-9 text-[#757575] font-[500]">
      <NavLink className={({isActive}) => isActive && "text-[steelblue]"} to="/">Home</NavLink>
      <NavLink className={({isActive}) => isActive && "text-[steelblue]"} to="/singIn">SingIn</NavLink>
      <NavLink className={({isActive}) => isActive && "text-[steelblue]"} to="/singUp">SingUp</NavLink>
      <NavLink className={({isActive}) => isActive && "text-[steelblue]"} to="/applied">Applied Jobs</NavLink>
      <NavLink className={({isActive}) => isActive && "text-[steelblue]"} to="blog">Blog</NavLink>
    </ul>
  </div>



 



  <div className="navbar-end">
    {
      user ?
      <> 
      <p className="hidden md:flex font-bold mx-3">{user.displayName}</p>
      <button onClick={handleSingOut} className="btn bg-[#7E90FE] text-white">SingOut</button>
     </>
    : <>
       
       <Link to="/singUp"><button className="btn mr-2 bg-[#7E90FE] text-white">SingUp</button></Link>
       <Link to="/singIn"><button className="btn bg-[#7E90FE] text-white ">SingIn</button></Link>
        </> 


    }

  </div>
</div> 
    {
      user &&     
      <div className="">
    <p className='md:hidden text-[12px] text-right mr-3 font-semibold'>{user.displayName}</p>
      </div>
    }

        </div>
    );
};

export default Navbar;