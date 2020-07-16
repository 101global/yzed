import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { strongRegex } from '../../utilities/validation';
import { UserContext } from '../../utilities/context/UserContext';
import LoadingBars from '../../components/ReusableComponents/Loading/LoadingBars';
import LoadingSpinner from '../../components/ReusableComponents/Loading/LoadingSpinner';
import FormError from '../../components/ReusableComponents/Errors/FormError';
import Link from 'next/link';

const resetpw = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [validPassword, setValidPassword] = useState(false);

  const { resetPassword, userError, setUserError } = useContext(UserContext);

  const router = useRouter();

  const { oobCode } = router.query;

  return (
    <>
      <div className='min-h-screen flex flex-col bg-black justify-center items-center px-64 text-white'>
        {success ? (
          <LoadingBars
            text='Password has been successfully reset. Logging you in now.  You will be redirected shortly.'
            color='white'
          />
        ) : userError ? (
          <>
            <FormError message={userError} localErrorCallback={setError} canClose={false} />
            <Link href='/request/password'>
              <a
                onClick={() => {
                  setUserError(null);
                }}>
                Resend Password Reset Email
              </a>
            </Link>
          </>
        ) : (
          <>
            <h1>Reset Password</h1>
            <form
              onSubmit={(e) => {
                setLoading(true);
                e.preventDefault();
                if (strongRegex.test(password) && password === confirmPassword) {
                  console.log(password);
                  resetPassword(password, oobCode, setSuccess);
                } else {
                  setError('Check that password is valid.');
                  setLoading(false);
                }
              }}>
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
              <button className='black-button hover:text-black hover:bg-white'>
                Reset Password
              </button>
            </form>
            {loading && <LoadingSpinner text='Resetting Password' color='white' />}
            {error && <FormError message={error} localErrorCallback={setError} />}
          </>
        )}
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

export default resetpw;
