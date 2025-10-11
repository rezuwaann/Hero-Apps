import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Download, MessageSquareHeart } from 'lucide-react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { useState } from 'react';
import AppNotFound from '../AppNotFound/AppNotFound';
import { addToStoreDB, getInstalledApp } from '../../utility/addToDB';
import { useEffect } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';

const AppDetails = () => {

    const id = useParams()
    const apps = useLoaderData();

    const allInstalledApp = getInstalledApp();
    const [installed, setInstalled] = useState(false);
    // const [appNotFound, setAppNotFound] = useState(false);

    const myId = parseInt(id.id)
    useEffect(() => {
        if (allInstalledApp.includes(myId)) {
            setInstalled(true)
        }
    }, [allInstalledApp, myId])




    if (isNaN(myId) || myId > 20 || myId < 1) {
        return <AppNotFound></AppNotFound>
    }



    // console.log(apps)

    const singleApp = apps.find(app => app.id === myId)
    // console.log(singleApp)

    const { title, image, companyName, size, description, ratingAvg, reviews, downloads } = singleApp;


    const handleInstall = (myId) => {
        console.log('installing', myId)
        toast(`${title} app is installed successfully in your device`)
        addToStoreDB(myId);
        setInstalled(true)

        return
    }

    // const alreadyInstalled = (id) => {
    //     if (allInstalledApp.includes(id)) {
    //         console.log('already installed')
    //         setInstalled(true)
    //         return true;
    //     }
    //     else { return false; }
    // }


    return (
        <div>


            <div>
                <div className='flex items-center  gap-10 px-40 py-10'>
                    <div>
                        <img className=' w-[350px] p-10' src={image} alt="" />
                    </div>
                    <div className=''>
                        <div>
                            <h1 className='font-bold text-3xl mb-3'>{title}</h1>
                            <h3>Developed by : <span className='text-[#632EE3] font-semibold'>{companyName}</span></h3>
                        </div>
                        <div className="divider">

                        </div>

                        <div className='flex justify-between'>
                            <div className='flex flex-col items-center'>
                                <Download className='text-[#00827A]'></Download>
                                <p>Downloads</p>
                                <h1 className='font-extrabold text-4xl'>
                                    {downloads / 10000000}M
                                </h1>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Star className='text-[#FF8811] fill-current'></Star>
                                <p>Downloads</p>
                                <h1 className='font-extrabold text-4xl'>
                                    {ratingAvg}
                                </h1>
                            </div>

                            <div className='flex flex-col items-center'>
                                <MessageSquareHeart className='text-[#632EE3]'></MessageSquareHeart>
                                <p>Downloads</p>
                                <h1 className='font-extrabold text-4xl'>
                                    {reviews}
                                </h1>
                            </div>


                        </div>

                        <div className='my-5'>
                            <button onClick={() => { handleInstall(myId) }} className={`btn btn-accent text-white`} disabled={installed} >{installed ? `Installed` : `Install Now (${size}MB)`} </button>
                        </div>
                        < ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                            transition={Bounce}
                        />
                    </div>
                </div>

                <div className="divider"></div>
                <div>

                </div>
                <div className="divider"></div>

                <div className='px-20'>
                    <h5 className='text-xl font-semibold'>Description</h5>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    );
};

export default AppDetails;