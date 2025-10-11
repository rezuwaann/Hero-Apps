import React from 'react';
import { Download } from 'lucide-react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';


const SingleApp = ({ app }) => {
    // console.log(app)
    return (

        <Link to={`/appdetails/${app.id}`}>
            <div className="card bg-base-100 w-80 shadow-sm mx-auto hover:-translate-y-2 hover:shadow-xl hover:bg-gray-200">
                <figure>
                    <img className='w-[250px] h-[250px] object-cover p-5'
                        src={app.image}
                        alt="Shoes" />
                </figure>

                <div className="card-body">
                    <h2 className="text-lg font-semibold text-center">
                        {app.title}

                    </h2>


                    <div className=" flex justify-between">
                        <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-gray-200 text-[#00D390]"> <Download />{app.downloads/10000000}M</div>
                        <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-gray-200 text-[#FF8811]"><Star className=' fill-current' />{app.ratingAvg}</div>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default SingleApp;