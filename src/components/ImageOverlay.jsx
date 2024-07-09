
import React from 'react';
import playButton from '../assets/playButton.png';

const ImageOverlay = ({ src, alt }) => {
  return (
    <div className="relative group">
      <img src={src} alt={alt} className="w-full h-auto" />
      <div className="absolute flex items-center rounded-full justify-center bg-black bg-opacity-50 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={playButton}
                    alt="Play Button"
                    className="w-12 h-12 bg-blend-difference"
                  />
                </div>
    </div>
  );
};

export default ImageOverlay;
