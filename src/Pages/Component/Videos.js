import React from "react";

function Videos(props) {
    return (
        <div className="w-full">
            <div
                className="h-64 bg-cover bg-center rounded-lg shadow-lg flex justify-center items-center"
                style={{ backgroundImage: `url(${props.img})` }}
            >
                <span className="text-white text-lg border-2 w-14 h-14 flex justify-center items-center rounded-full cursor-pointer">
                    <i class="fas fa-play"></i>
                </span>
            </div>
            <div className="text-right mt-4 mx-2">
                <h3>{props.title}</h3>
                <p className="text-xs mt-2">فى <span className="font-bold">{props.cat}</span> <span>{props.date}</span></p>
            </div>
        </div>
    );
}

export default Videos;
