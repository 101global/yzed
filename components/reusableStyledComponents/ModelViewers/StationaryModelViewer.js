import React, { useContext, useEffect, useRef, useState } from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';
import svg from '../../../public/YZED_Square.svg';
import svgDark from '../../../public/YZED_Square_Dark.svg';

const StationaryModelViewer = ({ model, topModelDark }) => {
  const modelRef = useRef(null);
  const [loading, setLoading] = useState(false);

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
      <div className='model-viewer-container'>
        {loading && <h1>Loading</h1>}
        <model-viewer
          ref={modelRef}
          src={model.glbFile}
          ios-src={model.usdzFile}
          alt={model.name}
          loading='lazy'
          auto-rotate
          camera-controls
          ar
          exposure={0.5}
          poster={topModelDark ? svg : svgDark}
          interaction-policy='allow-when-focused'></model-viewer>
      </div>
      <style jsx global>{`
         {
          /* width: 80% and margin-left 20% for centered in other section */
        }
        .model-viewer-container {
          height: 100%;
          width: 100%;
        }
        model-viewer {
          margin: 0 auto;
          z-index: 101;
          height: 100%;
          width: 100%;
          --poster-color: transparent;
        }
      `}</style>
    </>
  );
};

export default StationaryModelViewer;

StationaryModelViewer.propTypes = {
  model: PropTypes.object.isRequired,
};
