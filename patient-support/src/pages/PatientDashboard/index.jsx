import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../constants";
import { PatientInfo } from "./PatientInfo";
import { OutcomePrediction } from "./OutcomePrediction";
import { ClinicalTrials } from "./ClinicalTrials";
import { TreatmentRecommendations } from "./TreatmentRecommandations";
import { WearableDataAnalysis } from "./WearableDataAnalysis";
import { FeedbackAnalysis } from "./FeedbackAnalysis";
import { FaRobot } from 'react-icons/fa';
import Chatbot from "./ChatBot";

export const PatientDashboard = ({ patientId }) => {
  const [dashboardData, setDashboardData] = useState(null);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/patient-dashboard?patient_id=${patientId}`);
        const data = await response.json();
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };
    if (patientId > 0) {
      fetchDashboardData();
    }
  }, [patientId]);

  if (!dashboardData) return <div className='text-center'>Loading...</div>;

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>Patient Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <PatientInfo patientInfo={dashboardData.patient_info} />
        <OutcomePrediction prediction={dashboardData.outcome_prediction} />
        <ClinicalTrials trials={dashboardData.clinical_trials} />
        <TreatmentRecommendations recommendations={dashboardData.treatment_recommendations} />
        <WearableDataAnalysis wearableData={dashboardData.wearable_data_analysis} />
        <FeedbackAnalysis feedback={dashboardData.recent_feedback} sentiment={dashboardData.sentiment_analysis} />
      </div>
      <button onClick={() => setIsChatbotOpen(!isChatbotOpen)} className='fixed bottom-4 right-4 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 focus:outline-none flex items-center justify-center'>
        <FaRobot className='text-2xl' />
        <span className='ml-2'>Ask Gini</span>
      </button>

      {/* Chatbot Flyout */}
      <div className={`fixed bottom-3 right-0 h-[95%] transition-transform duration-300 ease-in-out transform ${isChatbotOpen ? 'translate-x-0' : 'translate-x-full'} bg-gray-800 border border-gray-700 rounded-lg shadow-lg`}>{isChatbotOpen && <Chatbot onClose={() => setIsChatbotOpen(false)} />}</div>
    </div>
  );
};