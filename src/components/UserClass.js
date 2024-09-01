import React from "react"; 

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
    // console.log("componentDidMount")
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
        // console.log("componentDidUpdate")
    }
    componentWillUnmount(){
         clearInterval(this.timer);
        console.log("componentWillUnmount")
    }

    render () {
        const {name,location} = this.props;
        const { login , type , id } = this.state.dataInfo;
        // console.log("render");
        
        
        return (
            <div className="userclass">
                 <h1>{id}</h1>
                <h2>{login}</h2>
                <h2>{type}</h2>
                <h1>cheripally</h1>
                <h2>venkanna</h2>
                
            </div>
        )
    }
}
export default UserClass;