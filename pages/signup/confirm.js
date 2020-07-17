import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../../utilities/context/UserContext';
import LoadingBars from '../../components/ReusableComponents/Loading/LoadingBars';
import FormError from '../../components/ReusableComponents/Errors/FormError';
import Link from 'next/link';
import firebase from '../../utilities/firebaseSetup';

const confirm = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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
    if (user) {
      if (user.emailVerified) {
        router.push('/experience/1');
      }
    }
  }, []);

  return (
    <div
      div
      className='min-h-screen flex flex-col bg-black justify-center items-center px-64 text-white'>
      <h1 className='text-2xl font-light text-center'>Verification Email</h1>
      {userError ? (
        <div>
          <FormError message={userError} canClose={false} />
          <Link href='/login'>
            <a>Login</a>
          </Link>
        </div>
      ) : (
        <div>
          <p className='text-base font-light text-center mt-8'>
            In order to continue you need to verify your email address.
          </p>
          {user ? (
            <>
              <p className='text-base font-light text-center'>
                When you signed up an email was sent to the address you registered with. Check that
                you have received it and follow the link. After you verify your email address you
                may close this tab.
              </p>
              <p className='text-base font-light text-center  mt-16'>
                If you did not receive the verification email click below to send it again.
              </p>
              <button
                onClick={() => {
                  requestEmailVerification();
                }}
                className='block mx-auto border'>
                Click here to resend email confirmation.
              </button>
            </>
          ) : (
            <>
              <p>You need to log in first.</p>
              <Link href='/login'>
                <a>Login</a>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default confirm;
