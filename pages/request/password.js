import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../utilities/context/UserContext';
import FormError from '../../components/ReusableComponents/Errors/FormError';
import UserFormLayout from '../../components/ReusableComponents/Layouts/UserFormLayout';
import LoadingFillIcon from '../../components/ReusableComponents/Loading/LoadingFillIcon';
import InlineFormError from '../../components/ReusableComponents/Errors/InlineFormError';

const password = () => {
  const [email, setEmail] = useState('');
  const { requestForgottenPasswordEmail, userError, userLoading } = useContext(UserContext);
  const [success, setSuccess] = useState(false);

  return (
    <>
      <UserFormLayout>
        <div className='flex flex-col justify-start items-center mx-auto w-formArea'>
          {success ? (
            <>
              <h1 className='text-xl lg:text-2x pb-8 text-center'>Your email is on it's way!</h1>
              <p className='text-xs lg:text-base pb-8 text-center'>
                Check your email and follow the directions. You may close this tab after following
                the password reset instructions.
              </p>
            </>
          ) : (
            <>
              <h1 className='text-xl lg:text-2x pb-8 text-center'>
                Did you forget your password? Don't worry!
              </h1>
              <p className='text-xs lg:text-sm pb-12 text-center'>
                Enter the email address for your account. If an account associated with the entered
                email address exists, you will shortly receive an email with directions to reset
                your password.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  requestForgottenPasswordEmail(email, setSuccess);
                }}>
                <label
                  htmlFor='email'
                  className='login-input-label dark:text-lightGrey relative text-left'>
                  Email
                </label>
                <InlineFormError
                  error={userError}
                  code='auth/user-not-found'
                  message='No account found for that email'
                />
                <input
                  aria-label='email'
                  placeholder='Email Address'
                  name='email'
                  type='email'
                  value={email}
                  required
                  className='login-input dark:border-white mb-12'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  disabled={!email.length}
                  className='filled-button-light dark:bg-white dark:text-black relative disabled:opacity-75'
                  type='submit'
                  required>
                  {userLoading ? 'SENDING RESET EMAIL' : 'SEND RESET EMAIL'}
                </button>
              </form>
            </>
          )}
          {userLoading ? <LoadingFillIcon /> : null}
        </div>
      </UserFormLayout>

      <style jsx>{`
        .filled-button-light:disabled {
          opacity: 0.7;
        }
        input {
          border-radius: 0;
          -webkit-appearance: none;
        }
      `}</style>
    </>
  );
};

export default password;
