import React, { useEffect, useContext, useState } from 'react';
import theme from '../../../utilities/theme';

const Accordion = ({ children, open, setOpen }) => {
  return (
    <>
      <div className='accordion-container'>{children}</div>
      <style jsx>{`
        .accordion-container {
          max-height: ${open ? '500px' : '0px'};
          overflow: ${open ? 'auto' : 'hidden'};
          transition: all 0.5s ease-in;
          border-top: ${open && `2px solid ${theme.colors.borderGrey}`};
        }
      `}</style>
    </>
  );
};

export default Accordion;
