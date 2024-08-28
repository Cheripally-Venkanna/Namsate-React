import React from "react";

const User = (props) => {
   const  {name,location} = props;
    return (
        <div className="userfunction">
             <h2> name : {name} </h2>
             <h3>location : {location } </h3>
   
        </div>
    )   
}
export default User;