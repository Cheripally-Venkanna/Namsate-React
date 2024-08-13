import Container from "./Container";
import objdata from "../utils/apidata";
import { useState } from "react";



const Body = ()=>{    
    const [resdata,setresdata] = useState(objdata); 
    

    return (
        <div className="body">
            <div className="filter">
                <button className="btn" onClick={()=>{
            const filterdata = resdata.filter(
                (res)=> res.info.avgRating > 4.6
            );
            setresdata(filterdata);
                }}
                 >
                    High Rating Food Cards</button>
                </div>
        <div className="res-container">
         { resdata.map((data)=>
            ( <Container key={data.info.id} prop={data}/> )
            )}
        </div>
        </div>
    )
        }

        export default Body;