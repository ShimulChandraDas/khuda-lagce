import React from 'react';
import FoodSearch from './FoodSearch';
import LandingBanner from './LandingBanner';

const Landing = () => {
    return (
        <div>
            <LandingBanner />
            <FoodSearch />
        </div>
    );
};

export default Landing;