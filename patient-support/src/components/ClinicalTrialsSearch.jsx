// src/components/ClinicalTrialsSearch.js
import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../constants';
import { ClinicalTrials } from './ClinicalTrials';
import StudyDetailsModal from './StudyDetails/StudyDetailModal';

const ClinicalTrialsSearch = () => {
  const [cancerType, setCancerType] = useState('');
  const [location, setLocation] = useState('');
  const [treatmentPhase, setTreatmentPhase] = useState('');
  const [trials, setTrials] = useState([]);
  const [matchScore, setMatchScore] = useState(0);
  const [study, setStudy] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const getStudy = async (nct_id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/studies/${nct_id}`);
      setStudy(response.data);
      openModal();
    } catch (error) {
      console.error('Error fetching trials:', error);
    }
  };

  const handleSearch = async () => {
    setStudy({});
    try {
      const response = await axios.get(`${API_BASE_URL}/clinical-trials`, {
        params: {
          cancerType,
          location,
          treatmentPhase,
        },
      });
      setTrials(response.data.trials);
      calculateMatchScore(response.data.trials);
    } catch (error) {
      console.error('Error fetching trials:', error);
    }
  };

  const calculateMatchScore = (trials) => {
    // Example logic to calculate match score (customize as needed)
    const score = trials.length * 10; // Simple scoring based on the number of trials found
    setMatchScore(score);
  };

  return (
    <section className='flex md:flex-col rounded-lg shadow-md relative'>
      <section className='flex flex-col md:flex-row rounded-lg shadow-md gap-4'>
        <article className='max-w-sm p-4 bg-gray-100'>
          <h2 className='text-xl font-semibold'>Search Clinical Trials</h2>
          <input type='text' placeholder='Cancer Type' value={cancerType} onChange={(e) => setCancerType(e.target.value)} className='w-full max-w-sm p-2 mt-2 border border-gray-300 rounded-lg' />
          <input type='text' placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} className='w-full max-w-sm p-2 mt-2 border border-gray-300 rounded-lg' />
          <input type='text' placeholder='Treatment Phase' value={treatmentPhase} onChange={(e) => setTreatmentPhase(e.target.value)} className='w-full max-w-sm p-2 mt-2 border border-gray-300 rounded-lg' />
          <button onClick={handleSearch} className='mt-4 w-full max-w-sm p-2 bg-blue-600 text-white rounded-lg hover:bg-purple-700'>
            Search
          </button>
        </article>
        <article className='p-4 bg-gray-100'>
          <h2 className='text-xl font-semibold pb-2'>Match Score: {matchScore}</h2>
          <ClinicalTrials getStudy={getStudy} trials={trials} />
        </article>
      </section>
      <StudyDetailsModal isOpen={modalIsOpen} onRequestClose={closeModal} data={study} />
    </section>
  );
};

export default ClinicalTrialsSearch;
