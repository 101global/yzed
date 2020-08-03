import React, { useContext, useEffect, useRef, useState } from 'react';

import DownChevron from '../../ReusableComponents/Images/DownChevron';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../utilities/context/ThemeContext';
import darkBackgroundLoading from '../../../public/yzed-loading-dark-background.svg';
import lightBackgroundLoading from '../../../public/yzed-loading-light-background.svg';

const AnimatedModelViewer = ({ model, topModelDark }) => {
  const modelRef = useRef(null);
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className='model-viewer-container'>
        <model-viewer
          ref={modelRef}
          src={model.animatedGlbFile}
          alt={model.id}
          loading='lazy'
          camera-controls
          poster={topModelDark || darkMode.value ? darkBackgroundLoading : lightBackgroundLoading}
          exposure={model.exposure}
          interaction-policy='allow-when-focused'
          autoplay>
          {/* <DownChevron topModelDark={topModelDark} /> */}
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

export default AnimatedModelViewer;

AnimatedModelViewer.propTypes = {
  model: PropTypes.object.isRequired,
  topModelDark: PropTypes.bool,
};
