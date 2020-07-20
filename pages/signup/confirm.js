import React, { useContext, useEffect, useState } from 'react';

import FormError from '../../components/ReusableComponents/Errors/FormError';
import Link from 'next/link';
import LoadingBars from '../../components/ReusableComponents/Loading/LoadingBars';
import { UserContext } from '../../utilities/context/UserContext';
import firebase from '../../utilities/firebaseSetup';
import { useRouter } from 'next/router';

const confirm = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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
      <h1 className='text-2xl font-light text-center'>Welcome to YZED</h1>
      <p>
        A verification email has been sent to the address that you registered with. Please follow
        the link in the email to complete the verification process. You will not be able to access
        certain features until you have confirmed a valid email address. You may close this tab if
        you have confirmed your address using the email link.
      </p>
      <Link href='/experience/1'>
        <a>Go Home</a>
      </Link>
    </div>
  );
};

export default confirm;
