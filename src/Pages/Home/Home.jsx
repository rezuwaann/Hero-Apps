import React from 'react';
import Banner from '../Banner/Banner';
import TrustedUsers from '../TrustedUsers/TrustedUsers';
import { useLoaderData } from 'react-router';
import TrendingApps from '../../components/TrendingApps/TrendingApps';

const Home = () => {
    const apps = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <TrustedUsers></TrustedUsers>
            <TrendingApps apps={apps}></TrendingApps>
        </div>
    );
};

export default Home;