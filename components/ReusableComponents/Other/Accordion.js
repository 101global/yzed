import React, { useEffect, useContext, useState } from 'react';

const Accordion = ({ children, open, setOpen }) => {
  return (
    <>
      <div className='accordion-container'>{children}</div>
      <style jsx>{`
        .accordion-container {
          max-height: ${open ? '500px' : '0px'};
          overflow: ${open ? 'auto' : 'hidden'};
          transition: all 0.5s ease-in;
        }
      `}</style>
    </>
  );
};

export default Accordion;
