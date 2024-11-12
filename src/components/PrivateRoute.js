import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import UserLayout from './Layout';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = Boolean(localStorage.getItem('userToken'));

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          <UserLayout>
            <Element />
          </UserLayout>
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
