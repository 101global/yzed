import React, { useContext, useEffect, useState } from 'react';

import theme from '../../utilities/theme';

const BlackLink = ({ title, link }) => {
  return (
    <>
      <a
        href={link}
        target='_blank'
        className='black-link block lg:inline m-auto lg:m-0 py-2 bg-black text-white border border-black text-xl text-center rounded-full no-underline tracking-wider font-medium hover:text-black hover:bg-white'
        rel='noopener noreferrer'>
        {title}
      </a>
      <style jsx>{`
        a.black-link {
          transition: all 0.4s ease;
          width: 384px;
          max-width: 90%;
        }
        a.black-link:hover {
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default BlackLink;
