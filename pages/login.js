import React, { useContext, useEffect, useState } from 'react';

import FBLogin from '../components/ReusableComponents/Buttons/FBLogin';
import FormError from '../components/ReusableComponents/Errors/FormError';
import GoogleLogin from '../components/ReusableComponents/Buttons/GoogleLogin';
import Link from 'next/link';
import LoadingSpinner from '../components/ReusableComponents/Loading/LoadingSpinner';
import { UserContext } from '../utilities/context/UserContext';
import UserNavigation from '../components/ReusableComponents/Navigation/UserNavigation';
import { useRouter } from 'next/router';

const login = ({ user }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { userError, requestEmailLogin, userLoading } = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/experience/1');
    }
  }, []);

  return (
    <>
      <UserNavigation user={user} />
      <div className='min-h-screen flex flex-col bg-black justify-center items-center px-64'>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await requestEmailLogin(email, password);
          }}
          className='bg-black flex flex-col justify-center items-center'>
          <input
            value={email}
            placeholder='Email'
            type='email'
            className='login-input border-purple border'
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            value={password}
            placeholder='Password'
            className='login-input border-aqua border'
            type='password'
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button className='black-button hover:text-black hover:bg-white' type='submit'>
            {userLoading ? 'Logging In' : 'Log In'}
          </button>
          <Link href='/request/password'>
            <a className='text-center text-white mt-8'>Forgot Password?</a>
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
      <style jsx>{`
        form {
          padding: 100px 0 0;
        }
      `}</style>
    </>
  );
};

export default login;
