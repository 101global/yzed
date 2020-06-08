import React, { useContext, useEffect, useRef, useState } from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';

const StationaryModelViewer = ({ model }) => {
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
          preload
          auto-rotate
          camera-controls
          ar
          exposure={0.5}
          poster={'YZED_loadingkopie.png'}
          interaction-policy='allow-when-focused'></model-viewer>
      </div>
      <style jsx global>{`
        .model-viewer-container {
          padding: 20px 0;
          height: 100%;
          width: 100%;
        }
        model-viewer {
          margin: 0 auto;
          padding: 20px;
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
