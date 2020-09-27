import React, { Component } from "react";
import Navigation from "../components/Navigation";

class SearchPage extends Component {
  render() {
    return (
      <div>
        <Navigation pageNum={1} />
        <p>Search Page</p>
      </div>
    );
  }
}

export default SearchPage;
