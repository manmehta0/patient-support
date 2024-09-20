const ParticipantFlow = ({ data }) => {
  return (
    <section className='flex-1 flex-grow mb-6'>
      <h2 className='text-xl font-semibold mb-2'>Participant Flow</h2>
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
