import React  from 'react';

function Episodes(props){
  return(
    <div className="box-sm flex items-center text-right mb-4">
      <div className="img-box md:w-1/3">
          <img src={props.img} alt="img-panner" className="h-auto rounded-lg" />
      </div>
      <div className="data-panner flex-1 mr-4 ml-6 md:w-2/3">
          <h2 className="text-sm font-bold">{props.epTitle}</h2>
          <p className="mt-2 text-xs text-gray-600">{props.epDes}</p>
          <div className="sub-title mt-4 users-active">
          <p> في <span className="font-bold">{props.catEp}</span>{props.date}</p>
          </div>
      </div>
    </div>
  )
}

export default Episodes;