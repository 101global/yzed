import { Controller, Scene } from 'react-scrollmagic';
import { Element, Events, Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import React, { useEffect, useRef, useState } from 'react';
import { Timeline, Tween } from 'react-gsap';

import BrandAbout from '../Brand/BrandAbout';

const Sticky2 = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className='layout-container'>
      <nav>
        <Link
          to='1'
          spy={true}
          smooth={true}
          duration={250}
          className='nav-scroll-link'
          activeClass='active'>
          <p onClick={() => setDark(false)}>1</p>
        </Link>
        <Link
          to='2'
          spy={true}
          smooth={true}
          duration={250}
          className='nav-scroll-link'
          activeClass='active'>
          <p onClick={() => setDark(true)}>2</p>
        </Link>
        <Link
          to='3'
          spy={true}
          smooth={true}
          duration={250}
          className='nav-scroll-link'
          activeClass='active'>
          <p onClick={() => setDark(false)}>3</p>
        </Link>
        <Link
          to='4'
          spy={true}
          smooth={true}
          duration={250}
          className='nav-scroll-link'
          activeClass='active'>
          <p onClick={() => setDark(true)}>4</p>
        </Link>
        <Link
          to='5'
          spy={true}
          smooth={true}
          duration={250}
          className='nav-scroll-link'
          activeClass='active'>
          <p onClick={() => setDark(false)}>5</p>
        </Link>
      </nav>
      <div>
        <div className='section'>
          <Element name='1'>
            <div className='section-container'>
              <h1>1</h1>
            </div>
          </Element>
        </div>
        <Controller>
          <Scene classToggle={'darkMode2'} triggerHook='onLeave' duration={1000} pin>
            {(progress, event) => {
              return (
                <div className='sticky'>
                  <Element name='2' className='darkMode'>
                    <div className='section-container'>
                      <h1>2</h1>
                    </div>
                  </Element>
                </div>
              );
            }}
          </Scene>
          <Scene triggerHook='onLeave' duration={1000} pin>
            {(progress, event) => {
              return (
                <div className='section'>
                  <Element name='3'>
                    <div className='section-container'>
                      <h1>3</h1>
                    </div>
                  </Element>
                </div>
              );
            }}
          </Scene>
          <Scene classToggle={'darkMode4'} triggerHook='onLeave' duration={1000} pin>
            {(progress, event) => {
              return (
                <div className='sticky'>
                  <Element name='4' className='darkMode'>
                    <div className='section-container'>
                      <h1>4</h1>
                    </div>
                  </Element>
                </div>
              );
            }}
          </Scene>
        </Controller>
        <div className='section'>
          <Element name='5'>
            <div className='section-container'>
              <h1>5</h1>
            </div>
          </Element>
        </div>
      </div>
      <style jsx>{`
        .layout-container {
          margin: 0;
        }
        .section,
        .sticky {
          height: 100vh;
          margin: 0 auto;

          color: white;
          font-size: 5rem;
        }
        .section {
          height: 100vh;
          background: linear-gradient(160deg, #f47c66 0%, #e51906 100%);
        }
        .sticky {
          height: 100vh;
          background: linear-gradient(160deg, #e4f5fc 0%, #bfe8f9 26%, #9fd8ef 59%, #0068f2 100%);
          width: 100%;
        }
        nav {
          position: fixed;
          top: 0;
          height: 100px;
          width: 100%;
          background-color: black;
          z-index: 100;
          color: white;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
        }
        .section-container {
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
      `}</style>
      <style jsx global>{`
        body,
        h1 {
          margin: 0;
        }
        a.nav-scroll-link {
          font-size: 2rem;
          color: ${dark ? 'green' : 'blue'};
        }
        a.nav-scroll-link.active {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Sticky2;
