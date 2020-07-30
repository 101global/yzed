import React, { useEffect, useState } from 'react';

import BrandPageLayout from './BrandPageLayout';
import Layout from '../../ReusableComponents/Layouts/MainBodyLayout';
import PropTypes from 'prop-types';

const BrandDataFetch = ({ product, exposure }) => {
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState(null);

  useEffect(() => {
    setLoading(true);
    const modelData = {
      brandName: product.fields.brandName.stringValue,
      glbFile: product.fields.glbFile.stringValue,
      usdzFile: product.fields.usdzFile.stringValue,
      id: product.name.slice(63),
      imageSlug: product.fields.imageSlug.stringValue,
      animatedGlbFile: product.fields.animatedGlbFile.stringValue,
      exposure: exposure ?? 0.5,
    };
    setModel(modelData);
    setLoading(false);
  }, []);

  return (
    <Layout
      title={`YZED${
        model === null || model.brandName === undefined ? '.me' : ` x ${model.brandName}`
      }`}
      loading={!model || loading || !product}>
      <BrandPageLayout model={model} />
    </Layout>
  );
};

export default BrandDataFetch;

BrandDataFetch.propTypes = {
  product: PropTypes.object.isRequired,
  exposure: PropTypes.number,
};
