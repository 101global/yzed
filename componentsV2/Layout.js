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
        <div className='layout-container'>
          <LoadingSpinner />
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

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='layout-container'>
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
      <style jsx>{`
        .layout-container {
          min-height: 100vh;
          overflow: hidden;
          max-width: 100vw;
        }
      `}</style>
    </>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};
