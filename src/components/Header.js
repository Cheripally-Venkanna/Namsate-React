import { LOGO_URL } from "../utils/imagedata";
import { useState } from "react";
const Header = ()=>{
    const [btn,setbtn] = useState("Login");
    
    return(
        <div className="header">
            <div className="logo">
            <img id="image" src={LOGO_URL}/>
            </div>
            <div className="list">
                <ul >
                <li>Home</li>
                 <li>About Us</li>
                 <li>Contact Us</li>
                 <li>Cart</li>
                 <button className="loginbtn" onClick={()=>{
                   btn === "Login" ? setbtn("Logout") : setbtn("Login");
                  } }>{btn}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;