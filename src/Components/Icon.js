// Icon.js
import React from 'react';
import imageUrls from './Imageurls'; // Import the imageUrls object


const Icon = ({ iconName, className }) => {
  const imageUrl = imageUrls[iconName];
  if (!imageUrl) return null; // Return null if the iconName is not found in the imageUrls

  const iconStyle = {
    background: `center / cover no-repeat url('${imageUrl}')`,
    /* Add other common styles here if needed */
  };

   // Combine the provided className and 'iconsIntro' class for the icon div
   const combinedClassName = `iconsIntro ${className || ''}`;

   return <div className={combinedClassName} style={iconStyle}></div>;
};

export default Icon;
