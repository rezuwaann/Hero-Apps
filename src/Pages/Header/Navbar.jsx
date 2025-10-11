

import logoImg from '../../assets/logo.png'
import gitLogo from '../../assets/gitLogo.png'
import { Link } from 'react-router';


const Homes = () => {


    const links =
        <>

            <li><a href='/'>Home</a></li>
            <li><a href='/apps'>Apps</a></li>
            <li><a href='/installed'>Installation</a></li>
        </>

    return (
        <div className="navbar bg-base-100 shadow-sm lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}

                    </ul>
                </div>

                <Link to={'/'}>
                    <div className='flex gap-1 items-center'>

                        <img className='h-10 w-10' src={logoImg} alt="" />
                        <p className="text-xl font-bold">HERO.IO</p>

                    </div>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}

                </ul>
            </div>
            <div className="navbar-end ">
                <Link to={'https://github.com/rezuwaann'}>
                    <p className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"> <img className='h-5 w-5' src={gitLogo} alt="" />  Contribute</p>
                </Link>
            </div>
        </div>
    );
};

export default Homes;