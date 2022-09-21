import React from "react";
import LeftPositionedTimeline from "./time-line";

const Maker = ({maker})=>{
    const shos = maker.map((elem,index)=>{
       return(
         <LeftPositionedTimeline  key ={index} color={elem}/>
       )
    })
    return (
       <div>{shos}</div>

    )
}
export default Maker;