import React, { useEffect, useContext, useState } from 'react';

const InlineFormError = ({ error, code, message }) => {
  return (
    <>
      <div className='error-message w-full text-left'>
        {error && error.code === code ? <p className='text-xxs text-danger'>{message}</p> : null}
      </div>
      <style jsx>{`
        .error-message {
          min-height: 0.7rem;
        }
      `}</style>
    </>
  );
};

export default InlineFormError;
