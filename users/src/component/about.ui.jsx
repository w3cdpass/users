import { Outlet } from "react-router";
import Profile from "./profile.ui";
const About = () => {
    return (
      <div className="aboutContainer">
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are a team of passionate developers
          dedicated to providing the best experience for our users.
        </p>
        <p>
          Our mission is to create high-quality software solutions that enhance
          productivity and simplify tasks.
        </p>
        <Profile name={"tiger_Hunter"} />
        {/* <Outlet/> */}
      </div>
    );
  };
  
  export default About;