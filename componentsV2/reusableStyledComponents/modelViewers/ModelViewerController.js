import React, { useContext, useEffect, useState } from 'react';

import AnimatedModelViewer from './AnimatedModelViewer';
import PropTypes from 'prop-types';
import StationaryModelViewer from './StationaryModelViewer';
import SwitchSelector from 'react-switch-selector';
import theme from '../../../utilities/theme';

const ModelViewerController = ({ model, lightModeModelView, setLightModeModelView }) => {
  const [showAnimated, setShowAnimated] = useState(false);
  const options = [
    {
      label: 'Stationary',
      value: false,
    },
    {
      label: 'Walking',
      value: true,
    },
  ];

  const onChange = (newValue) => {
    setShowAnimated(newValue);
  };
  return (
    <>
      <div className='control-container'>
        <div className='controls-section'>
          <div className='controls'>
            <div className='toggle-animated-buttons'>
              <SwitchSelector
                onChange={onChange}
                options={options}
                initialSelectedIndex={0}
                backgroundColor={'#0d0d0d'}
                fontColor={'#fff'}
                selectedFontColor={'#0d0d0d'}
                selectedBackgroundColor={'#fff'}
              />
            </div>

            <div className='dark-light-buttons'>
              <div className='toggle-button-container'>
                <button
                  className={
                    !lightModeModelView ? 'toggle-light-button filled' : 'toggle-light-button'
                  }
                  onClick={() => setLightModeModelView(false)}
                  aria-label='Toggle Dark'
                />
                <p>Dark</p>
              </div>
              <div className='toggle-button-container'>
                <button
                  className={
                    lightModeModelView ? 'toggle-light-button filled' : 'toggle-light-button'
                  }
                  onClick={() => setLightModeModelView(true)}
                  aria-label='Toggle Light'
                />
                <p>Light</p>
              </div>
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
          width: 80%;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .control-container {
          height: 90%;
          width: 100%;
          display: flex;
        }
        .controls-section {
        }
        .controls {
          display: inline-block;
          flex-direction: column;
          justify-content: space-between;
          align-items: left;
          position: absolute;
          top: 10vh;
          right: 10vw;
          z-index: 1000;
          background: transparent;
          color: ${lightModeModelView ? theme.colors.black : theme.colors.white};
        }
        .toggle-button-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
        .dark-light-buttons {
          width: 170px;
          margin-top: 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .toggle-animated-buttons {
          height: 30px;
          width: 250px;
        }
        button,
        p {
          display: inline;
        }
        p {
          font-weight: 100;
          margin: 0;
        }
        .toggle-light-button {
          border-radius: 15px;
          height: 30px;
          width: 30px;
          background: ${theme.colors.black};
          border: 1px solid ${theme.colors.white};
          margin-right: 5px;
          box-shadow: 0 0 1px 1px white;
        }
        .filled {
          border: 1px solid ${theme.colors.black};
          background: ${theme.colors.white};
          color: ${theme.colors.black};
          box-shadow: inset 0 0 0 2px ${theme.colors.white}, inset 0 0 0 4px ${theme.colors.black};
        }
        @media (max-width: 640px) {
          .dark-light-buttons {
            min-height: 102px;
            justify-content: space-around;
          }
          .controls {
            height: 100px;
            flex-direction: column;
            justify-content: flex-end;
            bottom: 0px;
            top: calc(100% + 20px);
            margin-bottom: 100px;
          }
          .viewer-container {
            margin-bottom: 100px;
          }
        }
      `}</style>
      <style jsx global>{`
        .react-switch-selector-wrapper {
          border: 1px solid white !important;
          box-shadow: 0 0 1px 1px white;
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
