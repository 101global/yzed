import React, { useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import theme from '../../utilities/theme';

const WhiteLink = ({ title, link }) => {
  return (
    <>
      <a
        href={link}
        target='_blank'
        className='white-link w-full inline-block py-2 px-4 bg-white text-black border border-white text-base text-center rounded-full no-underline tracking-wider font-medium hover:text-white hover:bg-black '
        rel='noopener noreferrer'>
        {title}
      </a>
      <style jsx>{`
        a.white-link {
          transition: all 0.4s ease;
          width: 384px;
          max-width: 90%;
          letter-spacing: 0.3em;
        }
        a.white-link:hover {
          transition: all 0.4s ease;
        }
      `}</style>
    </>
  );
};

export default WhiteLink;

WhiteLink.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
