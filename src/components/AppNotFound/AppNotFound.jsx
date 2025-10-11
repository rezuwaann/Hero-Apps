import React from 'react';
import appError from '../../assets/App-Error.png'
import Navbar from '../../Pages/Header/Navbar';
import Footer from '../../components/Footer/Footer';

const AppNotFound = () => {
    return (
       <div>
           

            <div className='flex flex-col items-center justify-center p-10 gap-5'>
                <img src={appError} alt="" />

                <h1 className='font-semibold text-5xl'>App not found!</h1>
                <h5>The App you are looking for is not available.</h5>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AppNotFound;