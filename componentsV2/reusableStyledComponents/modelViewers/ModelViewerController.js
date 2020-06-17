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
      <div className='control-container'>
        <div className='controls-section'>
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

        <div className='viewer-container'>
          {showAnimated ? (
            <AnimatedModelViewer model={model} />
          ) : (
            <StationaryModelViewer model={model} />
          )}
        </div>
      </div>
      <style jsx>{`
        .viewer-container {
          height: 100%;
          width: 2000px;
          max-width: 80%;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .control-container {
          height: 90vh;
          width: 100%;
          display: flex;
        }
        .controls {
          display: inline-block;
          flex-direction: column;
          justify-content: space-around;
          position: absolute;
          top: calc(30px + 3.2rem);
          right: 10vw;
          z-index: 1000;
          min-height: 100px;
          background: transparent;
          color: ${!topModelDark ? theme.colors.black : theme.colors.white};
        }
        .toggle-button-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }

        .toggle-animated-buttons,
        .toggle-light-buttons {
          height: 40px;
          width: 380px;
          margin-bottom: 20px;
          margin-top: 10px;
        }
        @media (max-width: 640px) {
          .controls {
            flex-direction: column;
            justify-content: flex-end;
            bottom: 200px;
            top: calc(100% - 250px);
            margin-bottom: 100px;
            transform: translateY(50%);
            left: 0;
            right: 0;
            max-width: 95%;
          }
          .viewer-container {
            margin-bottom: 100px;
            height: 100%;
            max-width: 90%;
          }
        }
      `}</style>
      <style jsx global>{`
        .react-switch-selector-wrapper {
          border-radius: 0px !important;
          border: 1px solid ${theme.colors.white} !important;
          height: 30px !important;
          margin-bottom: 20px;
          width: 380px;
        }
        @media (max-width: 640px) {
          .react-switch-selector-wrapper {
            max-width: 90%;
            left: calc(5%);
          }
        }
      `}</style>
    </>
  );
};

export default ModelViewerController;

ModelViewerController.propTypes = {
  model: PropTypes.object.isRequired,
  lightMode: PropTypes.bool.isRequired,
  setLightMode: PropTypes.func.isRequired,
};
