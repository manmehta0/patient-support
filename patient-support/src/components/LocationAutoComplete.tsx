import React, { useState } from 'react';
import { useLoadScript, Autocomplete, Libraries } from '@react-google-maps/api';

// Define the prop types for the component
interface LocationAutocompleteProps {
  location: string;
  setLocation: (location: string) => void;
  error: string;
  setError: (error: string) => void;
}

const libraries: Libraries = ['places'];

const LocationAutocomplete: React.FC<LocationAutocompleteProps> = ({ location, setLocation, error, setError }) => {
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string, // Ensure proper typing
    libraries,
  });

  const onLoad = (autoC: google.maps.places.Autocomplete) => {
    setAutocomplete(autoC);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();

      if (place.address_components) {
        const postalCodeComponent = place.address_components.find((component) =>
          component.types.includes('postal_code')
        );
        const postalCode = postalCodeComponent ? postalCodeComponent.long_name : '';

        if (postalCode) {
          setLocation(postalCode);
          setError(''); // Clear any previous errors
        } else {
          setError('Selected location must have a postal code');
        }
      } else {
        setError('Invalid place selected, try again');
      }
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full'>
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} options={{ types: ['geocode'] }}>
        <input
          type='text'
          placeholder='Location (zip code)'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className='w-full md:max-w-md p-2 mt-2 border border-gray-300 rounded-lg'
        />
      </Autocomplete>
      {error && <p className='text-red-700 text-sm'>{error}</p>}
    </div>
  );
};

export default LocationAutocomplete;
