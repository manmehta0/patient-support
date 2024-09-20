const Identification = ({ data }) => {
  return (
    <section className='max-w-3xl mb-6'>
      <h2 className='text-xl font-semibold mb-2'>Identification</h2>
      <p>
        <strong>NCT ID:</strong> {data.nctId}
      </p>
      <p>
        <strong>Brief Title:</strong> {data.briefTitle}
      </p>
      <p>
        <strong>Official Title:</strong> {data.officialTitle}
      </p>
      <p>
        <strong>Organization:</strong> {data.organization.fullName}
      </p>
    </section>
  );
};

export default Identification;
