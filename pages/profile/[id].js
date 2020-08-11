import React, { useContext, useEffect, useState } from 'react';

import Footer from '../../components/ReusableComponents/Footer/Footer';
import Link from 'next/link';
import LoadingBars from '../../components/ReusableComponents/Loading/LoadingBars';
import LogoutButton from '../../components/ReusableComponents/Buttons/LogoutButton';
import SquareEmptyLink from '../../components/ReusableComponents/Links/SquareEmptyLink';
import UserFormLayout from '../../components/ReusableComponents/Layouts/UserFormLayout';
import MainBodyLayout from '../../components/ReusableComponents/Layouts/MainBodyLayout';
import VerifyEmail from '../../components/ReusableComponents/Buttons/VerifyEmail';
import theme from '../../utilities/theme';
import { useRouter } from 'next/router';
import { UserContext } from '../../utilities/context/UserContext';
import ChevronRight from '../../components/ReusableComponents/Icons/ChevronRight';
import Accordion from '../../components/ReusableComponents/Other/Accordion';

const profile = ({ user }) => {
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const { requestLogout } = useContext(UserContext);

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
      <MainBodyLayout>
        <div className='profile-container text-center pt-20 grid grid-rows-2'>
          <div className='mt-8 mb-12'>
            {user.profilePicture.length > 1 ? (
              <img
                src={user.profilePicture}
                alt={`${user.firstName} ${user.lastName} Profile Picture`}
              />
            ) : (
              <h1 className='letter-icon'>{user.profilePicture}</h1>
            )}
            <p className='font-semibold text-base lg:text-lg mt-8'>
              {user.firstName} {user.lastName}
            </p>
            <p className='font-light text-sm lg:text-base'>{user.email}</p>
          </div>
          <SquareEmptyLink href='/profile/edit' text='EDIT PROFILE' styleClass='mb-12' />
          {!user.emailVerified ? <VerifyEmail user={user} /> : null}
          <div className='bg-lightGrey pb-64'>
            <button
              onClick={() => {
                setOpenChangePassword(!openChangePassword);
              }}
              className='mt-4 py-2 w-formArea mx-auto flex flex-row justify-between items-center'>
              Change Password
              <div
                className={
                  openChangePassword
                    ? 'transform rotate-90 transition-all duration-500'
                    : 'transform rotate-0 transition-all duration-500'
                }>
                <ChevronRight />
              </div>
            </button>
            <Accordion open={openChangePassword}>
              {!user.emailVerified ? (
                <p>You need to verify your email address first.</p>
              ) : (
                <p>Update Password</p>
              )}
            </Accordion>
            <div className='border-t-2 border-b-2 border-borderGrey'>
              <Link href='/terms'>
                <a className='py-2 w-formArea mx-auto flex flex-row justify-between items-center'>
                  Terms of Use
                  <ChevronRight />
                </a>
              </Link>
            </div>
            <button
              onClick={() => {
                requestLogout();
              }}
              className='text-light block py-2 w-formArea mx-auto text-left'>
              Log Out
            </button>
          </div>
        </div>
        <Footer />
      </MainBodyLayout>
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
        .profile-container {
          min-height: calc(100vh - 60px);
          width: 450px;
          max-width: 100%;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default profile;
