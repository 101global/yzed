import React, { useEffect, useContext, useState } from 'react';
import theme from '../../../utilities/theme';

const FormError = ({ message }) => {
  return (
    <>
      <div className='error-message-wrapper'>
        <div className='error-message'>
          <h3>Oops! Something went wrong.</h3>
          <p>{message}</p>
        </div>
      </div>
      <style jsx>
        {`
          .error-message-wrapper {
            margin: 0 auto;
            max-width: 300px;
            padding: 1rem;
            position: relative;
            background: linear-gradient(to bottom, ${theme.colors.aqua}, ${theme.colors.purple});
            padding: 4px;
          }
          .error-message {
            background: ${theme.colors.black};
            color: ${theme.colors.white};
            padding: 2rem;
          }
        `}
      </style>
    </>
  );
};

export default FormError;
