# Cancer Clinical Trials Support API

This project is a Flask-based API designed to support cancer patients by providing clinical trial information, treatment recommendations, and feedback analysis. It also features machine learning models to predict patient outcomes and analyze wearable health data.

## Features

- **Clinical Trials**: Fetches clinical trials from the NCI API.
- **Treatment Info**: Retrieves treatment information for specific cancer types.
- **Patient Outcome Prediction**: Predicts the likelihood of treatment success.
- **Sentiment Analysis**: Analyzes patient feedback to assess sentiment.
- **Treatment Recommendations**: Recommends treatments based on similar patients.
- **Wearable Data Analysis**: Analyzes patient data from wearable devices.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/cancer-clinical-trials-support-api.git
   cd cancer-clinical-trials-support-api
   ```

2. Create a virtual environment and activate it:

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Set up environment variables for API keys:

   ```bash
   export CLIENT_API_KEY=your_nci_api_key
   export OPEN_API_KEY=your_openai_api_key
   ```

5. Run the Flask application:

   ```bash
   python app.py
   ```

## API Endpoints

- `/api/clinical-trials`: Get clinical trials based on cancer type and location.
- `/api/treatment-info`: Fetch treatment information for a specific cancer type.
- `/api/predict-outcome`: Predict patient outcomes based on the provided data.
- `/api/analyze-feedback`: Analyze the sentiment of patient feedback.
- `/api/treatment-recommendations`: Get treatment recommendations for a patient.
-
