import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../constants';
import ClinicalTrialsSearch from './ClinicalTrialsSearch';

// Define types for the dashboard data
interface ClinicalTrial {
  title: string;
}

interface Article {
  title: string;
}

interface SupportGroup {
  name: string;
}

interface DashboardData {
  trials: ClinicalTrial[];
  articles: Article[];
  supportGroups: SupportGroup[];
}

const HomeDashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData>({ trials: [], articles: [], supportGroups: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/dashboard`);
        const data: DashboardData = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='p-4 bg-[#d7dbe2]'>
      <ClinicalTrialsSearch />
      {data && data.trials.length > 0 && (
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
