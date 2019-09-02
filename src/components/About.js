import React from 'react';
import styled from 'styled-components';

export default function About() {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 300);

  return (
    <Wrapper>
      <h1 className='about-title'>About Me</h1>
      <div className='about-pic-container'>
        <img src={require('../images/self-portrait.jpg')} className='self-image' alt='Selfie' />
        <p>Oh look. It me. Tony!</p>
      </div>
    </Wrapper>
  )
}



const Wrapper = styled.div`
  margin-top: 100px;
  text-align: center;

  .about-title {
    font-family: 'permanent marker', cursive;
    font-size: 300%;
    border: 5px solid black;
    border-radius: 25px;
    margin: 100px auto 100px auto;
    width: fit-content;
    padding: 25px 50px;
  }

  .about-pic-container {
    display: flex;
  }

  .about-pic-container img {
    width: 340px;
    height: auto;
    margin-left: auto;
    padding: 0px;
    border: 3px solid black;
    border-radius: 50px;
  }

  .about-pic-container p {
    font-family: 'just another hand', cursive;
    overflow: hidden;
    font-size: 200%;
    text-align: center;
    width: 30vw;
    height: auto;
    margin-left: 5vw;
    margin-right: auto;
    padding: 20px;
    border: 3px solid black;
    border-radius: 50px;
  }

  @media (max-width: 800px) {
    margin-top: 50px;
    
    .about-title {
      font-size: 6vw;
      border: 3px solid black;
      margin: 50px auto 50px auto;
      padding: 15px 30px;
    }

    .about-pic-container img {
      width: 40vw;
      border-radius: 30px;
    }

    .about-pic-container p {
      font-size: 4vw;
      width: 40vw;
      padding: 10px;
      border: 2px solid black;
      border-radius: 25px;
    }
  }
`;