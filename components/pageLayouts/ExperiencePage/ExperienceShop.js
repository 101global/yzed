import React, { useContext, useEffect, useState } from 'react';
import WhiteLink from '../../ReusableComponents/Links/WhiteLink';

const image = {
  url:
    'https://vg-images.condecdn.net/image/gvaRG7ZErdW/crop/1440/0.5235602094240838/f/kaimin_fw18_168.jpg',
  alt: 'Kaimin Fashion',
};

const ExperienceShop = () => {
  return (
    <>
      <div className='text-center'>
        <div className='flex flex-row justify-between items-center mb-8'>
          <h2 className='text-xl'>Product Name</h2>
          <h3 className='text-xl'>$245.23</h3>
        </div>
        <img className='mb-6' src={image.url} alt={image.alt} />
        <WhiteLink title='SHOP KAIMIN' />
      </div>
      <style jsx>{`
        h2,
        h3 {
          display: inline-block;
        }
        h2:after {
          content: '';
          background-image: linear-gradient(to right, #a891d9, #73cfdb, #a891d9, #73cfdb);
          background-size: 260% 200%;
          width: 102%;
          margin-left: -1%;
          margin-top: -12px;
          height: 10px;
          display: block;
        }
      `}</style>
    </>
  );
};

export default ExperienceShop;
