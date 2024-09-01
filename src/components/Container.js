import Body from "./Body";
import { RES_URL } from "../utils/imagedata";
const Container = ({prop}) => {
        

    let {id,name,cloudinaryImageId,avgRating,costForTwo} = prop?.info;
return (
  <div className="w-56 h-120 p-2 m-2 hover:bg-slate-200 bg-slate-100 rounded-md">
 <div id={id}  >
   <img className="h-52 rounded-md" alt="res-logo" src={RES_URL+cloudinaryImageId}/>
   <h2 className="font-bold">{name}</h2>
   <h3>rating :{avgRating}</h3>
   <h3>amount :{costForTwo}</h3>
 </div>
 </div>
);
};

export const withPromotedCard = (Container) => {

  return (props)=>{
    return (
      <div>
        <label className="bg-slate-600 rounded-lg absolute text-white px-2 mx-2">Good rating</label>
        <Container {...props}/>
      </div>
    )
  }
}
export default Container;