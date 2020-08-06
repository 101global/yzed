import React, { useContext, useEffect, useState } from 'react';

import FBLogin from '../../ReusableComponents/Buttons/FBLogin';
import FormError from '../../ReusableComponents/Errors/FormError';
import GoogleLogin from '../../ReusableComponents/Buttons/GoogleLogin';
import Link from 'next/link';
import LoadingBars from '../../ReusableComponents/Loading/LoadingBars';
import LoadingSpinner from '../../ReusableComponents/Loading/LoadingSpinner';
import { UserContext } from '../../../utilities/context/UserContext';
import UserFormLayout from '../../ReusableComponents/Layouts/UserFormLayout';
import theme from '../../../utilities/theme';
import { useRouter } from 'next/router';

const LoginLayout = ({ user }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { userError, requestEmailLogin, userLoading } = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, []);

  return (
    <>
      {user ? (
        <div className='full-page-centered-content'>
          <LoadingBars text='You are logged in.  Redirecting you home.' />
        </div>
      ) : (
        <UserFormLayout>
          <div className='grid grid-cols-1 mx-auto'>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                await requestEmailLogin(email, password);
              }}
              className='flex flex-col justify-start items-center'>
              <label htmlFor='email' className='login-input-label'>
                Email
              </label>
              <input
                name='email'
                value={email}
                type='email'
                className='login-input dark:border-white mb-8'
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <label htmlFor='password' className='login-input-label'>
                Password
              </label>
              <input
                name='password'
                value={password}
                className='login-input dark:border-white mb-16'
                type='password'
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <button
                disabled={!email.length}
                className='filled-button-light dark:bg-white dark:text-black relative'
                type='submit'>
                {userLoading ? 'Logging In' : 'Log In'}
              </button>
              <Link href='/request/password'>
                <a className='w-full block text-xs font-semibold text-left mb-20 mt-4'>
                  Forgot your password?
                </a>
              </Link>
            </form>
            <div>
              <GoogleLogin />
              <FBLogin />
            </div>
            <div className='mx-auto'>
              {userLoading && <LoadingSpinner color='white' text='Checking User Credentials' />}
            </div>
            {userError && <FormError message={userError} />}
            <Link href='/signup/form'>
              <a className='text-center text-white'>Not yet a member?</a>
            </Link>
          </div>
        </UserFormLayout>
      )}
      <style jsx>{`
        .filled-button-light:disabled {
          background: ${theme.colors.mediumGrey};
          color: ${theme.colors.white};
        }
        .grid-cols-1 {
          max-width: 400px;
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
