import Head from 'next/head';
import Link from 'next/link';
import LoadingSpinner from './reusableStyledComponents/LoadingSpinner';
import PropTypes from 'prop-types';
import firebase from '../utilities/firebaseSetup';
import theme from '../utilities/theme';
import { useEffect } from 'react';

function Layout({ children, title, loading }) {
  useEffect(() => {
    if (window) {
      firebase.analytics();
    }
  }, []);

  if (loading)
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <div className='antialiased items-center justify-center full-screen p-0 m-0'>
          <LoadingSpinner />
        </div>
        <style jsx global>{`
          html,
          body {
            font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            scroll-behavior: smooth;
            padding: 0;
            margin: 0;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </>
    );

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='antialiased full-screen overflow-hidden p-0 m-0'>
        <section className='main-content'>{children}</section>
      </div>
      <style jsx global>{`
        html,
        body {
          font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          scroll-behavior: smooth;
          padding: 0;
          margin: 0;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};
