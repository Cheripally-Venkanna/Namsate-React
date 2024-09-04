import Container,{withPromotedCard} from "./Container";
import { useContext, useEffect, useState } from "react";
import FakeComponent from "./FakeComponent";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserName from "../utils/UserName";




const Body = ()=>{    
    const [resdata,setresdata] = useState([]); 
    const [filtereddata,setfiltereddata] = useState([]);
    const [inputtext,setinputtext] = useState(""); 

    const {userName,setUserInfo} = useContext(UserName);

    
    const Promo = withPromotedCard(Container);
    
    useEffect(()=>{
            fetchdata(); 
            
            
        },[]);
    const fetchdata = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9590541&lng=77.64015069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setresdata(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfiltereddata(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    }
    const onlineConnection = useOnlineStatus();
    if( onlineConnection === false) {
     return (<h1>Your Internet Is Not Working</h1>)
    } 
    if(resdata.length===0){
        return (
        <FakeComponent/>)
    }
    return (
        <div className="body">
            <div>
        
                <input type = "text" className="m-4 p-2 border border-solid border-black rounded-md" placeholder="Enter the resturent name" value ={inputtext} onChange={(e)=>{
                     setinputtext(e.target.value) 
                }}/>
                <button className ="px-4 mx-4 bg-blue-400 border border-solid border-blue-950 rounded-md" onClick={()=>{
                  const fliterdata = resdata.filter((res)=>
                    res.info.name.toLocaleLowerCase().includes(inputtext.toLocaleLowerCase())
                   )
                   setfiltereddata(fliterdata);
                }
                } >Search</button>
            </div>
            <div className="filter">
                <button className="p-2 ml-4 mr-4 mt-2 mb-2 rounded-md text-white bg-blue-500" onClick={()=>{
                   const newdata = resdata.filter((res)=>res.info.avgRating>4.3);
                   setfiltereddata(newdata); 
                }} >
                    High Rating Food Cards</button>
                    <label>UserName  : </label>
                    <input className="border border-blue-500 p-2 rounded-md " placeholder="Enter User Info" 
                    value = {userName}
                    onChange={(e)=> setUserInfo(e.target.value)}></input>
                </div>
                
        <div className="flex flex-wrap">
            {
               filtereddata.map((res)=>     
         (
    <Link
          key={res.info.id} to={"/Restaurant/"+ res.info.id}>         
            {   
                res.info.avgRating >= 4.4 ? (<Promo prop={res}/>) : ( <Container  prop={res}/>)    
            }
    </Link>  
        )
   )
}
        </div>
        </div>
    )
        }

        export default Body;