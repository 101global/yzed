import Head from 'next/head';
import Link from 'next/link';
import LoadingSpinner from './reusableStyledComponents/LoadingSpinner';
import PropTypes from 'prop-types';
import theme from '../utilities/theme';

function Layout({ children, title, loading }) {
  if (loading)
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <div className='layout-container antialiased p-0 m-0 scrolling-touch'>
          <LoadingSpinner />
        </div>
        <style jsx global>{`
          html,
          body {
            font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
      <div className='layout-container antialiased max-w-screen min-h-screen overflow-hidden'>
        <section className='main-content'>{children}</section>
      </div>
      <style jsx global>{`
        html,
        body {
          scroll-behavior: smooth;
          padding: 0;
          margin: 0;
          font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
