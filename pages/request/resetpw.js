import React, { useContext, useEffect, useState } from 'react';

import FormError from '../../components/ReusableComponents/Errors/FormError';
import Link from 'next/link';
import LoadingBars from '../../components/ReusableComponents/Loading/LoadingBars';
import LoadingSpinner from '../../components/ReusableComponents/Loading/LoadingSpinner';
import { UserContext } from '../../utilities/context/UserContext';
import { strongRegex } from '../../utilities/validation';
import { useRouter } from 'next/router';
import Tooltip from '../../components/ReusableComponents/Other/Tooltip';
import UserFormLayout from '../../components/ReusableComponents/Layouts/UserFormLayout';
import SquareFilledLink from '../../components/ReusableComponents/Links/SquareFilledLink';

const resetpw = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [validPassword, setValidPassword] = useState(false);

  const { resetPassword, userError, setUserError, userLoading } = useContext(UserContext);

  const router = useRouter();

  const { oobCode } = router.query;

  return (
    <UserFormLayout>
      <div className='flex flex-col justify-start items-center mx-auto'>
        {success ? (
          <LoadingBars
            text='Password has been successfully reset. Logging you in now.  You will be redirected shortly.'
            color='white'
          />
        ) : userError ? (
          <>
            <h1 className='text-xl lg:text-2x pb-8 text-center'>Oops! Something went wrong.</h1>
            <p className='text-xs lg:text-base pb-16 text-center'>{userError.message}</p>
            <SquareFilledLink href='/request/password' text='RESEND EMAIL' />
          </>
        ) : (
          <>
            <h1 className='text-xl lg:text-2x pb-8 text-center'>RESET PASSWORD</h1>
            <p className='text-xs lg:text-base pb-16 text-center'>
              Welcome back! only one step left. Enter your new password and enjoy YZED once more!
            </p>
            <form
              onSubmit={(e) => {
                setLoading(true);
                e.preventDefault();
                if (strongRegex.test(password) && password === confirmPassword) {
                  console.log(password);
                  resetPassword(password, oobCode, setSuccess);
                } else {
                  setError('Check that password is valid.');
                  setLoading(false);
                }
              }}>
              <label
                htmlFor='password'
                className='login-input-label dark:text-lightGrey relative w-full block'>
                Password
                <Tooltip message='Password must be between 8-32 characters, contain at least one lowercase letter, one uppercase letter, one number, and one symbol.' />
              </label>
              <div className='password-message w-full text-left'>
                {password ? (
                  strongRegex.test(password) ? (
                    <p className='text-xxs text-success'>Password Strength OK.</p>
                  ) : (
                    <p className='text-xxs text-danger'>Password is not strong enough.</p>
                  )
                ) : null}
              </div>
              <input
                id='password'
                name='password'
                required
                value={password}
                className='login-input dark:border-white mb-8'
                type='password'
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <label htmlFor='confirmPassword' className='login-input-label dark:text-lightGrey'>
                Confirm Password
              </label>
              <div className='password-message w-full text-left'>
                {confirmPassword ? (
                  password === confirmPassword ? (
                    <p className='text-xxs text-success'>Passwords Match.</p>
                  ) : (
                    <p className='text-xxs text-danger'>Passwords Do Not Match</p>
                  )
                ) : null}
              </div>
              <input
                id='confirmPassword'
                name='password confirmation'
                required
                value={confirmPassword}
                className='login-input dark:border-white mb-16'
                type='password'
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
              />
              <button
                disabled={!password || password !== confirmPassword}
                className='filled-button-light dark:bg-white dark:text-black relative'
                type='submit'
                required>
                {userLoading ? 'RESETTING PASSWORD' : 'RESET PASSWORD'}
              </button>
            </form>

            {userError && (
              <p className='text-xs lg:text-base pt-8 text-center'>{userError.error}</p>
            )}
          </>
        )}
      </div>
      <style jsx>{`
        .password-message {
          min-height: 0.8rem;
        }
        .filled-button-light:disabled {
          opacity: 0.7;
        }
      `}</style>
    </UserFormLayout>
  );
};

export default resetpw;
