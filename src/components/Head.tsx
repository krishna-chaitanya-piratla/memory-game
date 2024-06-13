import React from 'react';
import { Helmet } from 'react-helmet';

const Head: React.FC = () => (
  <Helmet>
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.cdnfonts.com/css/wotfard"
      rel="stylesheet"
    />
    <link 
      href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap" 
      rel="stylesheet" 
    />
  </Helmet>
);

export default Head;
