import React, { useContext, useEffect, useState } from 'react';

import FormError from '../../components/ReusableComponents/Errors/FormError';
import Link from 'next/link';
import LoadingBars from '../../components/ReusableComponents/Loading/LoadingBars';
import { UserContext } from '../../utilities/context/UserContext';
import { useRouter } from 'next/router';

const success = ({ user }) => {
  console.log(user);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { oobCode } = router.query;
  console.log(oobCode);
  const { confirmEmailVerification, userError } = useContext(UserContext);

  useEffect(() => {
    if (oobCode) {
      confirmEmailVerification(oobCode, setLoading);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading)
    return (
      <div className='min-h-screen flex flex-col bg-black justify-center items-center px-64'>
        <LoadingBars text='Verifying User Credentials...' />
      </div>
    );
  return (
    <div className='min-h-screen flex flex-col bg-black justify-center items-center px-64 text-white'>
      {userError ? (
        <FormError error={userError} />
      ) : (
        <>
          <h1>
            You have successfully finished the signup and verification process. Continue using YZED.
          </h1>
          <Link href='/experience/1'>
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
