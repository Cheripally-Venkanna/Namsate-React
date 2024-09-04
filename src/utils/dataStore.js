import { configureStore } from "@reduxjs/toolkit" 
import cartReducer from "./cartSlice";
const dataStore = configureStore({
    reducer :  {
        cart : cartReducer,
    }
}
);

export default dataStore;