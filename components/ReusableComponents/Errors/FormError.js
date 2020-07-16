import PropTypes from 'prop-types';
import React, { useEffect, useContext, useState } from 'react';
import theme from '../../../utilities/theme';
import { UserContext } from '../../../utilities/context/UserContext';

const FormError = ({ message, localErrorCallback, canClose = true }) => {
  const { setUserError } = useContext(UserContext);

  const closeErrors = () => {
    setUserError(null);
    if (localErrorCallback) {
      localErrorCallback(null);
    }
  };
  return (
    <>
      <div className='mt-4'>
        <div className='error-message-wrapper my-0 mx-auto p-1 relative text-center'>
          <div className='error-message p-8'>
            {canClose && (
              <button
                aria-label='close error'
                onClick={() => {
                  closeErrors();
                }}>
                X
              </button>
            )}
            <div className='placeholder' />
            <h3 className='font-light text-lg'>Oops!</h3>
            <p className='font-light text-base'>{message}</p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .error-message-wrapper {
            max-width: 400px;
            background: linear-gradient(to bottom, ${theme.colors.aqua}, ${theme.colors.purple});
          }
          .error-message {
            background: ${theme.colors.black};
            color: ${theme.colors.white};
          }
          .error-message p {
            padding-top: 20px;
          }
          button {
            background: -webkit-linear-gradient(${theme.colors.aqua}, ${theme.colors.purple});
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            position: absolute;
            top: 8px;
            right: 10px;
          }
        `}
      </style>
    </>
  );
};

export default FormError;
FormError.propTypes = {
  message: PropTypes.string.isRequired,
  localErrorCallback: PropTypes.func,
  isClosable: PropTypes.bool,
};
