import React, { Component } from 'react';
import styled from 'styled-components';
import TrackVisibility from 'react-on-screen';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    // Importing all images to be shown in the portfolio 
    this.allImages = this.importAll(require.context('../images/portfolio-images',
      false, /\.(png|jpe?g|svg)$/));
    this.imageKeys = Object.keys(this.allImages);
  }

  /**
   * Imports all images from a folder and returns them as an object
   * @param {reuire.context( folder ) } r 
   */
  importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return null; });
    return images;
  }

  // Scrolls to the top of the page when page is selected from the navigation bar
  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 300);
  }

  render() {
    let items = [];
    // Filling 'items' array with image elements to show on the portfolio page
    for (let x = 0; x < /* this.imageKeys.length */ 50; x++) {
      items.push(
        <div className='portfolio-picture-container' >
          <a href={this.allImages[this.imageKeys[x]]} target='new'>
            <img src={this.allImages[this.imageKeys[x]]} alt='Previous tattoo work' />
          </a>
        </div >
      );
    }

    return (
      <div>
        <TrackVisibility once >
          <Wrapper>
            <h1 className='portfolio-title'>Portfolio</h1>
            <div className='portfolio-pictures'>
              {items}
            </div>
          </Wrapper>
        </TrackVisibility>
      </div>
    );
  }
}


// Storing all styles in Wrapper
const Wrapper = createStyled();

// Returns Wrapper styling
function createStyled() {
  return (
    styled.div`
    text-align: center;

    .portfolio-title {
      font-family: 'Permanent Marker', cursive;
      font-size: 300%;
      border: 5px solid black;
      border-radius: 25px;
      margin: 100px auto 100px auto;
      width: fit-content;
      padding: 25px 50px;
    }
    
    .portfolio-pictures {
      margin: 100px auto;
      width: 80%;
      height: auto;
      border: 5px solid black;
      border-radius: 25px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
    }
    
    .portfolio-picture-container {
      background-color: #555;
      width: 300px;
      height: auto;
      margin: 2.5%;
      /* overflow: hidden; */
      border: 2px solid black;
      border-radius: 5%;
    }
    
    .portfolio-picture-container img {
      width: 96%;
      max-height: 100%;
      margin: 2%;
      display: block;
      border-radius: 3%;
    }
    
    .portfolio-picture-container img:hover {
      position: relative;
      animation: picture-hover .5s;
      animation-fill-mode: forwards;
      animation-timing-function: linear;
      cursor: pointer;
    }
    
    @keyframes picture-hover {
      from {
        filter: brightness(100%);
      }
      to {
        filter: brightness(30%);
      }
    }
    
    @media (max-width: 1400px) {

      .portfolio-pictures {
        border: 3px solid black;
        border-radius: 25px;
      }
    
      .portfolio-picture-container {
        width: 200px;
      }
    }

    @media (max-width: 800px) {

      .portfolio-title {
        font-size: 6vw;
        border: 3px solid black;
        margin: 50px auto 50px auto;
        padding: 15px 30px;
      }

      .portfolio-pictures {
        margin-top: 50px;
      }
    }
  `);
}

