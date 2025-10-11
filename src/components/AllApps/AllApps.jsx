import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from '../SingleApp/SingleApp';

const AllApps = () => {

    const apps = useLoaderData();
  
    const [allApps,setAllApps]=useState([apps])

// console.log(apps)

    // console.log('all apps',allApps)
    return (
        <div className='bg-gray-100'>
            <div className='text-center p-20'>
                <h1 className='font-bold text-5xl'>Our All Applications</h1>
                <p className='mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex justify-between  mx-20 underline'>
                <p className='font-semibold'>({apps.length}) Apps Found</p>
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-10 mx-auto'>
                {
                    allApps[0].map(app=> <SingleApp key={app.id} app={app}> </SingleApp>)
                }
            </div>
        </div>
    );
};

export default AllApps;