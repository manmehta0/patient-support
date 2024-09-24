import React from 'react';

// Define types for the props
interface Group {
  title: string;
  description: string;
}

interface ParticipantFlowData {
  preAssignmentDetails: string;
  recruitmentDetails: string;
  groups?: Group[];
}

interface ParticipantFlowProps {
  data: ParticipantFlowData;
}

const ParticipantFlow: React.FC<ParticipantFlowProps> = ({ data }) => {
  return (
    <section className="flex-1 flex-grow mb-6">
      <h2 className="text-xl font-semibold mb-2">Participant Flow</h2>
      <p>
        <strong>Pre-assignment Details:</strong> {data.preAssignmentDetails}
      </p>
      <p>
        <strong>Recruitment Details:</strong> {data.recruitmentDetails}
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

export default ParticipantFlow;
