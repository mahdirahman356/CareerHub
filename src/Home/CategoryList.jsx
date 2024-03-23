import icons from './icons/accounts.png'
import icons2 from './icons/social-media 1.png'
import icons3 from './icons/chip.png'
import icons4 from './icons/creative.png'

const CategoryList = () => {
    return (
        <div className="mb-14">
            <div className="title w-[95%] md:w-[60%] mx-auto text-center my-14">
              <h2 className="text-2xl md:text-4xl font-bold mb-3">Job Category List</h2>
              <p className="text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        
        <div className="flex gap-10 md:grid p-7 bg-[#F4F4F4] rounded-xl mb-3">
         <img className="bg-[#E8E8E8]  rounded-lg p-2 mb-4" src={icons} alt="" />
           <div>
           <h4 className="text-[20px] font-bold">Creative Design</h4>
            <p className="text-[15px]">100+ Jobs Available</p>
           </div>
        </div>
        
        <div className="flex gap-10 md:grid p-7 bg-[#F4F4F4] rounded-xl mb-3">
         <img className="bg-[#E8E8E8] rounded-lg p-2 mb-4" src={icons2} alt="" />
            <div>
            <h4 className="text-[20px] font-bold">Creative Design</h4>
            <p className="text-[15px]">100+ Jobs Available</p>
            </div>
        </div>
        
        <div className="flex gap-10 md:grid p-7 bg-[#F4F4F4] rounded-xl mb-3">
         <img className="bg-[#E8E8E8] rounded-lg p-2 mb-4" src={icons3} alt="" />
            <div>
            <h4 className="text-[20px] font-bold">Creative Design</h4>
            <p className="text-[15px]">100+ Jobs Available</p>
            </div>
        </div>
        
        <div className="flex gap-10 md:grid p-7 bg-[#F4F4F4] rounded-xl mb-3">
         <img className="bg-[#E8E8E8] rounded-lg p-2 mb-4" src={icons4} alt="" />
           <div>
           <h4 className="text-[20px] font-bold">Creative Design</h4>
            <p className="text-[15px]">100+ Jobs Available</p>
           </div>
        </div>
        
        
        </div>
        </div>
    );
};

export default CategoryList;