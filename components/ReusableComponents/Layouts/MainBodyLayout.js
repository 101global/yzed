import Head from 'next/head';

import PropTypes from 'prop-types';
import firebase from '../../../utilities/firebaseSetup';
import theme from '../../../utilities/theme';
import { useEffect } from 'react';
import LoadingFillIcon from '../Loading/LoadingFillIcon';

const BodyLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='full-screen subpixel-antialiased'>{children}</div>
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
        *:focus {
          outline: 0 !important;
          box-shadow: 0 0 0 0.2rem #fff, 0 0 0 0.35rem #069 !important;
        }

        *:focus:not(.focus-visible) {
          outline: 0 !important;
          box-shadow: none !important;
        }
      `}</style>
    </>
  );
};

BodyLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const Layout = ({ children, title, loading }) => {
  useEffect(() => {
    if (window) {
      firebase.analytics();
    }
  }, []);

  return <BodyLayout title={title}>{loading ? <LoadingFillIcon /> : children}</BodyLayout>;
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};
