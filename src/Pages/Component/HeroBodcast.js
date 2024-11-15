import React from 'react';

function HeroBodcast(props) {
    return (
        <>
            <div className="img-panner rounded-lg overflow-hidden md:w-1/2 sm:w-full md:h-80 sm:h-full">
                <img
                    src={props.imgHero}
                    alt="صورة بانر"
                    className="h-auto w-full"
                />
            </div>
            <div className="data-panner mr-6 ml-20 md:w-1/2">
                <h1 className="text-xl font-bold">{props.heroTitle}</h1>
                <p className="mt-4 text-sm text-gray-600">{props.disHero}</p>
                <div className="sub-title mt-6 users-active">
                    <p>في <span className="font-bold">{props.catBlog}</span> {props.dateBlog}</p>
                </div>
            </div>
        </>
    );
}

export default HeroBodcast;
