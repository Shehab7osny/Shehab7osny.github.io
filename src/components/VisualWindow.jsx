import React, { Component } from "react";
import "./VisualWindow.css";

class VisualWindow extends Component {
  render() {
    return <div className="Visual-Layout">{this.props.children}</div>;
  }
}

export default VisualWindow;
