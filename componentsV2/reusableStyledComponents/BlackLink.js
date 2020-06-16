import React, { useContext, useEffect, useState } from 'react';

import theme from '../../utilities/theme';

const BlackLink = ({ title, link }) => {
  return (
    <>
      <a href={link} target='_blank' className='black-link' rel='noopener noreferrer'>
        {title}
      </a>
      <style jsx>{`
        a.black-link {
          display: block;
          background-color: ${theme.colors.black};
          color: ${theme.colors.white};
          text-decoration: none;
          padding: 10px 0;
          border-radius: 25px;
          border: 1px solid ${theme.colors.black};
          transition: all 0.4s ease;
          width: 384px;
          font-size: ${theme.fontSizes.pSizeDesktop};
          text-align: center;
          margin-top: 50px;
        }
        a {
          letter-spacing: 0.2em;
          font-weight: ${theme.fontWeights.medium};
        }
        a.black-link:hover {
          background-color: ${theme.colors.white};
          color: ${theme.colors.black};
          transition: all 0.3s ease;
          border-color: ${theme.colors.black};
        }
      `}</style>
    </>
  );
};

export default BlackLink;
