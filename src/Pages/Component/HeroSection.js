import React from 'react';

function HeroSection(props) {
    return (
        <>
            <div className="img-panner md:w-1/2 sm:w-full md:h-80 sm:h-full">
                <img
                    src={props.imgHero}
                    alt="صورة بانر"
                    className="h-auto w-full"
                />
            </div>
            <div className="data-panner mr-6 ml-20 md:w-1/2">
                <h1 className="text-xl font-bold">{props.heroTitle}</h1>
                <p className="mt-4 text-sm text-gray-600">{props.disHero}</p>

                <div className="flex items-center mt-14 user-blog">
                    <span className="flex img-user-blog">
                        <img 
                            src={props.userImage1}
                            alt="img-user"
                            className="w-5 h-5 rounded-xl z-10 border-2 border-whtie"
                        />
                        <img 
                            src={props.userImage2}
                            alt="img-user"
                            className="w-5 h-5 rounded-xl translate-x-2 border-2"
                        />
                    </span>
                    <span className="user-name">
                        <p className="name users-active"> {props.userNameSection} </p>
                    </span>
                    <span>
                        <p className="users-active">
                            <span>+{props.userNumberSection}</span> آخر
                        </p>
                    </span>
                </div>

                <div className="sub-title mt-2 users-active">
                    <p>في <span className="font-semibold">{props.catBlog}</span> {props.dateBlog}</p>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
