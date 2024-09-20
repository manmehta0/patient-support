// src/components/HomeDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../constants';
import ClinicalTrialsSearch from './ClinicalTrialsSearch';

const HomeDashboard = () => {
  const [data, setData] = useState({ trials: [], articles: [], supportGroups: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/dashboard`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='p-4 bg-[#d7dbe2]'>
      <ClinicalTrialsSearch />
      {data.length && (
        <>
          <h3 className='mt-4'>Relevant Clinical Trials</h3>
          <ul>
            {data.trials.map((trial, index) => (
              <li key={index} className='p-2 border-b border-gray-300'>
                {trial.title}
              </li>
            ))}
          </ul>
          <h3 className='mt-4'>Articles</h3>
          <ul>
            {data.articles.map((article, index) => (
              <li key={index} className='p-2 border-b border-gray-300'>
                {article.title}
              </li>
            ))}
          </ul>
          <h3 className='mt-4'>Nearby Support Groups</h3>
          <ul>
            {data.supportGroups.map((group, index) => (
              <li key={index} className='p-2 border-b border-gray-300'>
                {group.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default HomeDashboard;
