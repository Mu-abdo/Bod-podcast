import React from "react";

function ArticalsBlog(props){
    return(
        <>
            <div className="img-box h-full md:w-1/3">
                <img
                    src={props.img}
                    alt="img-panner"
                    className="h-full bg-cover rounded-lg"
                />
            </div>
            <div className="data-panner flex-1 mr-4 ml-6 md:w-2/3">
                <h2 className="text-sm font-bold">{props.heroTitle}</h2>
                <p className="mt-4 text-xs text-gray-600">{props.disHero}</p>

                <div className="flex items-center mt-8 user-blog">
                    <span className="flex img-user-blog">
                        <img 
                            src={props.userImage2}
                            alt="img-user"
                            className="w-5 h-5 rounded-xl z-10 border-2 border-whtie"
                        />
                        <img 
                            src={props.userImage1}
                            alt="img-user"
                            className="w-5 h-5 rounded-xl translate-x-2 border-2"
                        />
                    </span>
                    <span className="user-name">
                        <p className="name text-xs">{props.userNameSection}</p>
                    </span>
                    <span>
                        <p className="text-xs">
                            <span>+{props.userNumberSection}</span> آخر
                        </p>
                    </span>
                </div>

                <div className="sub-title mt-2 users-active">
                    <p>في <span className="font-semibold">{props.catBlog}</span> {props.dateBlog}</p>
                </div>
            </div>
        </>
    )
}

export default ArticalsBlog;