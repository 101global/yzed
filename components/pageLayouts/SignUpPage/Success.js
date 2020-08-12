import React, { useContext, useEffect, useState } from 'react';

import FormError from '../../ReusableComponents/Errors/FormError';
import Link from 'next/link';
import LoadingBars from '../../ReusableComponents/Loading/LoadingBars';
import SquareFilledLink from '../../ReusableComponents/Links/SquareFilledLink';
import { UserContext } from '../../../utilities/context/UserContext';
import UserFormLayout from '../../ReusableComponents/Layouts/UserFormLayout';
import { useRouter } from 'next/router';

const SignupSuccess = ({ user }) => {
  console.log(user);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { oobCode } = router.query;
  const { confirmEmailVerification, userError } = useContext(UserContext);

  useEffect(() => {
    if (oobCode) {
      confirmEmailVerification(oobCode, setLoading, setSuccess);
    } else {
      setLoading(false);
      setSuccess(true);
    }
  }, []);

  if (loading)
    return (
      <UserFormLayout>
        <LoadingBars text='Verifying User Credentials...' />
      </UserFormLayout>
    );
  return (
    <>
      <UserFormLayout>
        {!oobCode ? (
          <>
            <div className='pb-16 text-center mx-auto'>
              <h1 className='text-xl px-8 text-center'>Now you are in the YZED crew!</h1>
              <p className='text-xs lg:text-base text-center py-8'>
                We promise to you that we will present to you an extraordinary and gorgeous AR
                fashion experience!
              </p>
              <SquareFilledLink href='/' text='GO HOME' styleClass='mt-16' />
              {user ? (
                <Link href={`/profile/${user.uid}`}>
                  <a className='text-left text-xs w-full inline-block'>Go to profile</a>
                </Link>
              ) : null}
            </div>
          </>
        ) : (
          <div className='flex flex-col h-full justify-start items-center'>
            {success ? (
              <>
                <div className='pb-16 text-center'>
                  <h1 className='text-xl lg:text-2xl px-8 text-center'>
                    Now you are in the YZED crew!
                  </h1>
                  <p className='text-xs lg:text-base text-center py-8'>
                    We promise to you that we will present to you an extraordinary and gorgeous AR
                    fashion experience!
                  </p>
                  <SquareFilledLink href='/' text='GO HOME' styleClass='mt-16' />
                  {user ? (
                    <Link href={`/profile/${user.uid}`}>
                      <a className='text-left text-xs w-full inline-block'>Go to profile</a>
                    </Link>
                  ) : null}
                </div>
              </>
            ) : (
              <>
                <h1 className='text-xl lg:text-2xl px-8 text-center'>
                  Oops. Something went wrong.
                </h1>
                <p className='text-xs lg:text-base text-center py-8'>{userError.message}</p>
                <SquareFilledLink href='/' text='GO HOME' styleClass='mt-16' />
              </>
            )}
          </div>
        )}
      </UserFormLayout>
      <style jsx>{`
        .text-center {
          max-width: 240px;
        }
        .flex {
          min-height: 600px;
        }
      `}</style>
    </>
  );
};

export default SignupSuccess;
