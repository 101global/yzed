import React, { useContext, useEffect, useState } from 'react';

import Link from 'next/link';

import LoadingSpinner from '../../ReusableComponents/Loading/LoadingSpinner';

import { strongRegex } from '../../../utilities/validation';

import { useRouter } from 'next/router';
import Tooltip from '../../ReusableComponents/Other/Tooltip';
import UserFormLayout from '../../ReusableComponents/Layouts/UserFormLayout';

import LoadingFillIcon from '../../ReusableComponents/Loading/LoadingFillIcon';
import LoadingBars from '../../ReusableComponents/Loading/LoadingBars';
import { UserContext } from '../../../utilities/context/UserContext';

const UpdatePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [validPassword, setValidPassword] = useState(false);

  const { resetPassword, userError, setUserError, userLoading } = useContext(UserContext);

  return (
    <>
      <div className='flex flex-col justify-start items-center mx-auto p-4 py-8'>
        {success ? (
          <p>Password had been updated</p>
        ) : userError ? (
          <>
            <h1 className='text-xl lg:text-2x pb-8 text-center'>Oops! Something went wrong.</h1>
            <p className='text-xs lg:text-base pb-16 text-center'>{userError.message}</p>
          </>
        ) : (
          <>
            <form
              className='w-formArea'
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
              <label
                htmlFor='confirmPassword'
                className='login-input-label dark:text-lightGrey text-left w-full block'>
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
                className='login-input dark:border-white mb-8'
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
    </>
  );
};

export default UpdatePassword;
