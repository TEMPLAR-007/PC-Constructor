import React from 'react';
import pcBgImg from '../Assets/spy.jpg'

const Banner = () => {

    const backgroundImageStyle = {
        backgroundImage: `url(${pcBgImg})`,
        backgroundSize: "cover",

    };
    return (
        <div style={backgroundImageStyle} dashboard-sidebar className="hero h-96 min-h-full" >
            <div dashboard-sidebar className="hero-content flex-col lg:flex-row-reverse" >
                <div dashboard-sidebar className='lg:mr-96' >
                    <h1 dashboard-sidebar className="text-5xl font-bold text-white" > MOST STYLISH GAMING PC</h1 >
                    <br />
                    <p dashboard-sidebar className="text-2xl text-white" > Built to game with AMD Ryzen 5000 Series CPUs and AMD Radeon GPUs on ORIGIN PC</p >
                    <br />
                    <button dashboard-sidebar className="btn glass text-white font-bold " > Learn More</button >
                </div >
            </div >
        </div >
    );
};

export default Banner;