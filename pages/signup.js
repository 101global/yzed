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
import { strongRegex } from '../utilities/validation';

const signup = ({ user }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const { userError, userLoading, requestEmailSignup } = useContext(UserContext);
  const router = useRouter();

  return (
    <>
      <UserNavigation user={user} />
      <div className='min-h-screen flex flex-col bg-black justify-center items-center px-64'>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (password === confirmPassword && strongRegex.test(password)) {
              await requestEmailSignup(email, password, firstName, lastName);
            } else {
              setError('Check that password match and match the password criteria.');
            }
          }}
          className='bg-black flex flex-col justify-center items-center'>
          <input
            name='email'
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
            name='first name'
            required
            value={firstName}
            placeholder='First Name'
            type='text'
            maxLength='18'
            className='login-input border-aqua border'
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
          <input
            name='last name'
            required
            value={lastName}
            placeholder='Last Name'
            type='text'
            maxLength='18'
            className='login-input border-purple border'
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
          <input
            name='password'
            required
            value={password}
            placeholder='Password'
            className='login-input border-aqua border password'
            type='password'
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input
            name='password confirmation'
            required
            value={confirmPassword}
            placeholder='Confirm Password'
            className='login-input border-purple border confirm-password'
            type='password'
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
          <button className='black-button hover:text-black hover:bg-white' type='submit'>
            {userLoading ? 'Signing Up' : 'Sign Up'}
          </button>
        </form>
        <div>
          <GoogleSignup />
          <FacebookSignup />
        </div>
        {userLoading && <LoadingSpinner text='Signing Up New User' color='white' />}
        {(userError || error) && <FormError message={userError || error} />}
        <Link href='/login'>
          <a className='text-center text-white'>Already a member?</a>
        </Link>
      </div>
      <style jsx>{`
        form,
        .username {
          padding: 100px 0 0;
        }
        .password {
          color: ${strongRegex.test(password) ? 'LightGreen' : 'Tomato'};
        }
        .confirm-password {
          color: ${password === confirmPassword ? 'LightGreen' : 'Tomato'};
        }
      `}</style>
    </>
  );
};

export default signup;
