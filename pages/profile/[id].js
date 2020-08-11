import React, { useContext, useEffect, useState } from 'react';

import Footer from '../../components/ReusableComponents/Footer/Footer';
import Link from 'next/link';
import LoadingBars from '../../components/ReusableComponents/Loading/LoadingBars';
import LogoutButton from '../../components/ReusableComponents/Buttons/LogoutButton';
import SquareEmptyLink from '../../components/ReusableComponents/Links/SquareEmptyLink';
import UserFormLayout from '../../components/ReusableComponents/Layouts/UserFormLayout';
import VerifyEmail from '../../components/ReusableComponents/Buttons/VerifyEmail';
import theme from '../../utilities/theme';
import { useRouter } from 'next/router';

const profile = ({ user }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, []);

  if (loading || !user) {
    return (
      <UserFormLayout>
        <div>
          <LoadingBars text='Getting user information...' />
        </div>
      </UserFormLayout>
    );
  }
  return (
    <>
      <UserFormLayout>
        <div className='text-center'>
          {user.profilePicture.length > 1 ? (
            <img
              src={user.profilePicture}
              alt={`${user.firstName} ${user.lastName} Profile Picture`}
            />
          ) : (
            <h1 className='letter-icon'>{user.profilePicture}</h1>
          )}
          <div className='mt-8 mb-12'>
            <p className='font-semibold text-base lg:text-lg'>
              {user.firstName} {user.lastName}
            </p>
            <p className='font-light text-sm lg:text-base'>{user.email}</p>
          </div>
          <SquareEmptyLink href='/profile/edit' text='EDIT PROFILE' styleClass='mb-12' />
          {user.emailVerified ? <VerifyEmail user={user} /> : null}
          <LogoutButton />
        </div>
      </UserFormLayout>
      <style jsx>{`
        .letter-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 80px;
          background: ${theme.colors.purple};
          height: 120px;
          width: 120px;
          border-radius: 50%;
          color: ${theme.colors.white};
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default profile;
