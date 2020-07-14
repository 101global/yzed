import React, { useContext, useEffect, useState } from 'react';

import FormError from '../components/ReusableComponents/Errors/FormError';
import LoadingSpinner from '../components/ReusableComponents/Loading/LoadingSpinner';
import { UserContext } from '../utilities/context/UserContext';
import UserNavigation from '../components/ReusableComponents/Navigation/UserNavigation';
import { useRouter } from 'next/router';
import GoogleLogin from '../components/ReusableComponents/Buttons/GoogleLogin';
import FBLogin from '../components/ReusableComponents/Buttons/FBLogin';
import Link from 'next/link';

const login = ({ user }) => {
  console.log('LOGIN USER', user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { userError, requestEmailLogin } = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {}, [user]);

  return (
    <>
      <UserNavigation user={user} />
      <div className='min-h-screen grid grid-cols-1 bg-black justify-center items-center px-64'>
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
            Login
          </button>
        </form>
        <div>
          <GoogleLogin />
          <FBLogin />
        </div>
        <Link href='/signup'>
          <a className='text-center text-white'>Not yet a member?</a>
        </Link>
      </div>
      {userError && <FormError message={userError} />}
      <style jsx>{`
        form {
          padding: 100px 0;
        }
      `}</style>
    </>
  );
};

export default login;
