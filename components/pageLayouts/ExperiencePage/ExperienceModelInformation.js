import React, { useContext, useEffect, useState } from 'react';
import QRCode from '../../../public/yzed-qr.png';
const ExperienceModelInformation = () => {
  return (
    <>
      <div className='model-information'>
        <div>
          <h2 className='text-xl font-semibold tracking-wider'>3D Model</h2>
          <p className='text-sm font-light tracking-wider leading-normal'>
            This is a 3D model. What a stunning experience. You can twist and turn it around if you
            draaaag her.
          </p>
        </div>
        <img src={QRCode} />
      </div>
      <style jsx>{`
        h2 {
          display: inline-block;
          margin-bottom: 25px;
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
        .model-information {
          display: grid;
          grid-template-columns: 1fr 100px;
          grid-gap: 25px;
        }
        p {
          width: 100%;
        }
        img {
          width: 100px;
        }
      `}</style>
    </>
  );
};

export default ExperienceModelInformation;
