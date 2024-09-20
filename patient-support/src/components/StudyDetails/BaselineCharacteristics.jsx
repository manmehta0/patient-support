const BaselineCharacteristics = ({ data }) => {
  return (
    <section className='flex-1 flex-grow mb-6'>
      <h2 className='text-xl font-semibold mb-2'>Baseline Characteristics</h2>
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
