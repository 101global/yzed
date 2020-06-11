import { Controller, Scene } from 'react-scrollmagic';
import React, { useState } from 'react';

import theme from '../../../utilities/theme';

const BrandServices = () => (
  <>
    <div className='services-container'>
      <Controller>
        <Scene duration={400} classToggle='expanded'>
          <div className='photo-information-container left'>
            <PhotoInformationBox />
          </div>
        </Scene>
        <Scene duration={400} classToggle='expanded'>
          <div className='photo-information-container right'>
            <PhotoInformationBox />
          </div>
        </Scene>
        <Scene duration={400} classToggle='expanded'>
          <div className='photo-information-container left'>
            <PhotoInformationBox />
          </div>
        </Scene>
        <Scene duration={400} classToggle='expanded'>
          <div className='photo-information-container right'>
            <PhotoInformationBox />
          </div>
        </Scene>
      </Controller>
    </div>
    <style jsx>{`
      .services-container {
        width: 65%;
        background-color: ${theme.colors.black};
        color: ${theme.colors.white};
        margin-left: 25%;
        transition: all 0.5s;
      }
      .photo-information-container {
        min-height: 200px;
        padding: 50px 0;
      }
    `}</style>
    <style jsx global>{``}</style>
  </>
);

export default BrandServices;

const PhotoInformationBox = ({ photo, text }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='photo-information-container'>
        <img src='https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/reserved_image_2_thumb-compressor.jpg' />
        <div className='service-text-container'>
          <div className='text-wrapper'>
            <h3>Heading 1</h3>
            <p>
              I'm baby austin green juice pitchfork organic franzen cornhole messenger bag etsy
              everyday carry. Actually palo santo raw denim, air plant bushwick kitsch pop-up. Tote
              bag blue bottle seitan dreamcatcher tattooed try-hard whatever mumblecore vape
              actually farm-to-table yr. IPhone pour-over four dollar toast, bicycle rights
              biodiesel cliche taxidermy.
            </p>
            <h3>Heading 2</h3>
            <p>
              Tbh hella skateboard typewriter pok pok authentic yr tumblr put a bird on it salvia
              drinking vinegar narwhal iceland godard farm-to-table. Ugh hammock synth DIY master
              cleanse fashion axe deep v chicharrones adaptogen. Church-key la croix distillery
              direct trade flannel, mixtape offal paleo fixie. Yuccie tumblr chia, hell of put a
              bird on it listicle chambray williamsburg iceland four loko. Blog flannel plaid,
              intelligentsia cloud bread live-edge air plant jianbing paleo bushwick banjo hashtag.
            </p>
          </div>
          <button onClick={() => setOpen(!open)}>
            {open ? 'SHOW LESS' : 'READ MORE'}
            <div className={open ? 'arrow-up' : 'arrow-down'}></div>
          </button>
        </div>
      </div>
      <style jsx>{`
        .photo-information-container {
          display: flex;
          flex-direction: row;
          justify-content: start;
          align-items: center;
          position: relative;
          max-height: ${open ? '600px' : '335px'};
          transition: max-height 0.5s ease-out;
          overflow: hidden;
          height: 600px;
        }
        img {
          height: 355px;
          width: 515px;
          transform: scale(1);
          transition: all 1s;
          position: absolute;
          top: 0;
        }
        p {
          font-size: 1rem;
        }
        .service-text-container {
          background: ${theme.colors.white};
          color: ${theme.colors.black};
          margin-left: -10%;
          z-index: 100;
          padding: 30px;
          box-shadow: 0 0 12px #0d0d0d87;
          position: absolute;
          width: 60%;
          left: 40%;
          top: 50%;
          transform: translateY(-50%);
          max-height: ${open ? '550px' : '200px'};
          transition: all 1s ease-out;
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: space-between;
          min-height: 200px;
        }

        .text-wrapper {
          height: auto;
          max-height: ${open ? '400px' : '80px'};
          transition: all 1s ease-out;
          overflow: hidden;
          width: 100%;
        }

        p {
          width: 100%;
          margin-bottom: ${!open && '0px'};
        }
        h3 {
          margin: 0;
          font-size: 1.2rem;
        }
        button {
          border: none;
          background: none;
          padding: 0;
          transition: all 1s ease-out;
        }
        button:after {
          content: '';
          border-bottom: 1px solid ${theme.colors.black};
          width: 80px;
          height: 1px;
          display: block;
        }
        button:hover:after {
          border-bottom: 2px solid ${theme.colors.black};
        }
        .arrow-down {
          display: inline-block;
          margin-left: 10px;
          width: 0;
          height: 0;
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
          border-top: 7px solid ${theme.colors.black};
        }
        .arrow-up {
          display: inline-block;
          margin-left: 10px;
          width: 0;
          height: 0;
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
          border-bottom: 7px solid ${theme.colors.black};
        }
      `}</style>
      <style jsx global>{`
        .expanded img {
          height: 455px;
          width: 655px;
          transition: all 1.5s ease-out;
        }
        .expanded .photo-information-container {
          max-height: 402px;
        }
        .right .service-text-container {
          left: 10% !important;
        }
        .right img {
          right: 10%;
        }
      `}</style>
    </>
  );
};
