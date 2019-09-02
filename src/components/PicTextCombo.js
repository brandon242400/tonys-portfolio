import React, { Component } from 'react';
import styled from 'styled-components';

export default class PicTextCombo extends Component {
  render() {
    return (
      <Wrapper>
        <div className='pic-container'>
          <img src={this.props.imageLink} alt='Tattoo' />
        </div>
        <div className='text-container'>
          <p>
            {this.props.desc}
          </p>
        </div>
      </Wrapper>
    );
  }
}


const Wrapper = styled.div`
  display: block;
  margin-top: 100px;

  .text-container {
    border: 5px solid black;
    border-radius: 50px;
    height: fit-content;
    width: 50vw;
    margin: 0 auto;
  }

  .text-container p {
    margin: 25px;
    font-family: 'Just Another Hand', cursive;
    font-size: 250%;
  }

  .pic-container {
    border: 3px solid black;
    border-radius: 25px;
    overflow: hidden;
    max-height: 600px;
    width: fit-content;
    margin: 0 auto 25px auto;
  }

  .pic-container img {
    max-width: 600px;
    max-height: 600px;
    object-fit: scale-down;
  }

  @media (max-width: 800px) {

    .text-container {
      border: 3px solid black;
      border-radius: 25px;
      width: 65vw;
    }

    .text-container p {
      font-size: 5vw;
    }

    .pic-container img {
      max-width: 60vw;
    }
  }
`;