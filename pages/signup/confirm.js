import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../../utilities/context/UserContext';
import LoadingBars from '../../components/ReusableComponents/Loading/LoadingBars';
import FormError from '../../components/ReusableComponents/Errors/FormError';
import Link from 'next/link';

const confirm = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  console.log(router.query);
  const { requestEmailVerification, setUserError, userError } = useContext(UserContext);

  const sendEmailVerification = () => {
    if (user) {
      if (!user.emailVerified) {
        requestEmailVerification(setLoading);
      } else {
        router.push('/signup/success');
      }
    } else {
      setUserError('You must currently be logged in to verify your email.');
    }
  };

  useEffect(() => {
    // sendEmailVerification();
  }, []);

  if (!loading)
    return (
      <div className='min-h-screen flex flex-col bg-black justify-center items-center px-64'>
        <LoadingBars text='Checking for valid email address...' />
      </div>
    );

  return (
    <div
      div
      className='min-h-screen flex flex-col bg-black justify-center items-center px-64 text-white'>
      {userError ? (
        <div>
          <FormError message={userError} />
          <Link href='/login'>
            <a>Login</a>
          </Link>
        </div>
      ) : (
        <div>
          <h1 className='text-2xl font-light text-center'>Verification Email Sent</h1>
          <p className='text-base font-light text-center mt-8'>
            An email has been sent to {user.email}. Please click the verification link and follow
            that tab. You may close this tab and continue with the verification link.
          </p>
        </div>
      )}
    </div>
  );
};

export default confirm;
