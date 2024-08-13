import { LOGO_URL } from "../utils/imagedata";
const Header = ()=>{
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
                </ul>
            </div>

        </div>
    )
}

export default Header;