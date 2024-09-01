import React from "react";
import { useState } from "react";

const User = (props) => {
   const  {name,location} = props;
   const [count]  = useState(0);
   const [count1]  = useState(1)
    return (
        <div className="userfunction">
          <h1>count = {count} </h1>
          <h1>count1 = {count1}</h1>
             <h2> name : {name} </h2>
             <h3>location : {location } </h3>
   
        </div>
    )   
}
export default User;