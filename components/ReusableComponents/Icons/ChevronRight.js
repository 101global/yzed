import React, { useEffect, useContext, useState } from 'react';
import theme from '../../../utilities/theme';

const ChevronRight = ({ styleClass }) => {
  return (
    <>
      <svg
        width='7'
        height='11'
        viewBox='0 0 7 11'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={`${styleClass} chevron-right`}>
        <path d='M1 1L5.84615 5.84615L1 10' />
      </svg>
      <style jsx global>{`
        .dark-mode .chevron-right {
          stroke: ${theme.colors.white};
        }
        .light-mode .chevron-right {
          stroke: ${theme.colors.black};
        }
      `}</style>
    </>
  );
};

export default ChevronRight;
