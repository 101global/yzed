import { Element, Events, Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import { useEffect, useRef, useState } from 'react';

import Layout from '../../Layout';
import ModelViewerController from '../../reusableStyledComponents/modelViewers/ModelViewerController';
import YZEDLogoSVG from '../../reusableStyledComponents/YZEDLogoSVG';
import theme from '../../../utilities/theme';

const Sticky2 = ({ model }) => {
  const [dark, setDark] = useState(true);
  const [topModelDark, setTopModelDark] = useState(true);

  const toggleLightMode = (status) => {
    if (topModelDark && !status) {
      setDark(false);
      setTopModelDark(false);
    } else {
      setDark(true);
      setTopModelDark(true);
    }
  };

  return (
    <Layout>
      <div className='layout-container'>
        <nav>
          <YZEDLogoSVG fill={!dark ? theme.colors.black : theme.colors.white} />
          <div className='link-container'>
            <Link
              to='1'
              spy={true}
              smooth={true}
              duration={500}
              className='nav-scroll-link'
              activeClass='active'
              onSetActive={() => {
                if (topModelDark) {
                  setDark(true);
                } else {
                  setDark(false);
                }
              }}>
              <span>01.</span> 3D Model
            </Link>
            <Link
              to='2'
              spy={true}
              smooth={true}
              duration={500}
              className='nav-scroll-link'
              activeClass='active'
              onSetActive={() => setDark(false)}>
              <span>02.</span> About / Contact
            </Link>
            <Link
              to='3'
              spy={true}
              smooth={true}
              duration={500}
              className='nav-scroll-link'
              activeClass='active'
              onSetActive={() => setDark(true)}>
              <span>03.</span> The Process
            </Link>
          </div>
        </nav>
        <div>
          <div className='dark-section'>
            <Element name='1'>
              <div
                className='section-container'
                style={{
                  backgroundColor: topModelDark ? theme.colors.black : theme.colors.white,
                }}>
                <ModelViewerController
                  model={model}
                  topModelDark={topModelDark}
                  setTopModelDark={toggleLightMode}
                />
              </div>
            </Element>
          </div>
          <div className='light-section'>
            <Element name='2'>
              <div className='section-container'>
                <h1>2</h1>
              </div>
            </Element>
          </div>
          <div className='dark-section'>
            <Element name='3'>
              <div className='section-container'>
                <h1>3</h1>
              </div>
            </Element>
          </div>
        </div>
        <style jsx>{`
          .layout-container {
            margin: 0;
          }
          .dark-section,
          .light-section {
            height: 100vh;
            color: white;
            font-size: 5rem;
          }
          .dark-section {
            margin: 0;
            background: ${theme.colors.black};
          }
          .light-section {
            background: ${theme.colors.white};
            width: 100%;
            color: black;
          }
          nav {
            position: fixed;
            display: flex;
            flex-direction: column;
            align-items: center;
            top: 50%;
            transform: translateY(-50%);
            background-color: transparent;
            transition: all 0.5s;
            z-index: 100;
            color: white;
            display: flex;
            min-height: 20vh;
            align-items: start;
            justify-content: space-between;
            left: 10%;
          }
          .link-container {
            border-left: 3px solid ${dark ? theme.colors.white : theme.colors.black};
            padding-left: 20px;
            margin-top: 30px;
          }
          .section-container {
            min-height: 100vh;
            width: 100%;
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
            font-size: 1.2rem;
            color: ${dark ? theme.colors.white : theme.colors.black};
            transition: all 0.2s;
            display: block;
            font-weight: 100;
            letter-spacing: 0.12em;
            cursor: pointer;
          }
          a.nav-scroll-link:nth-child(2) {
            padding: 20px 0;
          }

          a.nav-scroll-link.active,
          a.nav-scroll-link span {
            font-weight: 600;
          }
          a.nav-scroll-link span {
            margin-right: 10px;
          }
          nav svg {
            height: 40px;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Sticky2;
