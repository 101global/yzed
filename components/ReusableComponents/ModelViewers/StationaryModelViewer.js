import '@google/model-viewer/dist/model-viewer';

import React, { useContext, useEffect, useRef, useState } from 'react';

import ARActivation from '../Buttons/ARActivation';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../utilities/context/ThemeContext';
import darkBackgroundLoading from '../../../public/yzed-loading-dark-background.svg';
import dynamic from 'next/dynamic';
import lightBackgroundLoading from '../../../public/yzed-loading-light-background.svg';

const StationaryModelViewer = ({ model }) => {
  const [loading, setLoading] = useState(false);
  const { darkMode } = useContext(ThemeContext);
  const modelRef = useRef(null);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.addEventListener('error', (error) => {
        console.log(error);
      });
    }
  }, []);

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
          camera-controls
          ar
          exposure={model.exposure}
          poster={darkMode.value ? darkBackgroundLoading : lightBackgroundLoading}
          interaction-policy='allow-when-focused'>
          <ARActivation />
        </model-viewer>
      </div>
      <style jsx global>{`
        .model-viewer-container {
          height: 100%;
          width: 100%;
        }
        .model-viewer-container model-viewer {
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
