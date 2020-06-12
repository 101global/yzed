import React, { useContext, useEffect, useState } from 'react';

import firebase from '../../../utilities/firebaseSetup';
import theme from '../../../utilities/theme';

const BrandContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    const dbh = firebase.firestore();
    dbh
      .collection('newsletterSubscriptions')
      .doc()
      .set({ name, email, message })
      .then(() => {
        setMessage('');
        setName('');
        setEmail('');
        setLoading(false);
      });
  };

  return (
    <>
      <div className='contact-container'>
        <h2>Interested? Sign Up for Updates.</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
          <input
            required
            type='text'
            name='name'
            value={name}
            placeholder='Name'
            aria-label='name'
            minLength='3'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type='email'
            name='email'
            value={email}
            placeholder='Email Address'
            aria-label='email address'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='text'
            name='message'
            value={message}
            placeholder='Message (Optional)'
            aria-label='optional message'
            maxLength='200'
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className='white-button' disabled={!name.length || !email.length} type='submit'>
            {loading ? 'SENDING' : 'RECEIVE UPDATES'}
          </button>
        </form>
        <ul className='contact-information'>
          <h2>Contact Information</h2>
          <li>
            <span>Email</span> yzed@101.global
          </li>
          <li>
            <span>Address</span> 22-18, Bongeunsa-ro 26-gil, Gangnam-gu
            <br />
            Seoul, South-Korea
          </li>
        </ul>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: ${theme.boxSizes.mainContentWidthDesktop};
            background-color: ${theme.colors.black};
            color: ${theme.colors.white};
            margin-left: ${theme.boxSizes.mainContentMarginLeftDesktop};
            color: ${theme.colors.white};
          }
          h2 {
            font-size: ${theme.fontSizes.h2SizeDesktop};
          }
          .contact-information {
            margin: 0;
            padding: 0;
            list-style-type: none;
          }
          .contact-information li {
            font-size: 1.1rem;
            display: grid;
            grid-template-columns: 100px 1fr;
            font-weight: 300;
            margin: 20px 0;
          }
          .contact-information li span {
            font-weight: 600;
          }
          form input {
            display: block;
            background: ${theme.colors.black};
            border: none;
            box-shadow: none;
            color: ${theme.colors.white};
            border-bottom: 1px solid ${theme.colors.white};
            padding: 10px 0;
            font-size: 1rem;
            width: 90%;
            max-width: 600px;
            margin-bottom: 30px;
          }
          input::placeholder {
            color: ${theme.colors.lightGrey};
          }
          button.white-button {
            display: block;
            background-color: ${theme.colors.white};
            color: ${theme.colors.black};
            text-decoration: none;
            padding: 10px 0;
            border-radius: 25px;
            border: 1px solid ${theme.colors.white};
            transition: all 0.4s ease;
            width: 350px;
            font-size: ${theme.fontSizes.pSizeDesktop};
            text-align: center;
            margin-top: 50px;
          }
          button {
            letter-spacing: 0.2em;
            font-weight: ${theme.fontWeights.medium};
          }
          button.white-button:hover {
            background-color: ${theme.colors.black};
            color: ${theme.colors.white};
            transition: all 0.3s ease;
            border-color: ${theme.colors.white};
          }
        `}
      </style>
    </>
  );
};

export default BrandContact;
