import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

const SingIn = () => {
    let navigate = useNavigate()
    let {singIn} = useContext(AuthContext)
    let handleSingIN = (e) => {
        e.preventDefault();
        let email = e.target.email.value
        let password = e.target.password.value
        console.log(email,password)
        singIn(email,password)
        .then(result => {
            console.log(result.user)
            e.target.reset()
            navigate("/")
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });
    }
    return (
        <div>
            <div className="min-h-[90vh]">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl md:text-3xl font-bold  text-center mt-5 mb-2 md:mt-14">Log In Your Accout</h1>
                </div>
                <div className="card shrink-0 shadow-2xl bg-base-100 md:w-[30%] mx-auto mb-16">
                    <form onSubmit={handleSingIN} className="flex flex-col gap-3 p-6">

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

                        <input className="btn btn-primary w-full mt-7" type="submit" value="submit" />
                    </form>
                    <div className="form-control mt-6">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingIn;