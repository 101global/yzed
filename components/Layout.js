import Head from 'next/head';
import LoadingSpinner from './reusableStyledComponents/LoadingSpinner';
import PropTypes from 'prop-types';
import firebase from '../utilities/firebaseSetup';
import theme from '../utilities/theme';
import { useEffect } from 'react';

const BodyLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='full-screen overflow-hidden p-0 m-0 subpixel-antialiased'>{children}</div>
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
};

function Layout({ children, title, loading }) {
  useEffect(() => {
    if (window) {
      firebase.analytics();
    }
  }, []);

  return <BodyLayout title={title}>{loading ? <LoadingSpinner /> : children}</BodyLayout>;
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};
