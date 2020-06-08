import React, { useState } from 'react';

import BrandModelTop from './BrandModelTop';
import Head from 'next/head';
import ModelViewerController from '../../../componentsV2/reusableStyledComponents/modelViewers/ModelViewerController';
import { Pager } from 'react-bootstrap';
import ReactPageScroller from 'react-page-scroller';
import YZEDLogoSVG from '../../reusableStyledComponents/YZEDLogoSVG';
import theme from '../../../utilities/theme';

const FullPage = ({ model }) => {
  console.log('MODEL', model);
  const [currentPage, setCurrentPage] = useState(0);
  const [darkPage, setDarkPage] = useState(true);
  const [lightModeModelView, setLightModeModelView] = useState(false);

  const handlePageChange = (number) => {
    if (number % 2 === 0) {
      setDarkPage(false);
    } else {
      setDarkPage(true);
    }
    setCurrentPage(number); // set currentPage number, to reset it from the previous selected.
    setTimeout(() => {}, 300);
  };

  const getPagesNumbers = () => {
    const pages = ['3D Model', 'About / Contact', 'The Process'];
    const pageNumbers = [];

    for (let i = 0; i < pages.length; i++) {
      pageNumbers.push(
        <Pager.Item
          key={i}
          eventKey={i}
          onSelect={() => handlePageChange(i)}
          className={currentPage === i ? 'active item' : 'item'}>
          <span>{`0${i + 1}.`}</span> {pages[i]}
        </Pager.Item>
      );
    }

    return [...pageNumbers];
  };

  const pagesNumbers = getPagesNumbers();

  return (
    <>
      <Head>
        <script
          type='module'
          src='https://unpkg.com/@google/model-viewer/dist/model-viewer.js'></script>
        <script
          noModule
          src='https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js'></script>
      </Head>
      <ReactPageScroller pageOnChange={handlePageChange} customPageNumber={currentPage}>
        <div
          className='component first-component'
          style={{ background: lightModeModelView ? theme.colors.white : theme.colors.black }}>
          <BrandModelTop
            model={model}
            lightModeModelView={lightModeModelView}
            setLightModeModelView={setLightModeModelView}
          />
        </div>
        <div className='component second-component' style={{ background: theme.colors.white }}>
          <h2>About</h2>
        </div>
        <div className='component third-component' style={{ background: theme.colors.black }}>
          <h2>Contact</h2>
        </div>
      </ReactPageScroller>
      <Pager className='pagination-container' bsSize='large'>
        <YZEDLogoSVG fill={!darkPage ? theme.colors.white : theme.colors.black} />
        {pagesNumbers}
      </Pager>
      <style jsx global>{`
        .component {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
        .pagination-container li {
          margin-bottom: 30px;
        }
        .pagination-container li a {
          color: ${darkPage ? theme.colors.black : theme.colors.white};
          transition: all 0.3s;
          text-decoration: none;
          font-weight: 100;
          font-size: 1.2rem;
          letter-spacing: 0.12em;
        }
        .pagination-container li.active a,
        .pagination-container li a span {
          font-weight: 700;
        }
        .pagination-container {
          padding: 30px 0;
          position: fixed;

          z-index: 100;
          background-color: transparent;
          top: 50%;
          left: 12%;
          transform: translateY(-50%);
          list-style-type: none;
        }
        svg {
          height: 60px;
          margin-bottom: 30px;
        }
      `}</style>
    </>
  );
};

export default FullPage;
