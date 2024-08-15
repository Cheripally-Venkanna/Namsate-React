import Container from "./Container";
import { useEffect, useState } from "react";
import FakeComponent from "./FakeComponent";



const Body = ()=>{    
    const [resdata,setresdata] = useState([]); 
    useEffect(
        ()=>{
            fetchdata();
        },[]);
    const fetchdata = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setresdata(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if(resdata.length===0){
        return (
        
        <FakeComponent/>)
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="btn" onClick={()=>{
                   const newdata = resdata.filter((res)=>res.info.avgRating>4.5);
                  setresdata(newdata); 
                }} >
                    High Rating Food Cards</button>
                </div>
        <div className="res-container">
            {  
               resdata.map((res)=>{
                
        return (<Container key={res.info.id} prop={res}/>)
  }  )
}
        </div>
        </div>
    )
        }

        export default Body;