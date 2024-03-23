
import HeroImage from './HeroImage/user.png'
const Hero = () => {
    return (
        <div>
            <div className="hero min-h-[80vh]">
         <div className="hero-content flex-col lg:flex-row-reverse">
           <img className="md:w-[60%] lg:w-[40%]" src={HeroImage} />
           <div>
             <h1 className="text-5xl font-bold">One Step Closer To Your <span className="text-[#7E90FE]">
             Dream Job</span></h1>
             <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
             <button className="btn bg-[#7E90FE] text-white">Get started</button>
           </div>
         </div>
       </div>
        </div>
    );
};

export default Hero;