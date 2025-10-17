import React from 'react';
import SingleApp from '../SingleApp/SingleApp';
import { Link } from 'react-router';

const TrendingApps = ({ apps }) => {
    const trending = apps.splice(0, 8)
    console.log(trending)
    return (
        <div className='bg-gray-100'>

            <div className='text-center py-10 flex flex-col gap-5'>
                <h1 className="font-bold text-7xl">
                    Trending Apps
                </h1>
                <p className='text-gray-600'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10 mx-auto'>
                {
                    trending.map(app => <SingleApp app={app}></SingleApp>)
                }
            </div>

            <Link to={'/apps'}>
            <div className='flex flex-col justify-center items-center p-10'>

                <button className='btn btn-neutral'>Show All</button>
            </div>
            </Link>
        </div>
    );
};

export default TrendingApps;