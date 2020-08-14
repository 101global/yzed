import React, { useEffect, useState } from 'react';

import BrandPageLayout from './BrandPageLayout';
import MainBodyLayout from '../../ReusableComponents/Layouts/MainBodyLayout';
import PropTypes from 'prop-types';

const BrandDataFetch = ({ product, exposure, user }) => {
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
      imageCount: parseInt(product.fields.imageCount.integerValue),
    };
    setModel(modelData);
    setLoading(false);
  }, []);

  return (
    <MainBodyLayout
      title={`YZED${
        model === null || model.brandName === undefined || model.brandName === 'YZED'
          ? '.me'
          : ` x ${model.brandName}`
      }`}
      loading={!model || loading || !product || true}>
      <BrandPageLayout model={model} user={user} />
    </MainBodyLayout>
  );
};

export default BrandDataFetch;

BrandDataFetch.propTypes = {
  product: PropTypes.object.isRequired,
  exposure: PropTypes.number,
};
