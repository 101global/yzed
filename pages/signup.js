import React, { useContext, useEffect, useState } from 'react';

import LoadingSpinner from '../components/ReusableComponents/Loading/LoadingSpinner';
import { UserContext } from '../utilities/context/UserContext';
import UserNavigation from '../components/ReusableComponents/Navigation/UserNavigation';
import { useRouter } from 'next/router';
import GoogleSignup from '../components/ReusableComponents/Buttons/GoogleSignup';
import { signupStates } from '../utilities/enums';
import FacebookSignup from '../components/ReusableComponents/Buttons/FBSignup';
import FormError from '../components/ReusableComponents/Errors/FormError';
import Link from 'next/link';

const signup = ({ user }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const { userError, requestEmailSignup, signupStatus, updateUsername } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    // if (user.loggedIn) {
    //   router.push('/experience/1');
    // }
  }, [user]);

  return (
    <>
      <UserNavigation user={user} />
      <div className='min-h-screen grid grid-cols-1 bg-black justify-center items-center px-64'>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
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
            className='login-input border-purple border'
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
            className='login-input border-aqua border'
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            required
            value={password}
            placeholder='Password'
            className='login-input border-purple border'
            type='password'
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input
            required
            value={confirmPassword}
            placeholder='Confirm Password'
            className='login-input border-aqua border'
            type='password'
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
          <button className='black-button hover:text-black hover:bg-white' type='submit'>
            Sign Up
          </button>
        </form>
        {(userError || error) && <FormError message={userError || error} />}
        <div>
          <GoogleSignup />
          <FacebookSignup />
        </div>
        <Link href='/login'>
          <a className='text-center text-white'>Already a member?</a>
        </Link>
      </div>
      <style jsx>{`
        form,
        .username {
          padding: 100px 0;
        }
      `}</style>
    </>
  );
};

export default signup;
