import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Nature from '../Nature/Nature';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Blogs></Blogs>
            <Nature></Nature>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;