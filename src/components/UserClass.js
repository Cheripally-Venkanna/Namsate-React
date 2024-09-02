import React from "react"; 
import UserName from "../utils/UserName";

class UserClass extends React.Component {
    constructor(props){
     super(props);
    //  console.log("constructor");
     this.state = {
        dataInfo : {
      
        }
     }
     
    }

   async componentDidMount(){
 
    const data = await fetch("https://api.github.com/users/Cheripally-Venkanna");
    const json = await data.json();
    this.timer = setInterval(()=>{
        console.log("setinterval")
    },1000)
    
      this.setState({
        dataInfo : json,
      })
    }
    componentDidUpdate(){
     
    }
    componentWillUnmount(){
         clearInterval(this.timer);
        
    }

    render () {
        const {name,location} = this.props;
        const { login , type , id } = this.state.dataInfo;
        
        
        
        return (
            <div className="userclass">
                 <h1>{id}</h1>
                <h2>{login}</h2>
                <h2>{type}</h2>
                <div>
                    <UserName.Consumer>
                        {({userName})=> 
                           <h1 className="font-bold">{userName}</h1>
                     }
                    </UserName.Consumer>
                </div>
                <h2>venkanna</h2>
                
            </div>
        )
    }
}
export default UserClass;