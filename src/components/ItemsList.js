import React from "react"
import { RES_URL } from "../utils/imagedata";
import {useDispatch} from "react-redux";
import { addItems } from "../utils/cartSlice";
const ItemsList = ({items})=>{
    const dispatch = useDispatch();
    const handleAddItems = (item)=>{
     dispatch(addItems(item));

    
    }
    return (
        
        <div>
            {items.map((item)=>(
                <div key = {item.card.info.name}className="p-2 m-2 border-b-2 rounded-md">
                    <div className="flex justify-between">
                    <div className="flex py-2">
                    <span className="font-medium">{item.card.info.name}  </span>
                    <span className="font-medium">  Rs.{item.card.info.price/100}</span>
                    <p className="font-light text-sm">{item.card.info.description}</p>
                    </div>
                
                    <div >
                        <div className="absolute">
                            <button className=" bg-slate-500 text-white px-2 rounded-md mx-7" onClick={()=>handleAddItems(item)}>Add+</button>
                            </div>
                    
                    <img alt = "logo" src={RES_URL+item.card.info.imageId} className="h=28 w-28 rounded-md shadow-sm "/>
                   
                    </div>
                    </div>
                  
                  
                </div>
            ))}
        </div>
    )
}
export default ItemsList;