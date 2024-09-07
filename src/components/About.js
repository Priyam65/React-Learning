import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }
  componentDidMount() {
    // console.log("parent did mount");
  }
  render() {
    return (
      // console.log("parent render"),
      <div>
        <h1>About Us</h1>
        <h2>This is Priyam Patra</h2>
        <h2>Software Engineer</h2>
        <div>
          <UserContext.Consumer>
            {({ loggedUser }) => <h1>{loggedUser}</h1>}
          </UserContext.Consumer>
        </div>
        {/* <User name={"Priyam"} /> */}
        <UserClass name={"Priyam"} />
      </div>
    );
  }
}

export default About;
