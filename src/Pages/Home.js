import React from 'react';
import AllParts from '../Components/AllParts';
import Banner from '../Components/Banner';
import BusinessSumary from '../Components/BusinessSumary';
import ContactUs from '../Components/ContactUs/ContactUs';
import ShowReviews from '../Components/ShowReviews';
import SlidePic from '../Components/SlidePic';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SlidePic></SlidePic>
            <AllParts></AllParts>
            <BusinessSumary></BusinessSumary>
            <ShowReviews></ShowReviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;