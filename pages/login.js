import React, { useContext, useEffect, useState } from 'react';

import FormError from '../components/ReusableComponents/Errors/FormError';
import LoadingSpinner from '../components/ReusableComponents/Loading/LoadingSpinner';
import { UserContext } from '../utilities/context/UserContext';
import UserNavigation from '../components/ReusableComponents/Navigation/UserNavigation';
import { useRouter } from 'next/router';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, userError, requestLogin } = useContext(UserContext);

  const router = useRouter();

  const pushLoggedIn = () => {
    router.push('/experience/1');
  };

  useEffect(() => {
    if (user.loggedIn) {
      router.push('/experience/1');
    }
  }, [user]);

  return (
    <>
      <UserNavigation />
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await requestLogin(email, password, pushLoggedIn);
        }}
        className='bg-black flex flex-col justify-center items-center'>
        <input
          value={email}
          placeholder='Email'
          type='email'
          className='text-white bg-black border-purple border'
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          value={password}
          placeholder='Password'
          className='text-white bg-black border-aqua border'
          type='password'
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button className='text-white' type='submit'>
          Login
        </button>
      </form>
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
