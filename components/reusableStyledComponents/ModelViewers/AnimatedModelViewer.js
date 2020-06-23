import React, { useContext, useEffect, useRef, useState } from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';
import svg from '../../../public/YZED_Square.svg';
import svgDark from '../../../public/YZED_Square_Dark.svg';

const AnimatedModelViewer = ({ model, topModelDark }) => {
  const modelRef = useRef(null);

  return (
    <>
      <Head>
        <script
          type='module'
          src='https://unpkg.com/@google/model-viewer/dist/model-viewer.js'></script>
        <script
          nomodule
          src='https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js'></script>
      </Head>
      <div className='model-viewer-container'>
        <model-viewer
          ref={modelRef}
          src={model.animatedGlbFile}
          alt={model.id}
          loading='lazy'
          auto-rotate
          camera-controls
          poster={topModelDark ? svg : svgDark}
          exposure={model.exposure ?? 0.5}
          interaction-policy='allow-when-focused'
          autoplay></model-viewer>
      </div>
      <style jsx global>{`
        .model-viewer-container {
          height: 100%;
          width: 100%;
        }
        model-viewer {
          margin: 0 auto;

          height: 100%;
          width: 100%;
          --poster-color: transparent;
        }
      `}</style>
    </>
  );
};

export default AnimatedModelViewer;

AnimatedModelViewer.propTypes = {
  model: PropTypes.object.isRequired,
};
