import React from 'react';
import googlePlay from '../../assets/googlePlay.png'
import appStore from '../../assets/appStore.png'
import hero from '../../assets/hero.png'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='bg-gray-100'>

            <div className='text-center pt-20 mb-10'>
                <h1 className='font-bold text-7xl'>We Build <br /> <span className='text-[#9F62F2]'>Productive</span> Apps</h1>
                <p className='text-gray-600 text-xl mt-8 mb-10 px-10 lg:px-50'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex flex-col lg:flex-row gap-4 justify-center'>

                    <Link to={'https://play.google.com/'}>
                        <button className='border border-gray-300 hover:shadow-lg hover:bg-gray-200 max-w-[200px] mx-auto lg:mx-0 hover:cursor-pointer  px-5 py-2 rounded-md flex gap-2 items-center'>
                            <img className='h-8 w-8' src={googlePlay} alt="" /> Google Play</button>
                    </Link>

                    <Link to={'https://www.apple.com/app-store/'}>
                        <button className='border border-gray-300 hover:shadow-lg hover:bg-gray-200 max-w-[200px] mx-auto lg:mx-0 hover:cursor-pointer  px-5 py-2 rounded-md flex gap-2 items-center'>
                            <img className='h-8 w-8' src={appStore} alt="" /> App Store</button>
                    </Link>

                </div>

            </div>

            <div >
                <img className='mx-auto' src={hero} alt="" />
            </div>
        </div>
    );
};

export default Banner;