import React, { useContext, useEffect, useState } from 'react';

import ExpandIcon from '../../ReusableComponents/Icons/Expand';
import HideIcon from '../../ReusableComponents/Icons/Hide';
import PauseIcon from '../../ReusableComponents/Icons/Pause';
import PlayIcon from '../../ReusableComponents/Icons/Play';
import Slider from '../../ReusableComponents/Images/VerticalSlider';
import dynamic from 'next/dynamic';
import theme from '../../../utilities/theme';

const BrandModelControls = ({ model }) => {
  const [modelState, setModelState] = useState('STILL');

  const StationaryModelViewer = dynamic(
    () => import('../../ReusableComponents/ModelViewers/StationaryModelViewer.js'),
    {
      ssr: false,
    }
  );

  const AnimatedModelViewer = dynamic(
    () => import('../../ReusableComponents/ModelViewers/AnimatedModelViewer.js'),
    {
      ssr: false,
    }
  );

  return (
    <>
      <div className='viewer-container relative w-full mr-0 lg:w-floatScroll h-vh80 lg:h-vh70'>
        <button
          aria-label={modelState === 'IMAGE' ? 'show model' : 'hide model'}
          className='show-hide absolute p-1'
          onClick={() => {
            if (modelState === 'IMAGE') {
              setModelState('STILL');
            } else {
              setModelState('IMAGE');
            }
          }}>
          {modelState === 'IMAGE' ? (
            <div className='flex flex-row justify-center items-center'>
              <ExpandIcon styleClass='control-icon expand' />
              <p className='ml-2 font-light text-sm tracking-wide'>Show 3D</p>
            </div>
          ) : (
            <HideIcon styleClass='control-icon hide' />
          )}
        </button>
        {modelState === 'STILL' && <StationaryModelViewer model={model} />}
        {modelState === 'IMAGE' && <Slider model={model} />}
        {modelState === 'WALK' && <AnimatedModelViewer model={model} />}
        {modelState !== 'IMAGE' && (
          <button
            aria-label={modelState === 'STILL' ? 'show animated model' : 'show stationary model'}
            className='play-pause absolute p-1'
            onClick={() => {
              if (modelState === 'STILL') {
                setModelState('WALK');
              }
              if (modelState === 'WALK') {
                setModelState('STILL');
              }
            }}>
            {modelState === 'WALK' ? (
              <div className='flex flex-row justify-center items-center'>
                <PauseIcon styleClass='control-icon pause' />
                <p className='ml-2 font-light text-sm tracking-wide'>Stationary</p>
              </div>
            ) : (
              <div className='flex flex-row justify-center items-center'>
                <PlayIcon styleClass='control-icon play' />
                <p className='ml-2 font-light text-sm tracking-wide'>Walking</p>
              </div>
            )}
          </button>
        )}
      </div>
      <style jsx>{`
        .viewer-container {
          height: 70vh;
        }
        .play-pause {
          transform: translateY(-100%);
          z-index: 700;
        }
        .show-hide {
          z-index: 700;
        }
      `}</style>
      <style jsx global>{`
        .dark-mode svg.control-icon path {
          fill: ${theme.colors.white};
        }
        .dark-mode svg.control-icon path.opposite-fill {
          fill: ${theme.colors.black};
          stroke: ${theme.colors.white};
        }
        .dark-mode svg.control-icon path.stroke-fill {
          stroke: ${theme.colors.white};
        }
        .light-mode svg.control-icon path {
          fill: ${theme.colors.black};
        }
        .light-mode svg.control-icon path.opposite-fill {
          fill: ${theme.colors.white};
          stroke: ${theme.colors.black};
        }
        .light-mode svg.control-icon path.stroke-fill {
          stroke: ${theme.colors.black};
        }
      `}</style>
    </>
  );
};

export default BrandModelControls;
