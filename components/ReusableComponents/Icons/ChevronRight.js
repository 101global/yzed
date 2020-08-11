import React, { useEffect, useContext, useState } from 'react';
import theme from '../../../utilities/theme';

const ChevronRight = ({ styleClass }) => {
  return (
    <svg
      width='7'
      height='11'
      viewBox='0 0 7 11'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${styleClass} chevron-right`}>
      <path d='M1 1L5.84615 5.84615L1 10' stroke={theme.colors.black} />
    </svg>
  );
};

export default ChevronRight;
