import React, { useEffect, useState } from 'react';

import LandingLayout from './LandingLayout';
import Layout from '../../ReusableComponents/Layouts/MainBodyLayout';
import PropTypes from 'prop-types';

const LandingDataFetch = ({ product, exposure }) => {
  const [loading, setLoading] = useState(false);
  const [mainProduct, setMainProduct] = useState({});

  useEffect(() => {
    setLoading(true);
    const model = {
      brandName: product.fields.brandName.stringValue,
      glbFile: product.fields.glbFile.stringValue,
      usdzFile: product.fields.usdzFile.stringValue,
      id: product.name.slice(63),
      imageSlug: product.fields.imageSlug.stringValue,
      animatedGlbFile: product.fields.animatedGlbFile.stringValue,
      exposure: exposure ?? 0.5,
    };
    setMainProduct(model);
    setLoading(false);
  }, []);

  return (
    <Layout
      title={`YZED${mainProduct.brandName === undefined ? '.me' : ` x ${mainProduct.brandName}`}`}
      loading={!mainProduct || loading || !product}>
      <LandingLayout model={mainProduct} />
    </Layout>
  );
};

export default LandingDataFetch;

LandingDataFetch.propTypes = {
  product: PropTypes.object.isRequired,
  exposure: PropTypes.number,
};
