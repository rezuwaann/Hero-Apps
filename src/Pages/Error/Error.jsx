import React from 'react';
import errorImg from '../../assets/error-404.png'
import Navbar from '../Header/Navbar';
import Footer from '../../components/Footer/Footer';
const Error = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='flex flex-col items-center justify-center p-10 gap-5'>
                <img src={errorImg} alt="" />

                <h1 className='font-semibold text-5xl'>Oops, page not found!</h1>
                <h5>The page you are looking for is not available.</h5>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;