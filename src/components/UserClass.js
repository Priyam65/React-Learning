import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // count: 0,
      userInfo: {
        name: "user",
        location: "null",
      },
    };
    // console.log(this.props.name + " child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " child did mount");
    const userData = await fetch("https://api.github.com/users/Priyam65");
    const data = await userData.json();
    this.setState({
      userInfo: data,
    });
    // console.log(data);
  }

  render() {
    return (
      // console.log(this.props.name + " child render"),
      <div className="user-card">
        {/* <h1>Count:{this.state.count}</h1>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            ++Count
          </button> */}
        <h1>Name : {this.state.userInfo.name}</h1>
        <h2>Location : {this.state.userInfo.location}</h2>
        <h3>Contact : @priyam_patra</h3>
      </div>
    );
  }
}

export default UserClass;
