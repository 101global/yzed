import React, { useContext, useEffect, useState } from 'react';

import AnimatedModelViewer from './AnimatedModelViewer';
import PropTypes from 'prop-types';
import StationaryModelViewer from './StationaryModelViewer';
import SwitchSelector from 'react-switch-selector';
import theme from '../../../utilities/theme';

const ModelViewerController = ({ model, topModelDark, setTopModelDark }) => {
  const [showAnimated, setShowAnimated] = useState(false);
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
  };

  const onLightChange = (newValue) => {
    setTopModelDark(newValue);
  };

  return (
    <>
      <div className='viewer-container'>
        {showAnimated ? (
          <AnimatedModelViewer model={model} topModelDark={topModelDark} />
        ) : (
          <StationaryModelViewer model={model} topModelDark={topModelDark} />
        )}

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
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            viewBox='0 0 1000 1000'
            enable-background='new 0 0 1000 1000'
            className='down-chevron control-chevron block lg:hidden'>
            <g>
              <path
                fill={topModelDark ? theme.colors.white : theme.colors.black}
                d='M500,757.8L10,271.5l29.3-29.3L500,706.6l460.7-464.4l29.3,29.3L500,757.8z'
              />
            </g>
          </svg>
        </div>

        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          viewBox='0 0 1000 1000'
          enable-background='new 0 0 1000 1000'
          className='down-chevron model-chevron hidden lg:block'>
          <g>
            <path
              fill={topModelDark ? theme.colors.white : theme.colors.black}
              d='M500,757.8L10,271.5l29.3-29.3L500,706.6l460.7-464.4l29.3,29.3L500,757.8z'
            />
          </g>
        </svg>
      </div>
      <style jsx>{`
        .model-chevron {
          height: 30px;
          position: absolute;
          bottom: 5px;
          z-index: 501;
        }
        .control-chevron {
          position: relative;
          height: 30px;
          margin: 0;
          margin-top: -30px;
        }

        .viewer-container {
          height: 90vh;
          width: 2000px;
          max-width: 80%;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .controls {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          position: absolute;
          top: calc(30px + 3.2rem);
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
            justify-content: flex-end;
            width: 90%;
            left: 5%;
            bottom: 5%;
          }
          .down-chevron {
            bottom: -5%;
          }
          .viewer-container {
            height: 80vh;
          }
          .toggle-animated-buttons,
          .toggle-light-buttons {
            width: 100%;
            margin-bottom: 0px;
          }

      `}</style>
      <style jsx global>{`
        .more-chevron svg {
          fill: white !important;
        }
        .react-switch-selector-wrapper {
          border-radius: 0px !important;
          border: 1px solid ${theme.colors.white} !important;
          height: 30px !important;
        }
        @media (max-width: 640px) {
          .react-switch-selector-wrapper {
            max-width: 100% !important;
          }
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
