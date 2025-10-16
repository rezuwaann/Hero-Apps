import React, { useState } from 'react';
import SingleApp from '../SingleApp/SingleApp';

const AppList = ({ allApps }) => {
    
    const [loading ,setLoading]=useState(true)

    
    setTimeout(() => {
        setLoading(false)
    }, 1000);


    if (loading) {
        return (
       <div className='flex justify-center items-center h-[50vh]'>
         <span className="block loading loading-dots loading-xl"></span>
       </div>
        )
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-10 mx-auto'>

            {
                allApps.map(app => <SingleApp key={app.id} app={app}> </SingleApp>)
            }
        </div>
    );
};

export default AppList;