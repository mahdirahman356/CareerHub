import { useLoaderData} from "react-router-dom";
import { getAppliedJobId } from "../Storege/Storege";
import { useEffect, useState } from "react";
import img from '../JobDetails/images/bg1.png'
import img2 from '../JobDetails/images/bg2.png';
import AppliedContent from "./AppliedContent";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Helmet } from "react-helmet-async";


const AppliedJobs = () => {

    let [appliad,setAppliad] = useState([])
    let [display,setDisplay] = useState([])

    let jobs = useLoaderData()
    let job = getAppliedJobId()
    useEffect(()=>{
        let jobApplied = []
    for(let id of job){
        let getId = jobs.find(job => job.id === id)
        jobApplied.push(getId)
        setAppliad(jobApplied)
        setDisplay(jobApplied)

    }
    },[job,jobs])

    let handleFilter = (filter) => {
        if(filter === 'all'){
            setDisplay(appliad)
        }
        else if(filter === 'remete'){
            let remeteData = appliad.filter(job => job.remote_or_onsite === 'Remote')
            setDisplay(remeteData)
        }
        else if(filter === 'onsite') {
            let fullTimeData = appliad.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplay(fullTimeData)
        }
    }

    
      return(
        <div>
            <Helmet>
                <title>Applied Jobs</title>
            </Helmet>
            <div className="flex flex-col md:flex-row items-center justify-between mt-6">
                <img src={img} alt="" />
                <p className="text-2xl font-bold mt-4">Applied Jobs</p>
                <img className="hidden md:grid" src={img2} alt="" />
            </div>
               
            <div className="mt-24 w-32 ml-auto">
           <div className="dropdown dropdown-end ">
            <div tabIndex={0} role="button" className="btn rounded-md m-1 flex gap-1">Filter <RiArrowDropDownLine className="text-[27px]"/></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a onClick={()=> handleFilter('all')}>All</a></li>
              <li><a onClick={()=> handleFilter('remete')}>Remete</a></li>
              <li><a onClick={()=> handleFilter('onsite')}>Onside</a></li>
            </ul>
          </div>   
           </div>
           
            {   

                display.map((appliad)=> <AppliedContent
                 key={appliad.id}
                 appliad={appliad}
                 ></AppliedContent>)
            }
        </div>
    );
};

export default AppliedJobs;