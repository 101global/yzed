import { Controller, Scene } from 'react-scrollmagic';
import { Element, Events, Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Timeline, Tween } from 'react-gsap';
import { useEffect, useRef, useState } from 'react';

const Sticky2 = () => {
  const [dark, setDark] = useState(true);
  // Set Scroll Listener on Active LInk Class.
  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY / window.innerHeight);
      console.log(window.scrollY);
      if (
        window.scrollY / window.innerHeight < 0.5 ||
        window.scrollY / window.innerHeight > 2.8 ||
        window.scrollY < 100
      ) {
        setDark(true);
      } else {
        setDark(false);
      }
    });
  }, []);

  return (
    <div className='layout-container'>
      <nav>
        <Link
          to='1'
          spy={true}
          smooth={true}
          duration={250}
          className='nav-scroll-link'
          activeClass='activeLightMode'>
          <p>1</p>
        </Link>
        <Link
          to='2'
          spy={true}
          smooth={true}
          duration={250}
          className='nav-scroll-link'
          activeClass='activeDarkMode'>
          <p>2</p>
        </Link>
        <Link
          to='3'
          spy={true}
          smooth={true}
          duration={250}
          className='nav-scroll-link'
          activeClass='activeLightMode'>
          <p>3</p>
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
        {/* <div className='sticky'>
          <Element name='2'>
            <div className='section-container'>
              <h1>2</h1>
            </div>
          </Element>
        </div>
        <div className='section'>
          <Element name='3'>
            <div className='section-container'>
              <h1>3</h1>
            </div>
          </Element>
        </div> */}
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
        </Controller>
      </div>
      <style jsx>{`
        .layout-container {
          margin: 0;
        }
        .section,
        .sticky {
          height: 101vh;
          color: white;
          font-size: 5rem;
        }
        .section {
          margin: 0;
          background: linear-gradient(160deg, #050505 0%, black 100%);
        }
        .sticky {
          background: linear-gradient(160deg, #e4f5fc 0%, white 100%);
          width: 100%;
          color: black;
        }
        nav {
          position: fixed;
          top: 0;
          height: 100px;
          width: 100%;
          background-color: ${dark ? 'black' : 'white'};
          transition: all 0.5s;
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
          color: ${dark ? 'white' : 'black'};
          transition: all 0.5s;
        }
        a.nav-scroll-link.activeLightMode,
        a.nav-scroll-link.activeDarkMode {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default Sticky2;
