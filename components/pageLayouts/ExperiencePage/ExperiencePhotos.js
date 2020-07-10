import React, { useContext, useEffect, useState } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import ProgressiveImage from '../../ReusableComponents/Images/ProgressiveImage';

const images = [
  {
    url: 'https://vg-images.condecdn.net/image/b0GKRp83JG7/crop/405/portrait/f/kaimin_fw18_001.jpg',
    description: 'Kaimin Image 1',
  },
  {
    url:
      'https://img.nfstatic.com/YvzPfkI_JvDEU_jwNfg-jCCaTPzyWZyj41CTPBzlrAY/fill/374/560/ce/1/czM6Ly9ub3dmYXNo/aW9uLXByb2QtbWVk/aWEvcGhvdG9zLzI4/Mzk0LzExMjIwMi9r/YWltaW4tcmVhZHkt/dG8td2Vhci1zcHJp/bmctc3VtbWVyLTIw/MjAtbmV3LXlvcmst/MjgzOTQtbG9va3Mt/MjAxOTA5MTEtMTM2/MTQwOS9LYWltaW4t/UlRXLVNTMjAtTmV3/LVlvcmstMjUwOS0x/NTY4MTYxODY4Lmpw/Zw.jpg',
    description: 'Kaimin Image 2',
  },
  {
    url:
      'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMTEwODEwMy9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTYxMjE2NDg2OH0.uxT2vADG4c4h87MJaOfF_aC7Kguim-654EwI_yK2smI/img.jpg?width=980',
    description: 'Kaimin Image 3',
  },
];

const ExperiencePhotos = () => {
  const options = {
    buttons: {
      showAutoplayButton: false,
      showFullScreenButton: false,
      showThumbnailsButton: false,
      showDownloadButton: false,
    },
  };
  return (
    <>
      <SRLWrapper options={options}>
        <div className='grid grid-cols-3 gap-4 pt-4'>
          {images.map((image) => (
            <div>
              <ProgressiveImage preview={image.url} image={image.url} alt={image.description} />
            </div>
          ))}
        </div>
      </SRLWrapper>
      <style jsx>{`
        img {
          height: 346px;
          width: 263px;
        }
      `}</style>
    </>
  );
};

export default ExperiencePhotos;
