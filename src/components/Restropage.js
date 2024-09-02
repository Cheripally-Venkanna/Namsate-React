import React from "react";
import {useEffect,useState} from "react";
import FakeComponent from "./FakeComponent";
import { useParams } from "react-router-dom";
import { COMMON_URL } from "../utils/imagedata";
import useRestroMenu from "../utils/useRestroMenu";
import RestraurantCategory from "./Restraurantcategory"


const Restropage = ()=>{
    const [showItems,setShowItems] = useState(null);
    
    const {resId} = useParams();
    
   const restData = useRestroMenu(resId);
    
    if(restData === null) {
        return <FakeComponent/>
    }
   
    const {name,cuisines,costForTwo} = restData?.cards[2]?.card?.card?.info;

    
    const {itemCards} = restData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


 const category = restData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c =>
     c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
   
    return(
        <div className = " text-center " >
           <h1 className="font-extrabold py-3">{name}</h1>
           <span className="font-bold py-2">{cuisines.join(",")}</span> -  <span className="font-bold py-2">Rs.{costForTwo/100}</span>
         <h1 className="font-bold">Menu</h1>
         {
            category.map((category,index) => <RestraurantCategory
             key={category.card.card.title} 
             data={category?.card?.card}
             showItems = {index == showItems ? true : false}
             setShowIndex = {()=>setShowItems(index)}
             /> )
         }
        </div>
    )
}
export default Restropage;