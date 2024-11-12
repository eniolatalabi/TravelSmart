import React from 'react';
import Header from './HomePage/HomeHead';
import Footer from './MainFooter';

const UserLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default UserLayout;
