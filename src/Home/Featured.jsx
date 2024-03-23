import { useEffect, useState } from "react";
import FeaturedContent from "./FeaturedContent";

const Featured = () => {
    let [featured,setFeatured] = useState([])
    let [seeAll , setSeeAll] = useState(4)
    useEffect(()=>{
       fetch('jobs.json')
       .then(res => res.json())
       .then(data => setFeatured(data))
    },[])
    return (
        <div className="mb-14">
            <div className="title w-[95%] md:w-[60%] mx-auto text-center my-14">
              <h2 className="text-2xl md:text-4xl font-bold mb-3">Featured Jobs</h2>
              <p className="text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                featured.slice(0,seeAll).map((featured,index)=><FeaturedContent
                key={index}
                 featured={featured}
                 ></FeaturedContent>
                 
                )
             }
            </div>
            <div className="w-[9%] mx-auto mt-6">
                
                <button onClick={()=>setSeeAll(featured.length)} className="btn btn-primary text-white bg-[#7E90FE] border-none">See All Jobs</button>
                
          </div>
        </div>
    );
};

export default Featured;