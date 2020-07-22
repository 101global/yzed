import React, { useContext, useEffect, useState } from 'react';

import ExpandIcon from '../../ReusableComponents/Icons/Expand';
import HideIcon from '../../ReusableComponents/Icons/Hide';
import PauseIcon from '../../ReusableComponents/Icons/Pause';
import PlayIcon from '../../ReusableComponents/Icons/Play';
import dynamic from 'next/dynamic';
import theme from '../../../utilities/theme';

const BrandModelControls = ({ model }) => {
  console.log(model);
  const [modelState, setModelState] = useState('IMAGE');

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
      <div>
        <div className='viewer-container relative'>
          <button
            className='show-hide absolute'
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
          {modelState === 'IMAGE' && <h2>Image</h2>}
          {modelState === 'WALK' && <AnimatedModelViewer model={model} />}
          {modelState !== 'IMAGE' && (
            <button
              className='play-pause absolute'
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
      </div>
      <style jsx>{`
        .viewer-container {
          width: calc(50% - 150px - 2rem);
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
