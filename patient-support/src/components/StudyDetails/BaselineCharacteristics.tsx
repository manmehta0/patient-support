import React from 'react';

// Define types for the props
interface Group {
  title: string;
  description: string;
}

interface BaselineCharacteristicsData {
  populationDescription: string;
  groups?: Group[];
}

interface BaselineCharacteristicsProps {
  data: BaselineCharacteristicsData;
}

const BaselineCharacteristics: React.FC<BaselineCharacteristicsProps> = ({ data }) => {
  return (
    <section className="flex-1 flex-grow mb-6">
      <h2 className="text-xl font-semibold mb-2">Baseline Characteristics</h2>
      <p>
        <strong>Population Description:</strong> {data.populationDescription}
      </p>
      {data.groups && data.groups.length > 0 && (
        <div>
          <strong>Groups:</strong>
          <ul>
            {data.groups.map((group, index) => (
              <li key={index}>
                {group.title}: {group.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default BaselineCharacteristics;
