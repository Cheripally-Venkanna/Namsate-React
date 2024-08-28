import Container from "./Container";
import { useEffect, useState } from "react";
import FakeComponent from "./FakeComponent";
import { Link } from "react-router-dom";



const Body = ()=>{    
    const [resdata,setresdata] = useState([]); 
    const [filtereddata,setfiltereddata] = useState([]);
    const [inputtext,setinputtext] = useState(""); 
    
    useEffect(
        ()=>{
            fetchdata();
        },[]);
    const fetchdata = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9590541&lng=77.64015069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setresdata(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfiltereddata(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
               resdata.map((res)=>
                
         (

    <Link 
    key={res.info.id} to={"/Restaurant/"+ res.info.id}><Container  prop={res} />
    </Link>  
        )
   )
}
        </div>
        </div>
    )
        }

        export default Body;