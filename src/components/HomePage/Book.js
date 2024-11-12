import React, { useState } from 'react';
import axios from 'axios';

const BookNow = () => {
  const [flightSearch, setFlightSearch] = useState({
    origin: '',
    destination: '',
    date: '',
    returnDate: '',
    travelers: 1,
    classType: 'Economy',
    itineraryType: 'ONE_WAY',
  });

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFlightSearch({
      ...flightSearch,
      [name]: value,
    });
  };

  const handleFlightSearch = async () => {
    console.log('Flight search criteria:', flightSearch);
    setLoading(true);
    setError(null);

    const options = {
      method: 'GET',
      url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights',
      params: {
        sourceAirportCode: flightSearch.origin,
        destinationAirportCode: flightSearch.destination,
        itineraryType: flightSearch.itineraryType,
        classOfService: flightSearch.classType.toUpperCase(),
        date: flightSearch.date,
        returnDate: flightSearch.returnDate || undefined, // Only include return date if applicable
        sortOrder: 'ML_BEST_VALUE',
        numAdults: flightSearch.travelers,
        currencyCode: 'USD',
        region: 'USA',
      },
      headers: {
        'x-rapidapi-key': '411a5f92a3msh33beef3e623cb13p159581jsn566d57ce7b95',
        'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      console.log('API Response:', response.data);
      setFlights(response.data.data || []);
    } catch (error) {
      setError('Failed to fetch flight data. Please try again.');
      console.error('Error fetching flight data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-200 min-h-screen p-6">
 
      <section className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-2xl font-bold mb-6">Book Your Flight</h1>
        <div className="max-w-6xl">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium text-xs sm:text-sm">From:</label>
              <input
                type="text"
                name="origin"
                value={flightSearch.origin}
                onChange={handleInputChange}
                placeholder="Enter Origin (e.g., JFK)"
                className="w-full p-1 sm:p-2 border rounded text-xs sm:text-sm"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-xs sm:text-sm">To:</label>
              <input
                type="text"
                name="destination"
                value={flightSearch.destination}
                onChange={handleInputChange}
                placeholder="Enter Destination (e.g., DEL)"
                className="w-full p-1 sm:p-2 border rounded text-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block mb-1 font-medium text-xs sm:text-sm">Itinerary Type:</label>
              <select
                name="itineraryType"
                value={flightSearch.itineraryType}
                onChange={handleInputChange}
                className="w-full p-1 sm:p-2 border rounded text-xs sm:text-sm"
              >
                <option value="ONE_WAY">One Way</option>
                <option value="ROUND_TRIP">Round Trip</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium text-xs sm:text-sm">Travelers:</label>
              <input
                type="number"
                name="travelers"
                value={flightSearch.travelers}
                onChange={handleInputChange}
                min="1"
                className="w-full p-1 sm:p-2 border rounded text-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block mb-1 font-medium text-xs sm:text-sm">Date:</label>
              <input
                type="date"
                name="date"
                value={flightSearch.date}
                onChange={handleInputChange}
                className="w-full p-1 sm:p-2 border rounded text-xs sm:text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-xs sm:text-sm">Return Date (Optional):</label>
              <input
                type="date"
                name="returnDate"
                value={flightSearch.returnDate}
                onChange={handleInputChange}
                className="w-full p-1 sm:p-2 border rounded text-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-1 font-medium text-xs sm:text-sm">Class Type:</label>
            <select
              name="classType"
              value={flightSearch.classType}
              onChange={handleInputChange}
              className="w-full p-1 sm:p-2 border rounded text-xs sm:text-sm"
            >
              <option value="Economy">Economy</option>
              <option value="Premium Economy">Premium Economy</option>
              <option value="Business">Business</option>
              <option value="First Class">First Class</option>
            </select>
          </div>

          <button
            onClick={handleFlightSearch}
            className="w-32 mt-6 py-2 sm:py-2 bg-blue-600 text-white rounded text-xs sm:text-sm hover:bg-blue-800 transition duration-300"
          >
            Search Flights
          </button>
        </div>


        <div className="mt-8 w-full max-w-2xl bg-gray-100 p-4 rounded shadow-md">
          <h2 className="text-lg font-bold mb-4">Available Flights</h2>
          {loading ? (
            <p className="text-blue-500">Loading flights...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <ul className="space-y-2">
              {flights.length > 0 ? (
                flights.map((flight, index) => (
                  <li key={index} className="border-b py-2 text-xs sm:text-sm">
                    {`${flight.sourceAirportCode} to ${flight.destinationAirportCode} - $${flight.price}`}
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No flights available for your search criteria</li>
              )}
            </ul>
          )}
        </div>
      </section>


      <section className="min-h-screen p-6 flex flex-col justify-center items-center bg-gray-100" id="hotels">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Recommended Hotels</h1>
        <p className="text-sm sm:text-base">Hotels will be displayed here once we fetch data from the API.</p>
      </section>


      <section className="min-h-screen p-6 flex flex-col justify-center items-center bg-white" id="restaurants">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Recommended Restaurants</h1>
        <p className="text-sm sm:text-base">Restaurants will be displayed here once we fetch data from the API.</p>
      </section>


      <section className="min-h-screen p-6 flex flex-col justify-center items-center bg-gray-100" id="rental-cars">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Rental Cars</h1>
        <p className="text-sm sm:text-base">Rental cars will be displayed here once we fetch data from the API.</p>
      </section>
    </div>
  );
};

export default BookNow;
