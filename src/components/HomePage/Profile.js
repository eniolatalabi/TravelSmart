import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import CustomButton from './Buttons/CustomButton';

const Profile = () => {
  const [userData, setUserData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    favoritePlaces: [],
    favoriteRestaurants: [],
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-100 min-h-screen flex flex-col items-center justify-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8 text-primary-dark">

        <div className="flex items-center mb-4">
          <FaUserCircle className="text-deep-ocean-blue text-4xl mr-4" />
          <div>
            <h2 className="text-2xl font-bold text-deep-ocean-blue">{userData.fullName}</h2>
            <div className="w-full border-b-2 border-deep-ocean-blue mt-1" />
          </div>
        </div>


        <div className="mb-6">
          <label className="block text-secondary text-lg font-semibold">Email</label>
          <p className="text-primary-dark">{userData.email}</p>
        </div>


        <div className="mb-6">
          <h3 className="text-xl font-bold text-deep-ocean-blue">Favorite Places</h3>
          <div className="w-full border-b-2 border-deep-ocean-blue mb-2" />
          <ul className="list-disc list-inside">
            {userData.favoritePlaces.length > 0 ? (
              userData.favoritePlaces.map((place, index) => (
                <li key={index} className="text-primary-dark">{place}</li>
              ))
            ) : (
              <li className="text-secondary">No favorite places added yet.</li>
            )}
          </ul>
        </div>


        <div className="mb-6">
          <h3 className="text-xl font-bold text-deep-ocean-blue">Favorite Restaurants</h3>
          <div className="w-full border-b-2 border-deep-ocean-blue mb-2" />
          <ul className="list-disc list-inside">
            {userData.favoriteRestaurants.length > 0 ? (
              userData.favoriteRestaurants.map((restaurant, index) => (
                <li key={index} className="text-primary-dark">{restaurant}</li>
              ))
            ) : (
              <li className="text-secondary">No favorite restaurants added yet.</li>
            )}
          </ul>
        </div>


        <CustomButton
          color="neutral"
          size="large"
          className="bg-deep-ocean-blue text-white hover:bg-primary-dark w-full mt-4"
          onClick={handleLogout}
        >
          Log Out
        </CustomButton>
      </div>
    </div>
  );
};

export default Profile;
