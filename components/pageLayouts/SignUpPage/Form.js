import Popover, { ArrowContainer } from 'react-tiny-popover';
import React, { useContext, useEffect, useState } from 'react';

import FBLogin from '../../ReusableComponents/Buttons/FBLogin';
import FormError from '../../ReusableComponents/Errors/FormError';
import GoogleLogin from '../../ReusableComponents/Buttons/GoogleLogin';
import InlineFormError from '../../ReusableComponents/Errors/InlineFormError';
import Link from 'next/link';
import LoadingButtonDots from '../../ReusableComponents/Loading/LoadingButtonDots';
import LoadingFillIcon from '../../ReusableComponents/Loading/LoadingFillIcon';
import LoadingSpinner from '../../ReusableComponents/Loading/LoadingSpinner';
import LoginLayout from '../LoginPage/LoginLayout';
import Tooltip from '../../ReusableComponents/Other/Tooltip';
import { UserContext } from '../../../utilities/context/UserContext';
import UserFormLayout from '../../ReusableComponents/Layouts/UserFormLayout';
import { signupStates } from '../../../utilities/enums';
import { strongRegex } from '../../../utilities/validation';
import theme from '../../../utilities/theme';
import { useRouter } from 'next/router';

const SignupForm = ({ user }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const {
    userError,
    userLoading,
    requestEmailSignup,
    requestGoogleSignup,
    requestFbSignup,
  } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/signup/success');
    }
  }, []);

  return (
    <UserFormLayout>
      <div className='grid grid-cols-1 mx-auto w-full'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (password === confirmPassword && strongRegex.test(password)) {
              requestEmailSignup(email, password, firstName, lastName);
            }
          }}
          className='flex flex-col justify-center items-center mx-auto mb-20'>
          <label className='login-input-label dark:text-lightGrey pb-4'>Name</label>
          <div className='grid grid-cols-2 gap-4'>
            <input
              aria-label='First Name'
              placeholder='First Name'
              id='firstName'
              name='First Name'
              required
              value={firstName}
              type='text'
              maxLength='18'
              className='login-input dark:border-white mb-8 inline-block'
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
            <input
              aria-label='Last Name'
              placeholder='Last Name'
              id='lastName'
              name='Last Name'
              required
              value={lastName}
              type='text'
              maxLength='18'
              className='login-input dark:border-white mb-8 inline-block'
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </div>
          <label htmlFor='email' className='login-input-label dark:text-lightGrey'>
            Email
          </label>
          <InlineFormError
            error={userError}
            code='auth/email-already-in-use'
            message='There is already an account with this email'
          />
          <input
            id='email'
            name='email'
            required
            value={email}
            type='email'
            className='login-input dark:border-white mb-8'
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label htmlFor='password' className='login-input-label dark:text-lightGrey relative'>
            Password
            <Tooltip
              message='Password must contain at least one lowercase letter, one uppercase letter, one
                    number, and one symbol.'
            />
          </label>
          <div className='password-message w-full text-left'>
            {password ? (
              strongRegex.test(password) ? (
                <p className='text-xxs text-success'>Password Strength OK.</p>
              ) : (
                <p className='text-xxs text-danger'>Password is not strong enough.</p>
              )
            ) : null}
          </div>
          <input
            id='password'
            name='password'
            required
            value={password}
            className='login-input dark:border-white mb-8'
            type='password'
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <label htmlFor='confirmPassword' className='login-input-label dark:text-lightGrey'>
            Confirm Password
          </label>
          <div className='password-message w-full text-left'>
            {confirmPassword ? (
              password === confirmPassword ? (
                <p className='text-xxs text-success'>Passwords Match.</p>
              ) : (
                <p className='text-xxs text-danger'>Passwords Do Not Match</p>
              )
            ) : null}
          </div>
          <input
            id='confirmPassword'
            name='password confirmation'
            required
            value={confirmPassword}
            className='login-input dark:border-white mb-16'
            type='password'
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
          <button
            disabled={
              !email.length ||
              !firstName.length ||
              !lastName.length ||
              !password.length ||
              password !== confirmPassword
            }
            className='filled-button-light dark:bg-white dark:text-black relative'
            type='submit'
            required>
            {userLoading ? 'SIGNING UP' : 'SIGN UP'}
          </button>
        </form>
        <div className='pb-12'>
          <GoogleLogin />
          <FBLogin />
        </div>
        <div className='py-12 pt-8 border-t-2 border-lightGrey'>
          <p className='text-center text-sm'>Already a member?</p>
          <Link href='/login'>
            <a className='mx-auto border-black dark:border-white border flex items-center justify-center rounded-md h-formButton w-formButton text-black dark:text-white bg-transparent text-center text-sm my-4'>
              Login to Account
            </a>
          </Link>
        </div>
        {userLoading ? <LoadingFillIcon /> : null}
      </div>
      <style jsx>{`
        .filled-button-light:disabled {
          opacity: 0.7;
        }
        .grid-cols-1 {
          max-width: 400px;
        }
        input {
          border-radius: 0;
          -webkit-appearance: none;
        }
        form {
          max-width: 240px;
        }
        ::placeholder {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: ${theme.colors.mediumGrey};
          opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: ${theme.colors.mediumGrey};
        }

        ::-ms-input-placeholder {
          /* Microsoft Edge */
          color: ${theme.colors.mediumGrey};
        }
        .password-message {
          min-height: 0.8rem;
        }
      `}</style>
    </UserFormLayout>
  );
};

export default SignupForm;
