import { Element, Events, Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import { useEffect, useRef, useState } from 'react';

import Layout from '../../Layout';
import ModelViewerController from '../../reusableStyledComponents/modelViewers/ModelViewerController';
import YZEDLogoSVG from '../../reusableStyledComponents/YZEDLogoSVG';
import theme from '../../../utilities/theme';
import BrandAbout from './BrandAbout';

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
          <YZEDLogoSVG fill={theme.colors.white} />
          <div className='link-container'>
            <Link
              to='model'
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
              <span>02.</span> About
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
            <Link
              to='4'
              spy={true}
              smooth={true}
              duration={500}
              className='nav-scroll-link'
              activeClass='active'
              onSetActive={() => setDark(false)}>
              <span>04.</span> More About
            </Link>
            <Link
              to='5'
              spy={true}
              smooth={true}
              duration={500}
              className='nav-scroll-link'
              activeClass='active'
              onSetActive={() => setDark(true)}>
              <span>05.</span> More About Info
            </Link>
          </div>
        </nav>
        <div>
          <Element name='model' className='body-element'>
            <div
              className='section-container dark-section'
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

          <Element name='2' className='body-element'>
            <div className='section-container light-section middle'>
              <BrandAbout />
            </div>
          </Element>

          <Element name='3' className='body-element'>
            <div className='section-container dark-section'>
              <h1>3</h1>
            </div>
          </Element>
          <Element name='4' className='body-element'>
            <div className='section-container light-section'>
              <h1>4</h1>
            </div>
          </Element>
          <Element name='5' className='body-element'>
            <div className='section-container dark-section'>
              <h1>5</h1>
            </div>
          </Element>
        </div>
        <style jsx>{`
          .dark-section,
          .light-section {
            height: 100vh;
            color: white;
            font-size: 5rem;
          }
          .dark-section {
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
            align-items: start;
            justify-content: space-between;
            top: 50%;
            transform: translateY(-50%);
            background-color: #0d0d0d;
            padding: 40px;
            border: 1px solid ${theme.colors.white};
            border-radius: 0 40px 40px 0;
            transition: all 0.5s;
            z-index: 100;
            color: white;
            display: flex;
            left: 10%;
          }
          .link-container {
            border-left: 3px solid ${theme.colors.white};
            padding-left: 20px;
            margin-top: 30px;
            min-width: 220px;
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
          a.nav-scroll-link {
            font-size: 1.1rem;
            color: ${theme.colors.white};
            transition: all 0.2s;
            display: block;
            font-weight: 100;
            letter-spacing: 0.02em;
            cursor: pointer;
          }
          a.nav-scroll-link:nth-child(2),
          a.nav-scroll-link:nth-child(3) {
            padding-top: 20px;
          }
          a.nav-scroll-link:nth-child(4) {
            padding: 20px 0;
          }
          a.nav-scroll-link.active,
          a.nav-scroll-link span {
            font-weight: 700;
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
