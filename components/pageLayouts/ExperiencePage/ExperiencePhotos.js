import React, { useContext, useEffect, useState } from 'react';

const images = [
  {
    url: 'https://vg-images.condecdn.net/image/b0GKRp83JG7/crop/405/portrait/f/kaimin_fw18_001.jpg',
    description: 'Kaimin Image',
  },
  {
    url: 'https://vg-images.condecdn.net/image/b0GKRp83JG7/crop/405/portrait/f/kaimin_fw18_001.jpg',
    description: 'Kaimin Image',
  },
  {
    url: 'https://vg-images.condecdn.net/image/b0GKRp83JG7/crop/405/portrait/f/kaimin_fw18_001.jpg',
    description: 'Kaimin Image',
  },
];

const ExperiencePhotos = () => {
  return (
    <>
      <div className='grid grid-cols-3 gap-4 pt-4'>
        {images.map((image) => (
          <img className='' src={image.url} alt={image.description} />
        ))}
      </div>
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
