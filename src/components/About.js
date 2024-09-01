import User from "./User";
import UserClass from "./UserClass";
import {Component}from "react";

class About extends Component {
    constructor (){
        super();
      
    }

    componentDidMount(){
        
    }

    render (){
    
        return (
            <div>
                <h1>this about page</h1>
                <h2>About Us</h2>
                <UserClass name={"first"} location = {"bnglr"}/>
              </div>
            )
    }
}


export default About;