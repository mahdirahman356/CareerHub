
import PropTypes from 'prop-types'; 
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';
const AppliedContent = ({appliad}) => {
    let {id,logo,job_title,company_name,location,salary,remote_or_onsite,job_type} = appliad

    return (
        <div className='mb-24'>
            <div className="flex flex-col justify-between items-center md:flex-row p-3 md:p-8  bg-base-100  rounded-lg border-gray-100  border-2 ">
          <div className="flex flex-col md:flex-row items-center gap-6">
          <figure><img className="bg-[#F4F4F4] p-8" src={logo} alt="Movie"/></figure>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">{job_title}</h2>
            <p className='text-gray-600 font-semibold'>{company_name}</p>
            <div className="flex gap-4">
            <button className="btn btn-outline border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
            <button className="btn btn-outline border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
                <p className="flex items-center gap-1 text-gray-500"><CiLocationOn className="text-[18px]" />{location}</p>
                <p className="flex items-center gap-1 text-gray-500"><CiDollar className="text-[18px]"/>{salary}</p>
            </div>   
          </div>
         
          </div>
          <Link to={`/job/${id}`}>
              <button className="btn btn-primary text-white bg-[#7E90FE] border-none">View Details</button>
              </Link>
          {/* <button className="btn mt-4 bg-[#7E90FE] text-white">View Details</button> */}
        </div>
        </div>
    );
};
AppliedContent.propTypes ={
    appliad: PropTypes.object.isRequired
}
export default AppliedContent;