import React from 'react';
import Banner from '../Banner';
import BestInstructors from './BestInstructors';
import PopularClass from './PopularClass';
import Gallery from './Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <BestInstructors></BestInstructors>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;