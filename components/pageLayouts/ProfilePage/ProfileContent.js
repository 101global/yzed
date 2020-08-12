import React, { useContext, useEffect, useState } from 'react';

import Accordion from '../../ReusableComponents/Other/Accordion';
import ChevronRight from '../../ReusableComponents/Icons/ChevronRight';
import Footer from '../../ReusableComponents/Footer/Footer';
import Link from 'next/link';
import LoadingBars from '../../ReusableComponents/Loading/LoadingBars';
import LogoutButton from '../../ReusableComponents/Buttons/LogoutButton';
import MainBodyLayout from '../../ReusableComponents/Layouts/MainBodyLayout';
import NavigationBar from '../../ReusableComponents/Navigation/NavigationBar';
import SquareEmptyLink from '../../ReusableComponents/Links/SquareEmptyLink';
import UpdatePassword from '../../pageLayouts/ProfilePage/UpdatePassword';
import { UserContext } from '../../../utilities/context/UserContext';
import UserFormLayout from '../../ReusableComponents/Layouts/UserFormLayout';
import VerifyEmail from '../../ReusableComponents/Buttons/VerifyEmail';
import theme from '../../../utilities/theme';
import { useRouter } from 'next/router';
import { userTerms } from '../../../utilities/constants';

const ProfileContent = ({ user }) => {
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editProfile, setEditProfile] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!user || user.uid !== router.query.id) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, []);

  if (loading || !user) {
    return (
      <UserFormLayout title='YZED - Profile'>
        <div>
          <LoadingBars text='Getting user information...' />
        </div>
      </UserFormLayout>
    );
  }
  return (
    <>
      <MainBodyLayout title='YZED - Profile'>
        <div className='text-center w-screen flex flex-col justify-between min-h-screen'>
          <NavigationBar user={user} isLandingMenu={false} />
          <main className='profile-container min-h-contentAreaMobile lg:min-h-contentArea flex flex-col justify-between pt-mobileNav lg:pt-desktopNav'>
            <section className='mt-8 mb-12'>
              {user.profilePicture.length > 1 ? (
                <img
                  className='profile-image'
                  src={user.profilePicture}
                  alt={`${user.firstName} ${user.lastName} Profile Picture`}
                />
              ) : (
                <h1 className='letter-icon'>{user.profilePicture}</h1>
              )}
              <p className='font-semibold text-base lg:text-lg mt-8'>
                {user.firstName} {user.lastName}
              </p>
              <p className='font-light text-sm lg:text-base mb-12'>{user.email}</p>
              <SquareEmptyLink href='/profile/edit' text='EDIT PROFILE' styleClass='mb-12' />
              <div className='text-right w-formArea mx-auto py-8'>
                <LogoutButton />
              </div>
            </section>
            {!user.emailVerified ? <VerifyEmail user={user} /> : null}
            <section className='bg-lightGrey pt-4 pb-32 dark:bg-darkGrey'>
              <button
                onClick={() => {
                  setOpenChangePassword(!openChangePassword);
                }}
                className='mt-4 py-2 w-formArea mx-auto flex flex-row justify-between items-center'>
                Change Password
                <ChevronRight
                  styleClass={
                    openChangePassword
                      ? 'transform rotate-90 transition-all duration-500'
                      : 'transform rotate-0 transition-all duration-500'
                  }
                />
              </button>
              <Accordion open={openChangePassword}>
                {!user.emailVerified ? (
                  <p>You need to verify your email address first.</p>
                ) : (
                  <UpdatePassword />
                )}
              </Accordion>
              <div className='border-t-2 border-b-2 border-borderGrey dark:border-mediumGrey'>
                <button
                  onClick={() => {
                    setOpenTerms(!openTerms);
                  }}
                  className='py-2 w-formArea mx-auto flex flex-row justify-between items-center'>
                  Terms of Use
                  <ChevronRight
                    styleClass={
                      openTerms
                        ? 'transform rotate-90 transition-all duration-500'
                        : 'transform rotate-0 transition-all duration-500'
                    }
                  />
                </button>
                <Accordion open={openTerms}>
                  {userTerms.map((term) => (
                    <p className='text-justify text-xxs font-hairline p-4 w-formArea mx-auto'>
                      {term}
                    </p>
                  ))}
                </Accordion>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </MainBodyLayout>
      <style jsx>{`
        .letter-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 80px;
          background: ${theme.colors.purple};
          color: ${theme.colors.white};
        }
        .profile-container {
          width: 450px;
          max-width: 100%;
          margin: 0 auto;
        }
        .profile-image,
        .letter-icon {
          height: 120px;
          width: 120px;
          border-radius: 50%;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default ProfileContent;
