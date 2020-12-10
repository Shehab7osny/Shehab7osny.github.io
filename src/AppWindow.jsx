import React, { Component } from "react";
import Navbar from "./components/Navbar";
import VisualWindow from "./components/VisualWindow";
import "./Buttons.css";
import "./SignWindow.css";

class AppWindow extends Component {
  state = { isSignIn: false, isSignUp: false, isMainWindow: true };

  //------------------- Navigation Bar -------------------
  renderNavComponents() {
    return (
      <div className="content">
        <div className="navBar logo" onClick={this.handleHome}>
          <a>Recommender</a>
        </div>
        <div className="navBar right">
          <button className="Button Visualize" onClick={this.handleSignUp}>
            Sign Up
          </button>
          <button className="Button Visualize" onClick={this.handleSignIn}>
            Sign In
          </button>
        </div>
      </div>
    );
  }
  //------------------------------------------------------

  //------------------- Main Window -------------------
  renderWindowComponents() {
    if (this.state.isMainWindow)
      return (
        <div class="content">
          <a className="message">
            Welcome to Recommender
            <br />
          </a>
          <a className="text">
            [Some Details about the Application] <br />
          </a>
          <a className="text">Please Sign In to continue</a>
        </div>
      );
    else if (this.state.isSignUp)
      return (
        <div class="content">
          <div className="form-wrapper">
            <h1>Sign Up</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  noValidate
                />
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  noValidate
                />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                />
              </div>
              <div className="radio-group">
                <label htmlFor="radio">Account Type</label>
                <label class="radio">
                  <span class="radio__input">
                    <input type="radio" name="radio" />
                    <span class="radio__control"></span>
                  </span>
                  <span class="radio__label">Governor</span>
                </label>
                <label class="radio">
                  <span class="radio__input">
                    <input type="radio" name="radio" />
                    <span class="radio__control"></span>
                  </span>
                  <span class="radio__label">Donator</span>
                </label>
              </div>
              <div className="createAccount">
                <button type="submit">Create Account</button>
                <small>Already Have an Account?</small>
              </div>
            </form>
          </div>
        </div>
      );
    else if (this.state.isSignIn)
      return (
        <div class="content">
          <div className="form-wrapper">
            <h1>Sign In</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                />
              </div>
              <div className="createAccount">
                <button type="submit">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      );
  }
  //---------------------------------------------------

  render() {
    return (
      <div>
        <Navbar>{this.renderNavComponents()}</Navbar>
        <VisualWindow>{this.renderWindowComponents()}</VisualWindow>
      </div>
    );
  }

  //------------------- Sign Up -------------------
  handleSignUp = () => {
    this.setState((prevState) => ({
      isSignUp: true,
      isMainWindow: false,
      isSignIn: false,
    }));
  };
  //-----------------------------------------------

  //------------------- Sign In -------------------
  handleSignIn = () => {
    this.setState((prevState) => ({
      isSignIn: true,
      isMainWindow: false,
      isSignUp: false,
    }));
  };
  //-----------------------------------------------

  //------------------- Home -------------------
  //--------------------------------------------
  handleHome = () => {
    this.setState((prevState) => ({
      isMainWindow: true,
      isSignUp: false,
      isSignIn: false,
    }));
  };
  //--------------------------------------------
}

export default AppWindow;
