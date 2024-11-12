import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Link as ScrollLink } from 'react-scroll'; 

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);  


  const pages = [
    { name: 'Book', route: '/book' },
    { name: 'Community', route: '/community' },
    { name: 'Contact', route: '/contact' },
    { name: 'Destination', route: '/destination' }
  ];

  const sections = [
    { name: 'Review', id: 'review' },
    { name: 'Tips', id: 'traveltips' },
    { name: 'Deal', id: 'deals' },
    { name: 'Blog', id: 'review' }
  ];

 
  const allResults = [...pages, ...sections];


  const handleSearch = () => {
    setSearchClicked(true); 

    if (!searchTerm) {
      setFilteredResults([]); 
      return;
    }


    const filtered = allResults.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredResults(filtered);
  };


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-component w-full p-4">

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress} 
        placeholder="Search pages or sections (e.g., Book, Deals, TravelTips)..."
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
      />

    
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Search
      </button>

   
      <ul className="mt-4">
        {filteredResults.length > 0 ? (
          filteredResults.map((item, index) => (
            <li key={index} className="mb-2">
              {item.route ? (

                <Link
                  to={item.route}
                  className="cursor-pointer text-blue-500 hover:underline"
                >
                  {item.name}
                </Link>
              ) : (

                <ScrollLink
                  to={item.id}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-blue-500 hover:underline"
                >
                  {item.name}
                </ScrollLink>
              )}
            </li>
          ))
        ) : (
 
          searchClicked && <p>No results found. Try 'Book', 'Community', 'Review', etc.</p>
        )}
      </ul>
    </div>
  );
};

export default SearchComponent;
