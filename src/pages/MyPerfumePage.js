import React, { Component } from "react";
import Navigation from "../components/Navigation";

class MyPerfumePage extends Component {
  render() {
    return (
      <div>
        <Navigation pageNum={2} />
        <p>My Perfume Page</p>
      </div>
    );
  }
}

export default MyPerfumePage;
