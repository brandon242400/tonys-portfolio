import React from 'react';
import styled from 'styled-components';
import PicText from './PicTextCombo';

export default function Introduction() {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 300);

  return (
    <Wrapper>
      <div className='name-title'>
        <h1 className='tony-name'>Tony Gonzalez</h1>
        <h2>Tattooer/Illustrator</h2>
      </div>
      <p className='home-introduction'><strong>(Some sort of introduction)</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ea similique, delectus voluptates facilis at! Similique quod consectetur vel asperiores dicta adipisci architecto, hic nam, officia, odio ipsa magni ab!</p>
      <PicText desc={fillerText} imageLink={require('../images/tattoo-sample-1.jpg')} />
      <PicText desc='Testing' imageLink={require('../images/ancient-antique-art-cropped.jpg')} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;

  .tony-name {
    font-family: 'Permanent Marker', cursive;
    font-size: 400%;
    margin: 25px;
  }
  
  .name-title h2 {
    font-family: 'Permanent Marker', cursive;
    font-size: 200%;
  }
  
  .home-introduction {
    font-family: 'Just Another Hand', cursive;
    margin: 50px auto 150px auto;
    width: 50vw;
    font-size: 250%;
  }
  
  .name-title {
    border: 5px solid black;
    border-radius: 50px;
    margin: 100px auto 0 auto;
    width: fit-content;
  }
`;


var fillerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aspernatur vitae fuga ipsa, quae dolore voluptas dolores tempore eveniet dignissimos animi ex dicta assumenda obcaecati, est rerum soluta consectetur quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aspernatur vitae fuga ipsa, quae dolore voluptas dolores tempore eveniet dignissimos animi ex dicta assumenda obcaecati, est rerum soluta consectetur quo?';