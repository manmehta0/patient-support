import React, { useState } from 'react';
import { API_BASE_URL, cancerTypes } from '../../constants';
import { ClinicalTrials } from '../PatientDashboard/ClinicalTrials';
import PopUpModal from '@/components/PopupModal';
import { DropdownSelect } from '@/components/Dropdown';
import LocationAutocomplete from '@/components/LocationAutoComplete';
import StudyDetails from '@/components/StudyDetails';
import { Spinner } from '@/shadcn/ui/spinner';
import { Button } from '@/shadcn/ui/button';
// import { Popover, PopoverContent } from '@/shadcn/ui/popover';

// Define the types for the state and props
interface Study {
  [key: string]: any; // Define more specific fields if you know the structure
}

interface ClinicalTrial {
  nct_id: string;
  [key: string]: any; // Define more specific fields if you know the structure
}

interface ClinicalTrialsSearchProps {}

const ClinicalTrialsSearch: React.FC<ClinicalTrialsSearchProps> = () => {
  const [cancerType, setCancerType] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [trials, setTrials] = useState<ClinicalTrial[]>([]);
  const [matchScore, setMatchScore] = useState<number>(0);
  const [study, setStudy] = useState<Study>({});
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ cancerType: string; location: string }>({
    cancerType: '',
    location: '',
  });
  const [isLoading, showLoader] = useState<boolean>(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const getStudy = async (nct_id: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/studies/${nct_id}`);
      const data = await response.json();
      setStudy(data);
      openModal();
    } catch (error) {
      console.error('Error fetching trials:', error);
    }
  };

  const validateFields = (): boolean => {
    let valid = true;
    const newErrors = { cancerType: '', location: '' };

    if (!cancerType) {
      newErrors.cancerType = 'Please select a cancer type';
      valid = false;
    }

    // Check if the location is a valid postal code (only numbers and 5 digits for US postal code)
    const postalCodePattern = /^\d{5}$/;
    if (!location || !postalCodePattern.test(location)) {
      newErrors.location = 'Please enter a valid zip code (5 digits)';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSearch = async () => {
    if (!validateFields()) return;
    showLoader(true);
    setStudy({});
    try {
      const response = await fetch(
        `${API_BASE_URL}/clinical-trials?cancerType=${cancerType}&location=${location}`
      );
      const data = await response.json();
      setTrials(data.trials);
      calculateMatchScore(data.trials);
    } catch (error) {
      console.error('Error fetching trials:', error);
    } finally {
      showLoader(false);
    }
  };

  const calculateMatchScore = (trials: ClinicalTrial[]) => {
    const score = trials.length * 10;
    setMatchScore(score);
  };

  return (
    <section className="flex w-full md:flex-col rounded-lg shadow-md relative">
      <section className="flex w-full flex-col md:flex-row rounded-lg shadow-md gap-4">
        <article className="w-full md:max-w-sm p-4 bg-gray-100">
          <h2 className="text-xl font-semibold pb-2">Search Clinical Trials</h2>
          <DropdownSelect data={cancerTypes} onChange={setCancerType} />
          {errors.cancerType && <p className="text-red-700 text-sm">{errors.cancerType}</p>}

          {/* Use the new LocationAutocomplete component */}
          <LocationAutocomplete
            location={location}
            setLocation={setLocation}
            error={errors.location}
            setError={(error) => setErrors({ ...errors, location: error })}
          />
          <Button
            onClick={handleSearch}
            className="mt-4 w-full md:max-w-sm p-2 bg-blue-600 text-white rounded-lg hover:bg-purple-700"
          >
            Search
          </Button>
        </article>
        <article className="p-4 bg-gray-100">
          <h2 className="text-xl font-semibold pb-2">Match Score: {matchScore}</h2>
          {isLoading ? <Spinner /> : <ClinicalTrials getStudy={getStudy} trials={trials} />}
        </article>
      </section>
      <PopUpModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <StudyDetails data={study} />
      </PopUpModal>
    </section>
  );
};

export default ClinicalTrialsSearch;
