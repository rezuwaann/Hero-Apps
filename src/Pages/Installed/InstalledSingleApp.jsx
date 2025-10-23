import { Download, MessageSquareHeart, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';


const InstalledSingleApp = ({ app,handleUninstall }) => {
    return (
        <div className='h-[112px] bg-white p-2 md:p-5 rounded-md mt-3 shadow-lg flex justify-between items-center'>

            <div className='flex items-center gap-1 lg:gap-5'>
               <Link to={`/appdetails/${app.id}`}>
                <img className='md:h-20 md:w-20 h-10 w-10' src={app.image} alt="" /></Link>
                <div>
                   <Link to={`/appdetails/${app.id}`}>
                    <h5 className='font-semibold mb-2'>{app.title}</h5></Link>

                    <div className='flex gap-5'>
                        <div className='flex items-center gap-1'>
                            <Download className='text-[#00827A]'></Download>
                            <h1 className=''>{app.downloads/10000000}M</h1>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Star className='text-[#FF8811] fill-current'></Star>
                            <h1 className=''>{app.ratingAvg}</h1>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MessageSquareHeart className='text-[#632EE3]'></MessageSquareHeart>
                            <h1 className=''>{app.reviews}</h1>
                        </div>
                    </div>
                </div>
            </div>
 

            <div onClick={()=>{
                handleUninstall(app.id);
              
            }} 
            className="btn btn-accent text-white">Uninstall
                
               
            </div>

            
        </div>
    );
};

export default InstalledSingleApp;