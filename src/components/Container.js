import Body from "./Body";
const Container = ({prop}) => {
        

    let {id,name,cloudinaryImageId,avgRating,costForTwo} = prop?.info;

return (
 <div id={id} className="mindiv">
   <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
   <h2>{name}</h2>
   <h3>rating :{avgRating}</h3>
   <h3>amount :{costForTwo}</h3>
 </div>
);
};

export default Container;