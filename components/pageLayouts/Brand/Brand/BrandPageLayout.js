import BrandAbout from './BrandAbout';
import BrandFooter from './BrandFooter';
import BrandHeader from './BrandHeader';
import BrandMainSection from './BrandMainSection';
import { Element } from 'react-scroll';
import { useState } from 'react';

const BrandPageLayout = ({ model }) => {
  const [lightMode, setLightMode] = useState(false);
  return (
    <div>
      <Element name='introduction'>
        <BrandHeader />
      </Element>
      <Element name='model'>
        <BrandMainSection model={model} lightMode={lightMode} setLightMode={setLightMode} />
      </Element>
      <Element name='about'>
        <BrandAbout lightMode={lightMode} />
      </Element>
      <Element>
        <BrandFooter lightMode={lightMode} />
      </Element>
    </div>
  );
};

export default BrandPageLayout;
