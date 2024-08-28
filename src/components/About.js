import User from "./User";
import UserClass from "./UserClass";
const About = ()=>{

    return (
    <div>
        <h1>this about page</h1>
        <h2>About Us</h2>
        <User name={"Cheripally from function component"} location ={"hyd"}/>
        <UserClass name={"cheripally from class componet"} location = {"bnglr"}/>
    </div>
    )
}

export default About;