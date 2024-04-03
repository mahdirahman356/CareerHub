import { useContext, useState } from "react";
import { AuthContext } from "../Context/Context";
import {  Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase";
import { AiFillGithub } from "react-icons/ai";
import { GithubAuthProvider } from "firebase/auth";



const SingUp = () => {
    
    let {createUser,setName} = useContext(AuthContext)
    let [Error , setError] = useState()
    let [success, setSuccess] = useState()
    let navigate = useNavigate()
    let handleSubmit = (e) => {
        e.preventDefault();
        let email = e.target.email.value
        let password = e.target.password.value
        let name = e.target.name.value
        console.log(email,password,name)
        setError("")
        setSuccess("")
        if(password.length < 6){
           setError("password must be 6 character")
           return
        }
        if(!/[A-Z]/.test(password)){
           setError("Password must have one capital letter")
           return
        }
        if(!/[0-9]/.test(password)){
            setError("Password must have one Number")
            return
         }
        createUser(email,password)
        .then(result => {
            let theUser = result.user
            console.log(theUser)
            setSuccess("User created successfully!")

            setName(theUser, {displayName : name})
            navigate("/")
            .then(() => {
                console.log("")

            })
            e.target.reset()

        })

        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
            console.log(errorMessage)
            return
          });


        


         
    }

    const provider = new GoogleAuthProvider();
     let handleGoogleLogin = () => {
         signInWithPopup(auth,provider)
         .then(result => {
            console.log(result.user)
            navigate("/")
         })
         .catch(error => {
            let errorMessage = error.message;
            console.log(errorMessage)
         })
     }

     const Gitprovider = new GithubAuthProvider();
      let handleGithubLogIn = () => {
         signInWithPopup(auth,Gitprovider)
         .then(result => {
            console.log(result.user)
            navigate("/")
         })
         .catch(error => {
            let errorMessage = error.message;
            console.log(errorMessage)
         })
      }
    
    return (
        <div>
            <div className="min-h-[90vh]">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl md:text-4xl font-bold  text-center mt-5 md:mt-14">Create Your Account</h1>
                </div>
                <div className="card shrink-0 shadow-2xl bg-base-100 md:w-[35%] mx-auto mb-16">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-6">

                        <span>Name</span>
                        <input type="text"
                         name="name"
                         placeholder="Your Name" 
                         className="input input-bordered"
                         required />

                        <span>Email</span>
                        <input type="email"
                         name="email" 
                         placeholder="email" 
                         className="input input-bordered" 
                         required />

                        <span>Password</span>
                        <input type="password" 
                        name="password" 
                        placeholder="password" 
                        className="input input-bordered" 
                        required />

                        {Error && <p className="text-red-600">{Error}</p>}
                        {success && <p className="text-green-600">{success}</p>}

                        <input className="btn    w-full mt-7 rounded-3xl  bg-[#7E90FE] text-white " type="submit" value="submit" />

                        <button onClick={handleGoogleLogin} className="btn flex"><FcGoogle className="text-[20px]" /> Sing Up with Google</button>
                        <button onClick={handleGithubLogIn} className="btn"><AiFillGithub className="text-[20px]"/>Sing Up with Github</button>
                        <Link className="w-full" to="/singIn"><button className="btn rounded-3xl mt-4 bg-[#7E90FE] text-white w-full">Log In Your Account</button></Link>
                    </form>

                    <div className="form-control mt-6">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;



