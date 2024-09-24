import React, { useState, ChangeEvent, FormEvent } from 'react';
import { API_BASE_URL } from '../constants';

// Define the type for the form data
interface FormData {
  name: string;
  cancerType: string;
  stage: string;
  currentTreatment: string;
  medicalRecords: File | null;
}

const PatientOnboarding: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    cancerType: '',
    stage: '',
    currentTreatment: '',
    medicalRecords: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, medicalRecords: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      // FormData.append expects the second argument to be string or Blob (File is a subtype of Blob)
      const value = formData[key as keyof FormData];
      if (value instanceof File || typeof value === 'string') {
        form.append(key, value);
      }
    });

    try {
      await fetch(`${API_BASE_URL}/onboard`, {
        method: 'POST',
        body: form,
      });
      alert('Patient profile created successfully!');
    } catch (error) {
      console.error('Error during onboarding:', error);
      alert('Error creating profile.');
    }
  };

  return (
    <div className='p-4 bg-gray-100 rounded-lg shadow-md'>
      <h2 className='text-xl font-semibold'>Patient Onboarding</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Full Name'
          className='w-full p-2 mt-2 border border-gray-300 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='text'
          name='cancerType'
          placeholder='Cancer Type'
          className='w-full p-2 mt-2 border border-gray-300 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='text'
          name='stage'
          placeholder='Stage'
          className='w-full p-2 mt-2 border border-gray-300 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='text'
          name='currentTreatment'
          placeholder='Current Treatment'
          className='w-full p-2 mt-2 border border-gray-300 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='file'
          name='medicalRecords'
          className='w-full p-2 mt-2 border border-gray-300 rounded-lg'
          onChange={handleFileChange}
        />
        <button type='submit' className='w-full mt-4 p-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PatientOnboarding;
