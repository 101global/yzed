import React, { useContext, useEffect, useState } from 'react';

import FormError from '../components/ReusableComponents/Errors/FormError';
import LoadingSpinner from '../components/ReusableComponents/Loading/LoadingSpinner';
import { UserContext } from '../utilities/context/UserContext';
import UserNavigation from '../components/ReusableComponents/Navigation/UserNavigation';
import { useRouter } from 'next/router';

const signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const { user, userError, requestEmailSignup } = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    // if (user.loggedIn) {
    //   router.push('/experience/1');
    // }
  }, [user]);

  return (
    <>
      <UserNavigation />
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log('CLICK');
          if (password === confirmPassword) {
            await requestEmailSignup(email, password, username, '/experience/1');
          } else {
            setError('Passwords do not match.');
          }
        }}
        className='bg-black flex flex-col justify-center items-center'>
        <input
          required
          value={email}
          placeholder='Email'
          type='email'
          className='text-white bg-black border-purple border'
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          required
          value={username}
          placeholder='Username'
          type='text'
          maxLength='18'
          className='text-white bg-black border-aqua border'
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          required
          value={password}
          placeholder='Password'
          className='text-white bg-black border-aqua border'
          type='password'
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          required
          value={confirmPassword}
          placeholder='Confirm Password'
          className='text-white bg-black border-purple border'
          type='password'
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        <button className='text-white' type='submit'>
          Sign Up
        </button>
      </form>
      {userError || (error && <FormError message={userError || error} />)}
      <style jsx>{`
        form {
          padding: 100px 0;
        }
      `}</style>
    </>
  );
};

export default signup;
