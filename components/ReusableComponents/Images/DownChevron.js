import React, { useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import theme from '../../../utilities/theme';

const DownChevron = ({ topModelDark }) => {
  return (
    <>
      <svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 1000 1000'
        enableBackground='new 0 0 1000 1000'
        className='down-chevron model-chevron block'>
        <g>
          <path
            fill={topModelDark ? theme.colors.white : theme.colors.black}
            d='M500,757.8L10,271.5l29.3-29.3L500,706.6l460.7-464.4l29.3,29.3L500,757.8z'
          />
        </g>
      </svg>
      <style jsx>{`
        .model-chevron {
          height: 30px;
          position: absolute;
          bottom: 20px;
          z-index: 501;
          left: calc(50% - 15px);
        }
      `}</style>
    </>
  );
};

export default DownChevron;

DownChevron.propTypes = {
  topModelDark: PropTypes.bool.isRequired,
};
