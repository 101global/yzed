import React, { useContext, useEffect, useRef, useState } from 'react';

import DownChevron from '../DownChevron';
import Head from 'next/head';
import PropTypes from 'prop-types';
import darkBackgroundLoading from '../../../public/yzed-loading-dark-background.svg';
import lightBackgroundLoading from '../../../public/yzed-loading-light-background.svg';

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
          poster={topModelDark ? darkBackgroundLoading : lightBackgroundLoading}
          exposure={model.exposure ?? 0.5}
          interaction-policy='allow-when-focused'
          autoplay>
          <DownChevron topModelDark={topModelDark} />
        </model-viewer>
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
