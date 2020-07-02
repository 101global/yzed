import React, { useEffect, useState } from 'react';

import LandingLayout from './LandingLayout';
import Layout from '../../Layout';
import PropTypes from 'prop-types';

const LandingDataFetchStrapiApiTest = ({ testApiProduct, exposure }) => {
  console.log(testApiProduct);
  const [loading, setLoading] = useState(false);
  const [mainProduct, setMainProduct] = useState({});

  useEffect(() => {
    setLoading(true);
    const { brandName, usdz, animated, glb, image } = testApiProduct[0];
    const model = {
      brandName,
      glbFile: glb,
      usdzFile: usdz,
      id: brandName,
      imageSlug: image,
      animatedGlbFile: animated,
      exposure: exposure ?? 0.5,
    };
    setMainProduct(model);
    setLoading(false);
  }, []);

  return (
    <Layout
      title={`YZED${mainProduct.brandName === undefined ? '.me' : ` x ${mainProduct.brandName}`}`}
      loading={!testApiProduct || loading || !mainProduct}>
      <LandingLayout model={mainProduct} />
    </Layout>
  );
};

export default LandingDataFetchStrapiApiTest;

LandingDataFetchStrapiApiTest.propTypes = {
  product: PropTypes.object.isRequired,
  exposure: PropTypes.number,
};
