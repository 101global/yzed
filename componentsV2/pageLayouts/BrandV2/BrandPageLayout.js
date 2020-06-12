import { Element, Events, Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { useEffect, useRef, useState } from 'react';

import BrandAbout from './BrandAbout';
import BrandCommunity from './BrandCommunity';
import BrandContact from './BrandContact';
import BrandServices from './BrandServices';
import Layout from '../../Layout';
import ModelViewerController from '../../reusableStyledComponents/modelViewers/ModelViewerController';
import YZEDLogoSVG from '../../reusableStyledComponents/YZEDLogoSVG';
import theme from '../../../utilities/theme';

const BrandLayout = ({ model }) => {
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
          <div className='logo-container'>
            <YZEDLogoSVG fill={theme.colors.white} />
          </div>
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
              to='about'
              spy={true}
              smooth={true}
              duration={500}
              className='nav-scroll-link'
              activeClass='active'
              onSetActive={() => setDark(false)}>
              <span>02.</span> About
            </Link>
            <Link
              to='services'
              spy={true}
              smooth={true}
              duration={500}
              className='nav-scroll-link'
              activeClass='active'
              onSetActive={() => setDark(true)}>
              <span>03.</span> Our Services
            </Link>
            <Link
              to='4'
              spy={true}
              smooth={true}
              duration={500}
              className='nav-scroll-link'
              activeClass='active'
              onSetActive={() => setDark(false)}>
              <span>04.</span> Community
            </Link>
            <Link
              to='5'
              spy={true}
              smooth={true}
              duration={500}
              className='nav-scroll-link'
              activeClass='active'
              onSetActive={() => setDark(true)}>
              <span>05.</span> Connect
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

          <Element name='about' className='body-element'>
            <div className='section-container light-section middle'>
              <BrandAbout />
            </div>
          </Element>

          <Element name='services' className='body-element'>
            <div className='dynamic-section-container dark-section'>
              <BrandServices />
            </div>
          </Element>
          <Element name='4' className='body-element'>
            <div className='section-container light-section'>
              <BrandCommunity />
            </div>
          </Element>
          <Element name='5' className='body-element'>
            <div className='section-container dark-section'>
              <BrandContact />
            </div>
          </Element>
        </div>
        <style jsx>{`
          .dark-section,
          .light-section {
            min-height: 100vh;
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
            align-items: center;
            justify-content: center;
            top: 0;
            background-color: ${theme.colors.black};
            transition: all 0.5s;
            z-index: 100;
            color: white;
            left: 0;
            height: 100%;
            width: 20%;
          }
          .logo-container {
            text-align: left;
            min-width: 220px;
          }
          .link-container {
            border-left: 3px solid ${theme.colors.white};
            padding-left: 20px;
            margin-top: 30px;
            min-width: 220px;
          }
          .dynamic-section-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
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
            font-size: 1rem;
            color: ${theme.colors.white};
            transition: all 0.2s;
            display: block;
            font-weight: 100;
            letter-spacing: 0.02em;
            cursor: pointer;
            z-index: 500;
          }
          a.nav-scroll-link:nth-child(2),
          a.nav-scroll-link:nth-child(3) {
            margin-top: 20px;
          }
          a.nav-scroll-link:nth-child(4) {
            margin: 20px 0;
          }
          a.nav-scroll-link.active,
          a.nav-scroll-link span,
          a.nav-scroll-link:hover {
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

export default BrandLayout;
