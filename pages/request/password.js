import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../utilities/context/UserContext';
import FormError from '../../components/ReusableComponents/Errors/FormError';

const password = () => {
  const [email, setEmail] = useState('');
  const { requestForgottenPasswordEmail, userError } = useContext(UserContext);
  const [success, setSuccess] = useState(false);

  return (
    <>
      <div className='min-h-screen flex flex-col bg-black justify-center items-center px-64 text-white'>
        <h1 className='text-white'>Request Password</h1>
        <p>
          Enter your email and you will shortly receive an email with directions to reset your
          password.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            requestForgottenPasswordEmail(email, setSuccess);
          }}>
          <input
            aria-label='email'
            placeholder='Email Address'
            name='email'
            type='email'
            value={email}
            required
            className='login-input border-aqua border'
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className='black-button hover:text-black hover:bg-white'>
            Send Password Reset
          </button>
        </form>
        {userError && <FormError message={userError} />}
        {success && <h1>Password Reset Sent</h1>}
      </div>
    </>
  );
};

export default password;
