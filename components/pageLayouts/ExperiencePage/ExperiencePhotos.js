import React, { useContext, useEffect, useState } from 'react';

const images = [
  'https://vg-images.condecdn.net/image/b0GKRp83JG7/crop/405/portrait/f/kaimin_fw18_001.jpg',
  'https://vmagazine.com/wp-content/uploads/2019/11/KAIMIN-2.jpg',
  'https://vmagazine.com/wp-content/uploads/2019/11/Kaimin1.png',
];
const ExperiencePhotos = () => {
  return (
    <div>
      {images.map((image) => (
        <img src={image} alt={image} />
      ))}
    </div>
  );
};

export default ExperiencePhotos;
