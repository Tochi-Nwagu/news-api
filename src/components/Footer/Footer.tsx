//import React from 'react';

const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <div>
      <p>&copy;{currentYear}</p>
      <p>Build by Yellow Night Vanguard Team</p>
    </div>
  );
};

export default Footer;
