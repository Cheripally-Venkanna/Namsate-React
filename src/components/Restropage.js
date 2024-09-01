import React from "react";
import {useEffect,useState} from "react";
import FakeComponent from "./FakeComponent";
import { useParams } from "react-router-dom";
import { COMMON_URL } from "../utils/imagedata";
import useRestroMenu from "../utils/useRestroMenu";



const Restropage = ()=>{
    
    const {resId} = useParams();
    
   const restData = useRestroMenu(resId);
    
    if(restData === null) {
        return <FakeComponent/>
    }
    const {name,cuisines,costForTwo} = restData?.cards[2]?.card?.card?.info;
    
    const {itemCards} = restData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    
    return(
        <div className = "menu">
           <h2 className="font-bold">{name}</h2>
           <h3 className="font-bold">{cuisines.join(",")}</h3>
           <h3 className="font-bold">Rs.{costForTwo/100}</h3>
            <h1 className="font-bold">Menu</h1>
            <ul>
                {itemCards.map(item =>(<li key={item.card.info.id}>{item.card.info.name} -  Rs.{item.card.info.price/100}</li>) )}
            </ul>
        </div>
    )
}
export default Restropage;