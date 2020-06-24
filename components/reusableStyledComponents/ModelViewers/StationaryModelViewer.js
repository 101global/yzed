import '@google/model-viewer/dist/model-viewer';

import React, { useContext, useEffect, useRef, useState } from 'react';

import DownChevron from '../DownChevron';
import PropTypes from 'prop-types';
import darkBackgroundLoading from '../../../public/yzed-loading-dark-background.svg';
import dynamic from 'next/dynamic';
import lightBackgroundLoading from '../../../public/yzed-loading-light-background.svg';

const StationaryModelViewer = ({ model, topModelDark }) => {
  const modelRef = useRef(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className='model-viewer-container'>
        <model-viewer
          ref={modelRef}
          src={model.glbFile}
          ios-src={model.usdzFile}
          alt={model.id}
          loading='lazy'
          ar-modes='scene-viewer webxr quick-look'
          ar-scale='fixed'
          auto-rotate
          camera-controls
          ar
          exposure={model.exposure ?? 0.5}
          poster={topModelDark ? darkBackgroundLoading : lightBackgroundLoading}
          interaction-policy='allow-when-focused'>
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
