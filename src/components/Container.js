import Body from "./Body";
import { RES_URL } from "../utils/imagedata";
const Container = ({prop}) => {
        

    let {id,name,cloudinaryImageId,avgRating,costForTwo} = prop?.info;

return (
 <div id={id} className="mindiv">
   <img className="res-logo" alt="res-logo" src={RES_URL+cloudinaryImageId}/>
   <h2>{name}</h2>
   <h3>rating :{avgRating}</h3>
   <h3>amount :{costForTwo}</h3>
 </div>
);
};

export default Container;