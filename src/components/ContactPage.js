import React, { Component } from 'react';
import MapThing from './Map';
import styled from 'styled-components';

export default class ContactPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 300);
  }

  render() {
    return (
      <Wrapper>
        <h1 className='contact-title'>Contact Me</h1>
        <div className='personal-contact-info'>
          <h2>
            Business Email: TonyrGonzalez5@gmail.com<br /><br />
            Instagram: <a href='https://www.instagram.com/softestbirthdayparty/?hl=en' target='_none'>softestbirthdayparty</a>
          </h2>
        </div>
        <div className='shop-info'>
          <h2>Shop Info</h2>
          <h3>
            Social Ink<br />
            Address: 1155 S Power Rd #119, Mesa, AZ 85206<br />
            Phone #: (480) 809-6553
          </h3>
          <MapThing />
        </div>
      </Wrapper>
    );
  }
}


const Wrapper = styled.div`
  text-align: center;
  margin-top: 100px;

  .contact-title {
    font-family: 'Permanent Marker', cursive;
    font-size: 300%;
    border: 5px solid black;
    border-radius: 25px;
    margin: 100px auto 100px auto;
    width: fit-content;
    padding: 25px 50px;
  }

  .personal-contact-info {
    // border: 4px solid black;
    border-radius: 50px;
    width: fit-content;
    padding-left: 25px;
    padding-right: 25px;
    margin: 0 auto 150px auto;
  }

  .personal-contact-info h2 {
    text-align: center;
    font-family: 'just another hand', cursive;
    font-size: 300%;
  }

  .shop-info h2 {
    font-family: 'permanent marker', cursive;
    font-size: 200%;
    margin: 15px auto;
    border: 5px solid black;
    border-radius: 25px;
    width: fit-content;
    padding: 5px 25px;
  }

  .shop-info h3 {
    font-family: cursive;
    font-size: 125%;
  }
`;