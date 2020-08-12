import React, { useContext, useEffect, useState } from 'react';

import FBLogin from '../../ReusableComponents/Buttons/FBLogin';
import FormError from '../../ReusableComponents/Errors/FormError';
import GoogleLogin from '../../ReusableComponents/Buttons/GoogleLogin';
import InlineFormError from '../../ReusableComponents/Errors/InlineFormError';
import Link from 'next/link';
import LoadingBars from '../../ReusableComponents/Loading/LoadingBars';
import LoadingButtonDots from '../../ReusableComponents/Loading/LoadingButtonDots';
import LoadingFillIcon from '../../ReusableComponents/Loading/LoadingFillIcon';
import { UserContext } from '../../../utilities/context/UserContext';
import UserFormLayout from '../../ReusableComponents/Layouts/UserFormLayout';
import theme from '../../../utilities/theme';
import { useRouter } from 'next/router';

const LoginLayout = ({ user }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    userError,
    requestEmailLogin,
    userLoading,
    requestFbLogin,
    requestGoogleLogin,
  } = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, []);

  return (
    <>
      {user ? (
        <UserFormLayout title="YZED - Login">
          <LoadingBars text='You are logged in.  Redirecting you home.' />
        </UserFormLayout>
      ) : (
        <UserFormLayout title="YZED - Login">
          <div className='grid grid-cols-1 mx-auto w-full'>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                await requestEmailLogin(email, password);
              }}
              className='flex flex-col justify-start items-center mx-auto w-formArea'>
              <label htmlFor='email' className='login-input-label dark:text-lightGrey'>
                Email
              </label>
              <InlineFormError
                error={userError}
                code='auth/user-not-found'
                message='Email not found. Please check again.'
              />
              <input
                required
                id='email'
                name='email'
                value={email}
                type='email'
                className='login-input dark:border-white mb-8'
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <label htmlFor='password' className='login-input-label dark:text-lightGrey'>
                Password
              </label>
              <InlineFormError
                error={userError}
                code='auth/wrong-password'
                message='Password is incorrect. Please check again.'
              />
              <input
                required
                id='password'
                name='password'
                value={password}
                className='login-input dark:border-white mb-16'
                type='password'
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <button
                disabled={!email.length || !password.length}
                className='filled-button-light dark:bg-white dark:text-black relative'
                type='submit'
                required>
                {userLoading ? 'LOGGING IN' : 'LOG IN'}
              </button>
              <Link href='/request/password'>
                <a className='w-full block text-xs font-semibold text-left mb-20 mt-2'>
                  Forgot your password?
                </a>
              </Link>
            </form>
            <div className='pb-12'>
              <GoogleLogin loginFunction={requestGoogleLogin} />
              <FBLogin loginFunction={requestFbLogin} />
            </div>
            <div className='py-12 pt-8 border-t-2 border-lightGrey'>
              <p className='text-center text-sm'>I'm a new user!</p>
              <Link href='/signup/form'>
                <a className='mx-auto border-black dark:border-white border flex items-center justify-center rounded-md h-formButton w-formButton text-black dark:text-white bg-transparent text-center text-sm my-4'>
                  Create Account
                </a>
              </Link>
              <p className='text-center text-xxs text-mediumGrey dark:text-lightGrey'>
                Creating an account is fast, easy, and free.
              </p>
            </div>
          </div>
          {userLoading ? <LoadingFillIcon /> : null}
        </UserFormLayout>
      )}
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

export default LoginLayout;
