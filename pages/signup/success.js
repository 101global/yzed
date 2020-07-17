import React, { useEffect, useContext, useState } from 'react';
import Link from 'next/link';
import LoadingBars from '../../components/ReusableComponents/Loading/LoadingBars';
import { useRouter } from 'next/router';
import { UserContext } from '../../utilities/context/UserContext';
import FormError from '../../components/ReusableComponents/Errors/FormError';

const success = ({ user }) => {
  console.log(user);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { oobCode } = router.query;
  console.log(oobCode);
  const { confirmEmailVerification, userError } = useContext(UserContext);

  useEffect(() => {
    confirmEmailVerification(oobCode, setLoading);
  }, []);

  if (loading)
    return (
      <div className='min-h-screen flex flex-col bg-black justify-center items-center px-64'>
        <LoadingBars text='Checking for valid email address...' />
      </div>
    );
  return (
    <div className='min-h-screen flex flex-col bg-black justify-center items-center px-64 text-white'>
      {userError ? (
        <>
          <FormError message={userError} canClose={false} />
          <Link href='/'>
            <a>Go Home</a>
          </Link>
        </>
      ) : (
        <>
          <h1>You have successfully finished the signup and verification process.</h1>
          <Link href='/'>
            <a>Go Home</a>
          </Link>
          <Link href='/profile'>
            <a>Go to My Profile</a>
          </Link>
        </>
      )}
    </div>
  );
};

export default success;
