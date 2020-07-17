import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import LoadingBars from '../components/ReusableComponents/Loading/LoadingBars';

const userAction = () => {
  const router = useRouter();
  console.log(router.query);
  const { query } = router;
  console.log(query);
  const redirect = () => {
    if (router.query.mode === 'verifyEmail') {
      router.push({ pathname: '/signup/success', query });
    }
    if (router.query.mode === 'resetPassword') {
      router.push({ pathname: '/request/resetpw', query });
    }
  };

  useEffect(() => {
    redirect();
  }, []);

  return (
    <div className='min-h-screen bg-black flex flex-col justify-center'>
      <LoadingBars text='Loading...' color='white' />
    </div>
  );
};

export default userAction;
