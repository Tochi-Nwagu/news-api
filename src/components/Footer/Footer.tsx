//import React from 'react';
import('./Footer.css');

const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <div className="footer">
      <p>&copy;{currentYear}</p>
      <p>Build by Hint of Yellow Vanguard Team</p>
    </div>
  );
};

export default Footer;
