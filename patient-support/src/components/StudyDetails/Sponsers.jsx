const SponsorCollaborators = ({ data }) => {
  return (
    <section className='mb-6'>
      <h2 className='text-xl font-semibold mb-2'>Sponsor & Collaborators</h2>
      <p>
        <strong>Responsible Party:</strong> {data.responsibleParty.investigatorFullName}
      </p>
      <p>
        <strong>Lead Sponsor:</strong> {data.leadSponsor.name}
      </p>
      {data.collaborators && data.collaborators.length > 0 && (
        <div>
          <strong>Collaborators:</strong>
          <ul>
            {data.collaborators.map((collaborator, index) => (
              <li key={index}>{collaborator.name}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default SponsorCollaborators;
