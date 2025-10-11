import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Download, MessageSquareHeart } from 'lucide-react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const AppDetails = () => {

    const id = useParams()

    const myId = parseInt(id.id)
    // console.log(myId)

    const apps = useLoaderData();
    // console.log(apps)

    const singleApp = apps.find(app => app.id === myId)
    // console.log(singleApp)

    const { title, image, companyName, size, description, ratingAvg, reviews, downloads } = singleApp;

    return (
        <div>

            <div className='flex items-center border gap-10 px-40 py-10'>
                <div>
                    <img className=' w-[350px] p-10' src={image} alt="" />
                </div>
                <div className='border'>
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
                                {downloads / 10000000}M
                            </h1>
                        </div>

                        <div className='flex flex-col items-center'>
                            <MessageSquareHeart className='text-[#632EE3]'></MessageSquareHeart>
                            <p>Downloads</p>
                            <h1 className='font-extrabold text-4xl'>
                                {downloads / 10000000}M
                            </h1>
                        </div>


                    </div>

                    <div className='my-5'>
                        <button className="btn btn-accent text-white">Install Now ({size}MB)</button>
                    </div>

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
    );
};

export default AppDetails;