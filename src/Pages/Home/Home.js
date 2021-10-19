import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;