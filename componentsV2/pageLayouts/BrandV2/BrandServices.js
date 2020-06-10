import React, { useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import theme from '../../../utilities/theme';

const BrandServices = () => (
  <>
    <div className='services-container'>
      <Controller>
        <Scene duration={400} classToggle='expanded'>
          <div className='photo-information-container'>
            <PhotoInformationBox />
          </div>
        </Scene>
        <Scene duration={400} classToggle='expanded'>
          <div className='photo-information-container'>
            <PhotoInformationBox />
          </div>
        </Scene>
        <Scene duration={400} classToggle='expanded'>
          <div className='photo-information-container'>
            <PhotoInformationBox />
          </div>
        </Scene>
        <Scene duration={400} classToggle='expanded'>
          <div className='photo-information-container'>
            <PhotoInformationBox />
          </div>
        </Scene>
      </Controller>
    </div>
    <style jsx>{`
      .services-container {
        width: ${theme.boxSizes.mainContentWidthDesktop};
        background-color: ${theme.colors.black};
        color: ${theme.colors.white};
        margin-left: ${theme.boxSizes.mainContentMarginLeftDesktop};
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
          <button onClick={() => setOpen(!open)}>{open ? 'SHOW LESS' : 'READ MORE'}</button>
        </div>
      </div>
      <style jsx>{`
        .photo-information-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        img {
          width: 50%;
          height: auto;
          transform: scale(1);
          transition: all 1s;
        }
        p {
          font-size: 1rem;
        }
        .service-text-container {
          background: ${theme.colors.white};
          color: ${theme.colors.black};
          margin-left: -10%;
          z-index: 100;
          padding: 20px;
          box-shadow: 0 0 12px #0d0d0d87;
        }
        .text-wrapper {
          height: auto;
          max-height: ${open ? '400px' : '80px'};
          transition: max-height 0.5s ease-out;
          overflow: hidden;
        }
        h3 {
          margin: 0;
          font-size: 1.3rem;
        }
      `}</style>
      <style jsx global>{`
        .expanded img {
          transform: scale(1.2);
          transition: all 1s;
          border: 2px solid green;
        }
      `}</style>
    </>
  );
};
