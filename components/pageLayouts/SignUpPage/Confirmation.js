import React, { useContext, useEffect, useState } from 'react';

import FormError from '../../ReusableComponents/Errors/FormError';
import Link from 'next/link';

import LoadingBars from '../../ReusableComponents/Loading/LoadingBars';
import SquareFilledLink from '../../ReusableComponents/Links/SquareFilledLink';
import { UserContext } from '../../../utilities/context/UserContext';
import UserFormLayout from '../../ReusableComponents/Layouts/UserFormLayout';
import firebase from '../../../utilities/firebaseSetup';
import { useRouter } from 'next/router';

const SignupConfirmation = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    if (user) {
      if (user.emailVerified) {
        router.push(`/profile/${user.uid}`);
      }
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    <UserFormLayout>
      <LoadingBars text='Checking user credentials...' />
    </UserFormLayout>;
  }

  return (
    <>
      <UserFormLayout>
        <div div className='flex flex-col justify-start items-center mx-auto text-center'>
          <h1 className='text-2xl font-light pb-8'>Welcome to YZED!</h1>
          <h1 className='text-xl font-light pb-8'>Please confirm your email address.</h1>
          <p className='pb-4 text-sm'>
            A verification email has been sent to the address that you registered with. Please
            follow the link in the email to complete the verification process.
          </p>
          <p className='pb-16 text-sm'>
            You will not be able to access certain features until you have confirmed a valid email
            address. You may close this tab if you have confirmed your address using the email link.
          </p>
          <SquareFilledLink href='/' text='GO HOME' />
        </div>
      </UserFormLayout>
      <style jsx>{`
        .flex {
          min-height: 600px;
          max-width: 240px;
        }
      `}</style>
    </>
  );
};

export default SignupConfirmation;
