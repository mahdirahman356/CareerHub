import PropTypes from 'prop-types'; 
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';
const FeaturedContent = ({featured}) => {
    let {id,job_title,logo,company_name,location,salary,remote_or_onsite,job_type} = featured
    return (
        <div>
            <div>
            <div className="p-4 md:p-8  bg-base-100 border-2 rounded-lg border-gray-100">
          <figure><img className='mb-7' src={logo} alt="" /></figure>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">{job_title}</h2>
            <p className='text-gray-600 font-semibold'>{company_name}</p>
            <div className="flex gap-4">
            <button className="btn btn-outline border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
            <button className="btn btn-outline border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
            </div>
            <div className="flex gap-3">
                <p className="flex items-center gap-1 text-gray-500"><CiLocationOn className="text-[18px]" />{location}</p>
                <p className="flex items-center gap-1 text-gray-500"><CiDollar className="text-[18px]"/>{salary}</p>
            </div>
            <div>
              <Link to={`/job/${id}`}>
              <button className="btn btn-primary text-white bg-[#7E90FE] border-none">View Details</button>
              </Link>
            </div>
          </div>
        </div>
            </div>
        </div>
    );
};

FeaturedContent.propTypes ={
    featured: PropTypes.object.isRequired
}
export default FeaturedContent;