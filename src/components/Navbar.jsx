import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return <div className="Nav-Layout">{this.props.children}</div>;
  }
}

export default Navbar;
