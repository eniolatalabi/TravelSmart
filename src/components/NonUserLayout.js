import React from 'react';
import NonUserHeader from './Landing/Header';
import NonUserFooter from './Landing/Footer';

const NonUserLayout = ({ children }) => {
  return (
    <div>
      <NonUserHeader />
      <main>{children}</main>
      <NonUserFooter />
    </div>
  );
};

export default NonUserLayout;
