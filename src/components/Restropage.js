import React from "react";
import {useEffect,useState} from "react";
import FakeComponent from "./FakeComponent";
import { useParams } from "react-router-dom";
import { COMMON_URL } from "../utils/imagedata";



const Restropage = ()=>{
    const [restData,getRestData] = useState(null);
    const {resId} = useParams();
    

    useEffect(()=>{
        eachRestroData();
    },[])
    const eachRestroData = async() => {
        const data = await fetch(COMMON_URL+resId);
        const json =  await data.json(); 
        console.log(json);
        getRestData(json.data);
    };
  

    if(restData === null) {
        return <FakeComponent/>
    }
    const {name,cuisines,costForTwo} = restData?.cards[2]?.card?.card?.info;
    
    const {itemCards} = restData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    
    return(
        <div className = "menu">
           <h2>{name}</h2>
           <h3>{cuisines.join(",")}</h3>
           <h3>Rs.{costForTwo/100}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item =>(<li key={item.card.info.id}>{item.card.info.name} -  Rs.{item.card.info.price/100}</li>) )}
            </ul>
        </div>
    )
}
export default Restropage;