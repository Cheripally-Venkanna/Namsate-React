import React, { useState } from "react";
import ItemsList from "./ItemsList";

const RestraurantCategory = ({data,showItems,setShowIndex})=>{

   const clickEvent = () => {
    setShowIndex();
   }
    return (
        <div className="text-center ">
            <div className=" py-2 w-6/12 m-auto bg-gray-50 shadow-lg my-2 rounded-md " onClick={clickEvent}>
              <div className="flex justify-between">
              <span className="p-2 font-semibold text-yellow-600">{data.title} ({data.itemCards.length})</span>
              <span className="p-2 d">⬇️</span>        
        </div>
       { showItems && <ItemsList items={data.itemCards}/>} 
            </div>
        </div>
      
    )
}
export default RestraurantCategory;