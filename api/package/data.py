"""
data.py: Contains mock data used for testing and demonstration purposes.
"""

import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# Mock patient data with demographic, cancer, and treatment information
MOCK_PATIENT_DATA = pd.DataFrame({
    'patient_id': range(1000),
    'age': np.random.randint(20, 80, 1000),
    'cancer_type': np.random.choice(['breast cancer'], 1000),
    'stage': np.random.choice(['I', 'II', 'III', 'IV'], 1000),
    'treatment': np.random.choice(['chemotherapy', 'radiation', 'surgery', 'immunotherapy'], 1000),
    'outcome': np.random.choice(['improved', 'stable', 'deteriorated'], 1000),
    'genetic_marker': np.random.choice(['BRCA', 'EGFR', 'KRAS', 'ALK', 'BRAF'], 1000),
    'previous_treatments': np.random.randint(0, 5, 1000)
})

# Mock feedback data with patient satisfaction information
MOCK_FEEDBACK_DATA = pd.DataFrame({
    'patient_id': range(1000),
    'feedback': [f"The treatment was {'great' if np.random.random() > 0.5 else 'challenging'}. {'I feel better' if np.random.random() > 0.5 else 'I have some side effects'}." for _ in range(1000)]
})

# Function to generate mock wearable data for a patient over a period of days


def generate_wearable_data(patient_id, days=30):
    """
    Generate mock wearable data (heart rate, steps, sleep hours, stress level) for a patient over a specified number of days.
    """
    start_date = datetime.now() - timedelta(days=days)
    dates = [start_date + timedelta(days=i) for i in range(days)]
    return pd.DataFrame({
        'patient_id': [patient_id] * days,
        'date': dates,
        'heart_rate': np.random.randint(60, 100, days),
        'steps': np.random.randint(1000, 15000, days),
        'sleep_hours': np.random.uniform(5, 9, days),
        'stress_level': np.random.randint(1, 6, days)
    })


# Generate wearable data for all patients
MOCK_WEARABLE_DATA = pd.concat(
    [generate_wearable_data(i) for i in range(1000)])
