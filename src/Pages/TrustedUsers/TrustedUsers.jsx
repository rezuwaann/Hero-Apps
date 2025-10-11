import React from 'react';

const TrustedUsers = () => {
    return (
        <div className='text-center text-white p-20 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
            <div>
                <h1 className='font-bold text-5xl'>Trusted by Millions, Built for You</h1>
            </div>

            <div className='flex flex-col lg:flex-row gap justify-center gap-6 mt-10'>
                <div className='px-15'>
                    <p>Total Downloads</p>
                    <h1 className='font-extrabold text-6xl'>29.6M</h1>
                    <p>21% more than last month</p>
                </div>

                <div className='px-15'>
                    <p>Total Reviews</p>
                    <h1 className='font-extrabold text-6xl'>906K</h1>
                    <p>46% more than last month</p>
                </div>

                <div className='px-15'>
                    <p>Active Apps</p>
                    <h1 className='font-extrabold text-6xl'>132+</h1>
                    <p>31 more will Launch</p>

                </div>

            </div>
        </div>
    );
};

export default TrustedUsers;