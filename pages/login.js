import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../utilities/context/UserContext';
import UserNavigation from '../components/ReusableComponents/Navigation/UserNavigation';
import LoadingSpinner from '../components/ReusableComponents/Loading/LoadingSpinner';

const login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { user, requestLogin } = useContext(UserContext);

  return (
    <>
      <UserNavigation />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestLogin(username, password);
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
      <LoadingSpinner />
      <style jsx>{`
        form {
          padding: 100px 0;
        }
      `}</style>
    </>
  );
};

export default login;
