import React, { useEffect,useState} from "react";
import {COMMON_URL} from "../utils/imagedata";

const useRestroMenu = (resId)=>{

    const [restData,setrestData] = useState(null);

useEffect(()=>{
    fetchRestroData();
},[])
const fetchRestroData = async()=>{
  const data =await fetch(COMMON_URL+resId);
  const json = await data.json();
  setrestData(json.data);

}

    return restData;
}
export default useRestroMenu;