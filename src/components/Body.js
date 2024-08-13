import Container from "./Container";
import objdata from "../../utils/apidata";

const Body = ()=>{
       
           
    return (
        <div className="body">
            <div className="Search">Search</div>
        <div className="res-container">
         { objdata.map((data)=>
            ( <Container key={data.info.id} prop={data}/> )
            )}
        </div>
        </div>
    )
        }

        export default Body;