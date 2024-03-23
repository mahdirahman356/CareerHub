import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import img from './images/bg1.png'
import img2 from './images/bg2.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveAppliedJobId } from "../Storege/Storege";
const JobDetails = () => {
    let jobs = useLoaderData()
    let {id} = useParams()
    let idInt = parseInt(id)
    let job = jobs.find(jobs => jobs.id === idInt)
    let {job_description,job_responsibility,educational_requirements,experiences,salary,job_title,contact_information} = job

      let handleApply =() => {
        saveAppliedJobId(idInt)
         toast('You Have Applied Successfully')
      }
        return (
        <div>
            <div className="flex flex-col md:flex-row justify-between mt-6">
                <img src={img} alt="" />
                <img className="hidden md:grid" src={img2} alt="" />
            </div>
             <div className="flex flex-col lg:flex-row gap-5 my-10 md:my-36">
                <div className="w-[90%] mx-auto md:w-[70%] space-y-4">
                    <p className="font-semibold">Job Description : <span className="font-normal text-[#757575]">{job_description}</span></p>
                    <p className="font-semibold">Job Responsibility : <span className="font-normal text-[#757575]">{job_responsibility}</span></p>
                    <p className="font-semibold">Educational Requirements:</p>
                    <p className="text-[#757575]">{educational_requirements}</p>
                    <p className="font-semibold">Experiences:</p>
                    <p className="text-[#757575]">{experiences}</p>
                </div>

                <div className="w-[70%] mx-auto lg:w-[30%] bg-[#7E90FE1A] rounded-xl p-4">
                <p className="font-semibold pb-4 border-b-[1px] border-gray-300">Job Details</p>
                <div className="py-4 space-y-2">
                    <p className="font-semibold flex items-center gap-1"><CiDollar className="text-[20px] text-[#7E90FE]"/> Salary : <span className="font-normal text-[#757575]">{salary}</span></p>
                    <p className="font-semibold flex items-center gap-1"><IoCalendarOutline className="text-[20px] text-[#7E90FE]"/>Job Title : <span className="font-normal text-[#757575]">{job_title}</span></p>
                </div>

                <p className="font-semibold pb-4 border-b-[1px] border-gray-300">Contact Information</p>

                <div className="py-4 space-y-2">
                    <p className="font-semibold flex items-center gap-1"><LuPhone className="text-[20px] text-[#7E90FE]"/>Phone : <span className="font-normal text-[#757575]">{contact_information.phone}</span></p>
                    <p className="font-semibold flex items-center gap-1"><HiOutlineMail className="text-[20px] text-[#7E90FE]"/>Email : <span className="font-normal text-[#757575]">{contact_information.email}</span></p>
                    <p className=" flex items-start gap-1"><IoLocationOutline className="text-[25px] text-[#7E90FE]"/> <div className="font-normal text-[#757575]"><span className="font-semibold text-black">Address : </span> {contact_information.address}</div></p>
                </div>
                <button onClick={handleApply} className="btn w-full bg-[#7E90FE] text-white">Apply Now</button>
                <ToastContainer />
               </div>
             </div>
        </div>
    );
};

export default JobDetails;