import BrandAbout from './BrandAbout';
import BrandFooter from './BrandFooter';
import BrandHeader from './BrandHeader';
import BrandMainSection from './BrandMainSection';
import { Element } from 'react-scroll';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';
import { useState } from 'react';

const BrandPageLayout = ({ model }) => {
  const [lightMode, setLightMode] = useState(false);
  return (
    <div>
      <Element name='introduction'>
        <LazyLoadComponent>
          <BrandHeader />
        </LazyLoadComponent>
      </Element>
      <Element name='model'>
        <LazyLoadComponent>
          <BrandMainSection model={model} lightMode={lightMode} setLightMode={setLightMode} />
        </LazyLoadComponent>
      </Element>
      <Element name='about'>
        <LazyLoadComponent>
          <BrandAbout lightMode={lightMode} />
        </LazyLoadComponent>
      </Element>
      <Element>
        <LazyLoadComponent>
          <BrandFooter lightMode={lightMode} />
        </LazyLoadComponent>
      </Element>
    </div>
  );
};

export default BrandPageLayout;

BrandPageLayout.propTypes = {
  model: PropTypes.object.isRequired,
};
