import { isEmpty } from 'lodash';
import React from 'react';
import Identification from './Indentification';
import Status from './Status';
import SponsorCollaborators from './Sponsers';
import Description from './Description';
import ParticipantFlow from './ParticipantFlow';
import BaselineCharacteristics from './BaselineCharacteristics';

// Define types for the StudyDetails props
interface ProtocolSection {
  identificationModule?: any;
  statusModule?: any;
  sponsorCollaboratorsModule?: any;
  descriptionModule?: any;
}

interface ResultsSection {
  participantFlowModule?: any;
  baselineCharacteristicsModule?: any;
}

interface StudyDetailsProps {
  data: {
    protocolSection?: ProtocolSection;
    resultsSection?: ResultsSection;
  };
}

const StudyDetails: React.FC<StudyDetailsProps> = ({ data }) => {
  const { protocolSection, resultsSection } = data;
  const showProtocolSection = !isEmpty(protocolSection);
  const showResults = !isEmpty(resultsSection);

  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-bold mb-4">Study Details</h1>

      {/* Protocol Section */}
      {showProtocolSection && (
        <>
          <section className="flex flex-col md:flex-row gap-6">
            <Identification data={protocolSection?.identificationModule} />
            <Status data={protocolSection?.statusModule} />
            <SponsorCollaborators data={protocolSection?.sponsorCollaboratorsModule} />
          </section>

          <Description data={protocolSection?.descriptionModule} />
        </>
      )}

      {/* Results Section */}
      {showResults && (
        <>
          <h1 className="text-2xl font-bold mb-4">Results</h1>
          <ParticipantFlow data={resultsSection?.participantFlowModule} />
          <BaselineCharacteristics data={resultsSection?.baselineCharacteristicsModule} />
        </>
      )}

      {/* More details can be added similarly for each module */}
    </div>
  );
};

export default StudyDetails;
