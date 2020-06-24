import React, { useContext, useEffect, useState } from 'react';

import AnimatedModelViewer from './AnimatedModelViewer';
import PropTypes from 'prop-types';
import StationaryModelViewer from './StationaryModelViewer';
import SwitchSelector from 'react-switch-selector';
import theme from '../../../utilities/theme';
import loadingSVG from '../../../public/YZED_Square.svg';
import loadingSVGDark from '../../../public/YZED_Square_Dark.svg';

const ModelViewerController = ({ model, topModelDark, setTopModelDark }) => {
  const [showAnimated, setShowAnimated] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const animationOptions = [
    {
      label: 'Stationary',
      value: false,
    },
    {
      label: 'Walking',
      value: true,
    },
  ];

  const lightOptions = [
    { label: 'Light', value: false },
    { label: 'Dark', value: true },
  ];

  const onAnimationChange = (newValue) => {
    setShowAnimated(newValue);
    if (newValue === true) {
      setIsVideoLoading(true);
    } else {
      setIsVideoLoading(false);
    }
  };

  const onLightChange = (newValue) => {
    setTopModelDark(newValue);
  };

  const onLoadedData = () => {
    setIsVideoLoading(false);
  };

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsDesktop(true);
    }
  }, []);

  return (
    <>
      <div className='viewer-container flex justify-between items-center'>
        <div className='model-viewer-container'>
          {showAnimated ? (
            model.animatedVideo && !isDesktop ? (
              <div className='video-container text-white flex flex-col justify-center items-center h-full'>
                <video
                  playsInline
                  autoplay='autoplay'
                  muted
                  loop
                  src={model.animatedVideo}
                  onLoadedData={onLoadedData}
                />
                {isVideoLoading && (
                  <img
                    src={topModelDark ? loadingSVG : loadingSVGDark}
                    alt='loading logo'
                    className='video-loading-logo absolute w-full h-full'
                  />
                )}
              </div>
            ) : (
              <AnimatedModelViewer model={model} topModelDark={topModelDark} />
            )
          ) : (
            <StationaryModelViewer model={model} topModelDark={topModelDark} />
          )}

        </div>
        <div className='controls'>
          <div className='toggle-animated-buttons'>
            <SwitchSelector
              onChange={onAnimationChange}
              options={animationOptions}
              initialSelectedIndex={0}
              backgroundColor={'#0d0d0d'}
              fontColor={'#fff'}
              selectedFontColor={'#0d0d0d'}
              selectedBackgroundColor={'#fff'}
              optionBorderRadius={0}
              selectionIndicatorMargin={3}
            />
          </div>
          <div className='toggle-light-buttons'>
            <SwitchSelector
              onChange={onLightChange}
              options={lightOptions}
              initialSelectedIndex={1}
              backgroundColor={'#0d0d0d'}
              fontColor={'#fff'}
              selectedFontColor={'#0d0d0d'}
              selectedBackgroundColor={'#fff'}
              optionBorderRadius={0}
              selectionIndicatorMargin={3}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .video-loading-logo {
          height: 90vh;
          z-index: 1000;
        }
        .viewer-container {
          height: 90vh;
          max-width: 80%;
          margin: 0 auto;
        }
        .video-container {
          height: 80vh;
        }
        .controls {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          position: absolute;
          top: 4.8rem;
          right: 10%;
          z-index: 1000;
          background: transparent;
          color: ${!topModelDark ? theme.colors.black : theme.colors.white};
        }

        .toggle-animated-buttons,
        .toggle-light-buttons {
          height: 40px;
          width: 380px;
          margin-bottom: 20px;
          margin-top: 10px;
        }
        @media (max-width: 768px) {
          .controls {
            position: relative;
            display: block;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            padding: 2.5%;
            background: ${topModelDark ? theme.colors.black : theme.colors.white};
          }
          .viewer-container {
            display: flex;
            flex-direction: column;
            max-width: 100%;
          }
          .model-viewer-container {
            min-height: 80vh;
            max-width: 90%;
            margin: 0 auto;
          }
          .toggle-animated-buttons,
          .toggle-light-buttons {
            width: 100%;
            margin-bottom: 0px;
          }
      `}</style>
      <style jsx global>{`
        .react-switch-selector-wrapper {
          border-radius: 0px !important;
          border: 1px solid ${theme.colors.white} !important;
          height: 30px !important;
        }
        @media (max-width: 640px) {
          .react-switch-selector-wrapper {
            max-width: 100% !important;
          }import LoadingSpinner from '../LoadingSpinner';

        }
      `}</style>
    </>
  );
};

export default ModelViewerController;

ModelViewerController.propTypes = {
  model: PropTypes.object.isRequired,
  topModelDark: PropTypes.bool.isRequired,
  setTopModelDark: PropTypes.func.isRequired,
};
