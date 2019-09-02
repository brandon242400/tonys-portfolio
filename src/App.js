import React from 'react';
import styled from 'styled-components';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Introduction from './components/Introduction';
import NavBar from './components/NavBar';
import MobileNav from './components/MobileNav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactPage from './components/ContactPage';


function App({ location }) {
  return (
    <Wrapper>
      <NavBar />
      <MobileNav />
      <TransitionGroup className='transition-group'>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 600, exit: 600 }}
          classNames={'slide'} >

          <section className='route-section'>
            <Switch location={location} >
              <Route exact path='/' component={Introduction} />
              <Route path='/About' component={About} />
              <Route path='/Portfolio' component={Portfolio} />
              <Route path='/Contact' component={ContactPage} />
            </Switch>
          </section>

        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  )
}

// Provides the sliding in and out animation between route changes
const Wrapper = styled.div`
  .div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }

  .slide-enter {
    left: 100vw;
    opacity: 0;
  }

  .slide-enter.slide-enter-active {
    left: 0;
    animation: slide-into-frame 300ms;
    animation-delay: 300ms;
    animation-fill-mode: forwards;
  }

  @keyframes slide-into-frame {
    from { 
      left: 100vw;
      opacity: 1;
    }
    to { 
      left: 0;
      opacity: 1;
    }
  }

  .slide-exit {
    
  }

  .slide-exit.slide-exit-active {
    left: -100vw;
    transition: all 300ms ease-in;
  }
`;

export default withRouter(App);