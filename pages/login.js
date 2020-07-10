import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../utilities/context/UserContext';
import UserNavigation from '../components/ReusableComponents/Navigation/UserNavigation';
import LoadingSpinner from '../components/ReusableComponents/Loading/LoadingSpinner';
import { useRouter } from 'next/router';
import FormError from '../components/ReusableComponents/Errors/FormError';

const login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { user, requestLogin } = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    console.log(user);
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
          await requestLogin(username, password);
          if (user.isLoggedIn) {
            router.push('/experience/1');
          }
        }}
        className='bg-black flex flex-col justify-center items-center'>
        <input
          placeholder='Email'
          type='text'
          className='text-white bg-black border-purple border'
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
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
      <FormError message='Something is not right' />
      <style jsx>{`
        form {
          padding: 100px 0;
        }
      `}</style>
    </>
  );
};

export default login;
