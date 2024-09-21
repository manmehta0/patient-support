import React, { useState } from 'react';
import { API_BASE_URL } from '../constants';

const LocationAutocomplete = ({ location, setLocation, error, setError }) => {
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([]);

  const handleAutocomplete = async (input) => {
    try {
      const response = await fetch(`${API_BASE_URL}/autocomplete?input=${input}`);

      if (response.status === 200) {
        const data = await response.json();
        setAutocompleteSuggestions(data.predictions);
      }
    } catch (error) {
      console.error('Error fetching autocomplete suggestions:', error);
    }
  };

  const handleLocationChange = (e) => {
    const input = e.target.value;
    setLocation(input);

    if (input.length > 2) {
      handleAutocomplete(input);
    }
  };

  const handleSelectSuggestion = (postalCode) => {
    setLocation(postalCode);
    setAutocompleteSuggestions([]); // Clear the suggestions once a postal code is selected
    setError(''); // Clear any previous error
  };

  return (
    <div className='w-full'>
      <input type='text' placeholder='Location (zip code)' value={location} onChange={handleLocationChange} className='w-full max-w-sm p-2 mt-2 border border-gray-300 rounded-lg' />
      {error && <p className='text-red-500'>{error}</p>}

      {/* Render autocomplete suggestions */}
      {autocompleteSuggestions.length > 0 && (
        <ul className='bg-white border border-gray-300 rounded-md mt-2'>
          {autocompleteSuggestions.map((suggestion, index) => (
            <li key={index} className='p-2 cursor-pointer hover:bg-gray-200' onClick={() => handleSelectSuggestion(suggestion.postal_code)}>
              {suggestion.description} ({suggestion.postal_code})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationAutocomplete;
