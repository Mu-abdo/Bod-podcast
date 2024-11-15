import React from "react";

function Version(props){
    return(
        <div className="flex-1 rounded-lg overflow-hidden h-52 cursor-pointer">
            <img src={props.img} alt="img-version" className="md:w-full"/>
        </div>
    )
}

export default Version;