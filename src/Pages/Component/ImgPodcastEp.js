import React from "react";

function ImgPodcastEp(props){
    return(
        <div className="cursor-pointer">
            <img src={props.img} alt="img-panner" className="h-auto rounded-lg" />
        </div>
    )
}

export default ImgPodcastEp;