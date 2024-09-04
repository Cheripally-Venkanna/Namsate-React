import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { useDispatch } from "react-redux";
import { clearcart } from "../utils/cartSlice";

const CartDetails = ()=> {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
         dispatch(clearcart());
    }
        return (
        <div>
            <h1 className="text-center text-2xl font-extrabold m-4 p-4">Cart</h1>
            <div className="w-6/12 m-auto text-center">
            <button className=" m-2 p-2 bg-slate-600 text-white rounded-lg" onClick={()=>handleClearCart()}>Clear Cart</button>
            {cartItems.length == 0 && <h1>Your Cart Is Empty Please Add Items!</h1>}
            <ItemsList items={cartItems}/>
            </div> 
        </div>
    )
}
export default CartDetails;