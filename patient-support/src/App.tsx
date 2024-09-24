import React, { useEffect, useState } from 'react';
import { AppRouter } from './Router';

const randomIntFromInterval = (min: number, max: number): number => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const App: React.FC = () => {
  const [patientId, setPatientId] = useState<number>(-1);

  useEffect(() => {
    setPatientId(randomIntFromInterval(1, 1000));
  }, []);

  return <AppRouter patientId={patientId} />;
};

export default App;
