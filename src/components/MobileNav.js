import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerClicked: false
    };
    this.styles = InitialStyle;
    this.handleClick = this.handleClick.bind(this);
  }

  // Changes the clicked status of the button
  handleClick(e) {
    this.setState(state => ({
      hamburgerClicked: !state.hamburgerClicked
    }));
  }

  render() {
    let Wrapper = this.styles;
    this.styles = this.state.hamburgerClicked ? NotClicked : Clicked;

    return (
      <Wrapper onClick={this.handleClick} >
        <img src={require('../images/Hamburger_icon.svg.png')} className='hamburger' alt='' />
        <div className='close-nav' ></div>
        <NavLink activeClassName='active' to="/" exact >
          Introduction
        </NavLink>
        <br />
        <NavLink activeClassName='active' to="/About" >
          About Me
        </NavLink>
        <br />
        <NavLink activeClassName='active' to="/Portfolio" >
          Portfolio
        </NavLink>
        <br />
        <NavLink activeClassName='active' to="/Contact" >
          Contact Me
        </NavLink>
      </Wrapper>
    );
  }
}

const NotClicked = getNotClicked();
function getNotClicked() {
  return (
    styled.div`
      background-color: #333;
      // overflow: hidden;
      position: fixed;
      border-radius: 25px;
      right: 0;
      top: 0;
      opacity: 0.75;
      z-index: 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 200px;
      height: 400px;
      animation: shrink .5s;
      animation-fill-mode: forwards;
      animation-delay: 0.1s;

      @keyframes shrink {
        from {
          width: 200px;
          height: 400px;
        }
        to {
          width: 75px;
          height: 75px;
        }
      }

      .close-nav {
        display: none;
      }

      a {
        color: white;
        font-family: 'just another hand', cursive;
        font-size: 0em;
        border-radius: 20px;
        background-color: #111;
        margin-top: 5px;
        margin-bottom: auto;
      }

      .hamburger {
        opacity: 0;
        width: 65px;
        height: 65px;
        padding: 5px;
        animation: fade-in 0.25s;
        animation-fill-mode: forwards;
        animation-delay: 0.5s;
      }

      @keyframes fade-in {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }

      .hamburger:hover {
        cursor: pointer;
      }

      @media (min-width: 800px) {
        display: none;
      }
    `
  );
}

const Clicked = getClicked();
function getClicked() {
  return (
    styled.div`
      background-color: #333;
      // overflow: hidden;
      position: fixed;
      border-radius: 25px;
      right: 0;
      top: 0;
      opacity: 0.75;
      text-align: center;
      z-index: 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: grow .5s;
      animation-fill-mode: forwards;

      @keyframes grow {
        from {
          width: 75px;
          height: 75px;
        }
        to {
          width: 200px;
          height: 400px;
        }
      }

      .close-nav {
        z-index: -10;
        opacity: 0;
        width: 200vw;
        height: 100vh;
        position: fixed;
      }

      a {
        color: white;
        font-family: 'just another hand', cursive;
        font-size: 0em;
        border-radius: 20px;
        background-color: #111;
        margin-top: auto;
        margin-bottom: auto;
        animation: slide-in 0.5s;
        animation-fill-mode: forwards;
        animation-delay: 0.25s;
      }

      @keyframes slide-in {
        from {
          font-size: 0em;
          width: 0px;
        }
      
        to {
          font-size: 3.5em;
          width: 175px;
        }
      }

      .hamburger {
        width: 65px;
        height: 65px;
        padding: 5px;
        display: none;
      }

      .hamburger:hover {
        cursor: pointer;
      }

      .active {
        background-color: #373;
      }

      @media (min-width: 800px) {
        display: none;
      }
    `
  );
}

const InitialStyle = getInitial();
function getInitial() {
  return (
    styled.div`
      background-color: #333;
      // overflow: hidden;
      position: fixed;
      border-radius: 25px;
      right: 0;
      top: 0;
      opacity: 0.75;
      z-index: 5;
      height: 75px;
      width: 75px;

      .close-nav {
        display: none;
      }

      a {
        display: none;
      }

      .hamburger {
        width: 65px;
        height: 65px;
        padding: 5px;
      }

      .hamburger:hover {
        cursor: pointer;
      }

      @media (min-width: 800px) {
        display: none;
      }
    `
  );
}
