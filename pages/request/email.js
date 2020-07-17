import React, { useEffect, useContext, useState } from 'react';
import Link from 'next/link';
import { UserContext } from '../../utilities/context/UserContext';
import FormError from '../../components/ReusableComponents/Errors/FormError';

const email = ({ user }) => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const { userError, requestEmailVerification } = useContext(UserContext);
  return (
    <div className='min-h-screen flex flex-col bg-black justify-center items-center px-64 text-white'>
      <h1>You need to verify your email first.</h1>
      <p>
        Your email address has not been verified yet. Click the button below to to send an email to your registered email address.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestEmailVerification(email);
        }}>
        <input
          required
          type='email'
          value={email}
          placeholder='Email Address'
          onChange={(e) => setEmail(e.target.value)}
          className='login-input border-purple border'
        />
        <button type='submit' className='black-button hover:text-black hover:bg-white'>
          Send Confirmation Email
        </button>
        {userError && <FormError message={userError} />}
      </form>
    </div>
  );
};

export default email;
