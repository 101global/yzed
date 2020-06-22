import React, { useContext, useEffect, useState } from 'react';

import LandingLayout from '../components/pageLayouts/LandingPage/LandingLayout';
import Layout from '../components/Layout';
import ReactVivus from 'react-vivus';
import fetch from 'node-fetch';
import svg from '../public/Model_SVG.svg';
import theme from '../utilities/theme';

const Reserved = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const [displayDate, setDisplayDate] = useState('');

  const [mainProduct, setMainProduct] = useState({});

  const currentMarker = null;

  useEffect(() => {
    setLoading(true);
    const model = {
      brandName: product.fields.brandName.stringValue,
      glbFile: product.fields.glbFile.stringValue,
      usdzFile: product.fields.usdzFile.stringValue,
      id: product.name.slice(63),
      imageSlug: product.fields.imageSlug.stringValue,
      animatedGlbFile: product.fields.animatedGlbFile.stringValue,
      descriptions: product.fields.productDescriptions.arrayValue.values.map(
        (value) => value.stringValue
      ),
    };
    console.log(model);
    setMainProduct(model);
    setLoading(false);
  }, [currentMarker]);

  return (
    <>
      <Layout>
        <LandingLayout model={mainProduct} />
        <div className='test-div'>
          <ReactVivus
            id='animated-svg-test'
            option={{
              file: svg,
              animTimingFunction: 'EASE-IN',
              type: 'delayed',
              duration: 300,
            }}
          />
        </div>
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

export async function getStaticProps() {
  const product = await fetch(
    `https://firestore.googleapis.com/v1/projects/yzed-88819/databases/(default)/documents/landingBrand/${process.env.brandLandingMarineSerre}`,
    { cors: 'no-cors' }
  ).then((res) => res.json().then((data) => data));

  return {
    props: {
      product,
    },
  };
}

export default Reserved;
