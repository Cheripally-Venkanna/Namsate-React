import { LOGO_URL } from "../utils/imagedata";
import { useState,useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserName from "../utils/UserName";
import { useSelector } from "react-redux";
const Header = ()=>{
    const [btn,setbtn] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const itemCount = useSelector((store)=> store.cart.items)
    
    return(
        <div className="flex justify-between bg-slate-200">
            <div className="w-32 m-2 p-2 bg-transparent">
            <img className="rounded-md" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                <li className="m-2 p-2"><Link to="/grocerys">Grocerys</Link></li>
                <li className="m-2 p-2">Status : {onlineStatus ? "Online 💚":"Offline ❤️"  }</li>
                <li className="m-2 p-2"><Link to="/">Home</Link></li>
                <li className="m-2 p-2"><Link to="/About">About Us</Link></li>
                <li className="m-2 p-2"><Link to="/Contact">Contact Us</Link></li>   
                <li  className="m-2 p-2"><Link to="/CartDetails">Cart 🛒({itemCount.length})</Link></li>
                <li  className="m-2 p-2"><button className="loginbtn" onClick={()=>{
                    console.log("button")
                   btn === "Login" ? setbtn("Logout") : setbtn("Login");
                  } }>{btn}</button></li>
                  {/* <li>{userName}</li>  */}
                </ul>
            </div>

        </div>
    )
}

export default Header;