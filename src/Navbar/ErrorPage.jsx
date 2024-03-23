import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-[90%] mt-24 mx-auto flex-col items-center justify-center">
            <h1 className="text-3xl text-center mb-6">Oopss !!!</h1>
            <div className="w-24 mx-auto">
            <Link to="/">
             <button className="btn">Go Back</button>
             </Link>
            </div>
    </div>
    );
};

export default ErrorPage;