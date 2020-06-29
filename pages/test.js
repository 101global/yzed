import React, { useContext, useEffect, useState } from 'react';

import LandingLayout from '../components/pageLayouts/LandingPage/LandingLayout';
import Layout from '../components/Layout';
import ReactVivus from 'react-vivus';
import fetch from 'node-fetch';
import firebase from '../utilities/firebaseSetup';
import svg from '../public/animated-model.svg';
import theme from '../utilities/theme';

const Reserved = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const [displayDate, setDisplayDate] = useState('');

  const [mainProduct, setMainProduct] = useState({});

  const dbh = firebase.firestore();

  useEffect(() => {
    setLoading(true);

    firebase
      .firestore()
      .collection('landingBrand')
      .doc(process.env.brandLandingYZED)
      .get()
      .then((doc) => {
        const { brandName, glbFile, usdzFile, imageSlug, animatedGlbFile } = doc.data();
        const model = { brandName, glbFile, usdzFile, imageSlug, animatedGlbFile, id: 'YZED' };
        setMainProduct(model);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Layout title='TEST' loading={loading}>
        <LandingLayout model={mainProduct} />
        {/* <div className='test-div'>
          <ReactVivus
            id='animated-svg-test'
            option={{
              file: svg,
              animTimingFunction: 'EASE-IN',
              type: 'oneByOne',
              duration: 300,
            }}
          />
        </div> */}
      </Layout>
      <style jsx global>
        {`
          .test-div {
            height: 100vh;
            position: relative;
          }
          #animated-svg-test {
            position: absolute;
            width: 100%;
            top: 20px;
          }
          #animated-svg-test svg {
            height: 90vh;
          }
          @media (max-width: 768px) {
            #animated-svg-test {
              top: 30px;
            }
            #animated-svg-test svg {
              height: 60px;
            }
          }
        `}
      </style>
    </>
  );
};

// export async function getStaticProps() {
//   const product = await fetch(
//     `https://firestore.googleapis.com/v1/projects/yzed-88819/databases/(default)/documents/landingBrand/${process.env.brandLandingYZED}`,
//     { cors: 'no-cors' }
//   ).then((res) => res.json().then((data) => data));

//   return {
//     props: {
//       product,
//     },
//   };
// }

export default Reserved;
