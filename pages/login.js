import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../utilities/context/UserContext';

const login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { user, requestLogin } = useContext(UserContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        requestLogin(username, password);
      }}
      className='bg-black flex flex-col justify-center items-center'>
      <input
        className='text-white bg-black border-aqua border'
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
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
  );
};

export default login;
