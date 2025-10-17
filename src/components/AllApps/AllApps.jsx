import React, {  useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import SingleApp from '../SingleApp/SingleApp';
import AppList from './AppList';
import Error from '../../Pages/Error/Error';

const AllApps = () => {

    const apps = useLoaderData();
    const apps2 = apps;

    const [allApps, setAllApps] = useState(apps)
    const [found, setFound] = useState(true)


    const handleSearch = (e) => {

        const searchName = e.target.value.toLowerCase();


        const searchedApps = allApps.filter(app => app.title.toLowerCase().includes(searchName));
        console.log(searchedApps)
        setAllApps(searchedApps)
        if (searchedApps.length === 0) {
            setFound(false)
        }
    }

    const showAll = () => {
        window.location.reload()
    }
    console.log(apps2)

    // console.log('all apps',allApps)

    return (
        <div className='bg-gray-100 '>
            <div className='text-center p-20'>
                <h1 className='font-bold text-5xl'>Our All Applications</h1>
                <p className='mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex justify-between  mx-10 underline'>
                <p className='font-semibold text-lg'>({apps.length}) Apps Found</p>
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
                        <input onChange={handleSearch} type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>


            {
                found ? <AppList allApps={allApps}></AppList> :
                    <div className='flex flex-col justify-center items-center h-[50vh] gap-5'>
                        <h1 className='text-5xl font-bold  text-center'>No Apps Found</h1>
                        <button onClick={showAll} className='btn btn-neutral'>Show All</button>
                    </div>
            }






        </div>
    );
};

export default AllApps;