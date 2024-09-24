export const ClinicalTrials = ({ trials, getStudy }: {trials: any[], getStudy: Function}) => {
  return (
    <div className='bg-white w-full shadow rounded-lg p-6'>
      <h2 className='text-xl font-semibold mb-4'>Relevant Clinical Trials</h2>
      <ul className='list-disc pl-5'>
        {trials.map((trial, index) => (
          <li key={index} onClick={() => getStudy(trial.nct_id)} className='text-blue-500 hover:underline mb-2 hover:cursor-pointer'>
            {trial.official_title}
          </li>
        ))}
      </ul>
    </div>
  );
};