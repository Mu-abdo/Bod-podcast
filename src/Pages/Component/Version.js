import React from "react";

function VersionComponents(props){
    return(
        <>
            <div className="mb-6 flex items-center font-bold text-xl">
                <i className="fas fa-book ml-2"></i>
                <h2 className="w-full text-right">إصدارات حقق</h2>
            </div>
            <div className="">
                <div className="img-hero-version">
                    <img src={props.imgVersionPage} alt="صور الاصدارات"/>
                </div>
                <div className="data-hero-version">

                </div>
            </div>
        </>
    )
}

export default VersionComponents;