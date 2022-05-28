import React from 'react';

const SlidePic = () => {
    return (
        <div dashboard-sidebar className='mt-5' >
            <div className="carousel carousel-center rounded-box">
                <div className="carousel-item">
                    <img src="https://static.fandomspot.com/images/03/12786/00-featured-rbg-colored-pc-building-simulator-preview-screenshot.jpg" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img width={500} src="https://i.ytimg.com/vi/1FAG2u-PsUc/maxresdefault.jpg" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img width={500} src="https://pbs.twimg.com/media/FQfvFNbXoAUMXMh.jpg" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img width={500} src="https://i.pcmag.com/imagery/reviews/06J5gTNgSKan37H2K47quRe-12.fit_scale.size_760x427.v1569471177.jpg" alt="Pizza" />
                </div>
            </div>
        </div >
    );
};

export default SlidePic;