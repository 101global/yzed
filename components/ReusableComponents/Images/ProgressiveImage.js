import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

const ProgressiveImage = ({ preview, image, alt, imageStyleClass, divStyleClass }) => {
  const [currentImage, setCurrentImage] = useState(preview);
  const [loading, setLoading] = useState(true);

  const fetchImage = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setTimeout(() => {
        setCurrentImage(loadingImage.src);
        setLoading(false);
      }, 500);
    };
  };

  useEffect(() => {
    fetchImage(image);
  }, [preview]);

  return (
    <div className={`overflow-hidden ${divStyleClass}`}>
      <img
        style={{
          filter: `${loading ? 'blur(20px)' : ''}`,
          transition: '1s filter linear',
          background: 'grey',
        }}
        src={currentImage}
        alt={alt}
        className={`w-full ${imageStyleClass}`}
      />
    </div>
  );
};

export default ProgressiveImage;

ProgressiveImage.propTypes = {
  preview: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
