import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Slider from 'react-slick';
import resort1 from './HomeAssets/resort.avif';
import resort2 from './HomeAssets/resort2.avif';
import resort3 from './HomeAssets/resort3.avif';
import resort4 from './HomeAssets/resort4.avif';
import resort5 from './HomeAssets/resort5.avif';
import resort6 from './HomeAssets/resort6.avif';
import resort7 from './HomeAssets/resort7.avif';

const Deals = () => {
  const [location, setLocation] = useState(null);
  const [deals, setDeals] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '5ae2e3f221c38a28845f05b663bdd0d971c438f4f1763ed45fc31dc5';

  const images = [resort1, resort2, resort3, resort4, resort5, resort6, resort7];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  useEffect(() => {
    const fetchDeals = async () => {
      if (!location) return;
      setLoading(true);
      try {
        const url = `https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=${location.longitude}&lat=${location.latitude}&format=json&apikey=${API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch deals');
        }
        const data = await response.json();
        const mappedDeals = data.map((place, index) => ({
          id: place.xid,
          title: place.name,
          description: place.kinds.split(',').slice(0, 2).join(', '),
          image: images[index % images.length],
          price: Math.floor(Math.random() * 100) + 20,
        }));
        setDeals(mappedDeals);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching deals:', error);
        setError('Failed to fetch deals. Please try again later.');
        setLoading(false);
      }
    };

    fetchDeals();
  }, [location, API_KEY]);

  const toggleFavorite = (dealId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(dealId)
        ? prevFavorites.filter((fav) => fav !== dealId)
        : [...prevFavorites, dealId]
    );
  };

  const filteredDeals = deals.filter((deal) => {
    if (filter === 'price') {
      return true; 
    }
    return true;
  });

  if (loading) {
    return <p className="text-white">Loading deals...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }


  const sliderSettings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px', 
    arrows: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '30px', 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px', 
        },
      },
    ],
  };

  return (
    <section id="deals" className="min-h-screen bg-gradient-primary flex flex-col items-center p-4">
      <div className="flex justify-between items-center w-full max-w-7xl mb-6">
        <h2 className="text-3xl font-bold text-white">Exclusive Deals</h2>
        <div className="relative">
          <select
            className="border-2 border-white bg-transparent text-black p-2 rounded-md"
            onChange={(e) => setFilter(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled hidden>
              Filter by
            </option>
            <option value="price">Price</option>
            <option value="location">Location</option>
          </select>
        </div>
      </div>


      <div className="w-full max-w-7xl flex justify-bewteen align-center mt-20">
        <Slider {...sliderSettings} className="w-full">
          {filteredDeals.map((deal) => (
            <div key={deal.id} className="mx-2  bg-white rounded-lg shadow-lg p-4 flex-shrink-0 text-center">
              <img src={deal.image} alt={deal.title} className="w-full h-40 object-cover rounded-md" />
              <div className="mt-2">
                <h3 className="text-lg font-semibold">{deal.title}</h3>
                <p className="text-gray-600">{deal.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xl font-bold">${deal.price}</span>
                  <div className="cursor-pointer" onClick={() => toggleFavorite(deal.id)}>
                    {favorites.includes(deal.id) ? (
                      <AiFillHeart className="text-red-500" />
                    ) : (
                      <AiOutlineHeart className="text-gray-500" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Deals;
