const Status = ({ data }) => {
  return (
    <section className='mb-6'>
      <h2 className='text-xl font-semibold mb-2'>Status</h2>
      <p>
        <strong>Overall Status:</strong> {data.overallStatus}
      </p>
      <p>
        <strong>Status Verified Date:</strong> {data.statusVerifiedDate}
      </p>
      <p>
        <strong>Start Date:</strong> {data.startDateStruct.date}
      </p>
      <p>
        <strong>Completion Date:</strong> {data.completionDateStruct.date}
      </p>
    </section>
  );
};

export default Status;
