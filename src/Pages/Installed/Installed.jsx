import React from 'react';
import { useLoaderData } from 'react-router';
import { getInstalledApp } from '../../utility/addToDB';
import { useState } from 'react';
import { useEffect } from 'react';
import { LucideArrowDown } from 'lucide-react';
import InstalledSingleApp from './InstalledSingleApp';
import { Bounce, ToastContainer, toast } from 'react-toastify';

const Installed = () => {

    const [myInstalledApps, setMyInstalledApps] = useState([])

    const allApps = useLoaderData();

    // console.log(convertedInstalledId)

    useEffect(() => {

        const installedAppID = getInstalledApp();
        const convertedInstalledId = installedAppID.map(id => parseInt(id))
        const allInstalledApps = allApps.filter(app => convertedInstalledId.includes(app.id));

        setMyInstalledApps(allInstalledApps)
    }, [allApps])



    const handleUninstall = (id) => {
        const updatedInstalled = myInstalledApps.filter(app => app.id !== id);
        

        setMyInstalledApps(updatedInstalled)

        localStorage.removeItem('installed', JSON.stringify(id))

        const app=myInstalledApps.find(app=>app.id===id);
        toast(`${app.title} is uninstalled successfully in your device`);
    }

    const handleSort = (type) => {
        if (type === 'Low') {
            const sortedByLow = [...myInstalledApps].sort((a, b) => a.downloads - b.downloads);
            setMyInstalledApps(sortedByLow)
        }
        else if (type === 'High') {
            const sortedByLow = [...myInstalledApps].sort((a, b) => b.downloads - a.downloads);
            setMyInstalledApps(sortedByLow)
        }
    }

    return (
        <div className='bg-gray-100 min-h-screen'>

            <div className='text-center pt-20 mb-10 max-20'>
                <h1 className="font-bold text-5xl mb-5">Your Installed Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex items-center justify-between mx-20'>
                <h5 className='text-xl font-semibold'>{myInstalledApps.length} Apps Found</h5>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn py-5">Sorted By Size<LucideArrowDown></LucideArrowDown></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleSort('Low')}><a>Low - High</a></li>
                        <li onClick={() => handleSort('High')}><a>High - Low</a></li>
                    </ul>
                </div>
            </div>
            <div className='lg:mx-20 mx-2'>
                {
                    myInstalledApps.map(app => <InstalledSingleApp key={app.id} app={app} handleUninstall={handleUninstall} ></InstalledSingleApp>)
                }
            </div>
            
            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}></ToastContainer>



        </div>
    );
};

export default Installed;