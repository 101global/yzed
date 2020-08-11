import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../../../utilities/context/UserContext';

const VerifyEmail = ({ user }) => {
  const [emailSent, setEmailSent] = useState(false);
  const { requestEmailVerification } = useContext(UserContext);
  return (
    <div className='py-12 pt-8 border-t-2 border-lightGrey w-full'>
      {emailSent ? (
        <p className='text-center text-sm mb-4 w-formArea'>
          An email has been sent to {user.email}. Please follow the instructions to verify your
          email address.
        </p>
      ) : (
        <>
          <p className='text-center text-sm lg:text-base mb-4 w-formArea mx-auto'>
            OOPS! You still didn’t verify your email address!
          </p>
          <button
            onClick={() => {
              requestEmailVerification();
              setEmailSent(true);
            }}
            className='mx-auto flex items-center justify-center rounded-md h-formButton w-formButton text-white bg-aqua text-center text-sm'>
            VERIFY EMAIL
          </button>
        </>
      )}
    </div>
  );
};

export default VerifyEmail;
