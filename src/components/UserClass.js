import React from "react"; 

class UserClass extends React.Component {
    constructor(props){
     super(props);
     
    }
    render () {
        const {name,location} = this.props;
        return (
            <div className="userclass">
                <h2>{name}</h2>
                <h2>{location}</h2>
            </div>
        )
    }
}
export default UserClass;