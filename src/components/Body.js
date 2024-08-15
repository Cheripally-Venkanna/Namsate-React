import Container from "./Container";
import { useEffect, useState } from "react";
import FakeComponent from "./FakeComponent";



const Body = ()=>{    
    const [resdata,setresdata] = useState([]); 
    const [filtereddata,setfiltereddata] = useState([]);
    const [inputtext,setinputtext] = useState(""); 
    
    useEffect(
        ()=>{
            fetchdata();
        },[]);
    const fetchdata = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setresdata(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfiltereddata(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    if(resdata.length===0){
        return (
        
        <FakeComponent/>)
    }
    return (
        <div className="body">
            <div>
                <input type = "text" className="input" placeholder="Enter the resturent name" value ={inputtext} onChange={(e)=>{
                     setinputtext(e.target.value) 
                }}/>
                <button className="inputbuttomn" onClick={()=>{
                  const fliterdata = resdata.filter((res)=>
                    res.info.name.toLocaleLowerCase().includes(inputtext.toLocaleLowerCase())
                   )
                   setfiltereddata(fliterdata);
                }
                } >Search</button>
            </div>
            <div className="filter">
                <button className="btn" onClick={()=>{
                   const newdata = resdata.filter((res)=>res.info.avgRating>4.5);
                   setfiltereddata(newdata); 
                }} >
                    High Rating Food Cards</button>
                </div>
        <div className="res-container">
            {  
               filtereddata.map((res)=>{
                
        return (<Container key={res.info.id} prop={res}/>)
  }  )
}
        </div>
        </div>
    )
        }

        export default Body;