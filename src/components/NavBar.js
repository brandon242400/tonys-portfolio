import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';

export default function NavBar() {
  return (
    <Wrapper>
      <NavLink activeClassName='active' to="/" exact >
        Introduction
        </NavLink>
      <NavLink activeClassName='active' to="/About" >
        About Me
        </NavLink>
      <NavLink activeClassName='active' to="/Portfolio" >
        Portfolio
        </NavLink>
      <NavLink activeClassName='active' to="/Contact" >
        Contact Me
        </NavLink>
    </Wrapper>
  )
}



const Wrapper = styled.div`
  background-color: #333;
  overflow: hidden;
  height: 50px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  opacity: 0.75;
  z-index: 5;

  a {
    font-family: 'Permanent Marker', cursive;
    float: left;
    color: #f2f2f2;
    text-align: center;
    margin-bottom: 5px;
    padding: 6px 16px;
    text-decoration: none;
    width: 19vw;
    font-size: 170%;
    transition: all 0.25s;
  }

  a:hover {
    background-color: #ddd;
    color: black;
    width: 20vw;
    font-weight: bolder;
  }
  
  .active {
    background-color: #4caf50;
    color: white;
    font-weight: bolder;
    width: 23vw !important;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;