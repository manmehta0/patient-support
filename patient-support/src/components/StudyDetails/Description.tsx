import React from 'react';

// Define types for the props
interface DescriptionData {
  briefSummary: string;
  detailedDescription: string;
}

interface DescriptionProps {
  data: DescriptionData;
}

const Description: React.FC<DescriptionProps> = ({ data }) => {
  return (
    <section className='flex-1 flex-grow mb-6 gap-6'>
      <h2 className='text-xl font-semibold mb-2'>Description</h2>
      <p className='whitespace-pre-line'>
        <strong>Brief Summary:</strong> {data.briefSummary}
      </p>
      <article className='mt-6 whitespace-pre-line'>
        <strong>Detailed Description:</strong>
        <p className='pt-6'>{data.detailedDescription}</p>
      </article>
    </section>
  );
};

export default Description;
