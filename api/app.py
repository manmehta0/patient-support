import os
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
from package.services import get_clinical_trials, get_treatment_info, get_studies
from package.models import (
    train_outcome_prediction_model, predict_outcome, train_sentiment_analysis_model,
    analyze_sentiment, train_recommendation_model, get_treatment_recommendations,
    analyze_wearable_data
)
from package.data import MOCK_FEEDBACK_DATA, MOCK_PATIENT_DATA
from package.utils import convert_int64_to_int
from package.openai_service import generate_chat_response

# Initialize the Flask app and enable Cross-Origin Resource Sharing (CORS)
app = Flask(__name__)
CORS(app)


@app.route('/api/studies/<string:nct_id>', methods=['GET'])
def get_study(nct_id):
    study = get_studies(nct_id)
    if study:
        return jsonify(study), 200
    else:
        return jsonify({"error": "Study not found"}), 404

@app.route('/api/clinical-trials', methods=['GET'])
def clinical_trials():
    """
    API route to fetch clinical trials based on cancer type and location.
    Required query parameters: cancerType, location, treatmentPhase.
    """
    cancer_type = request.args.get('cancerType')
    location = request.args.get('location')
    treatment_phase = request.args.get('treatmentPhase')
    if not cancer_type or not location:
        return jsonify({"error": "Both cancer_type and zip_code are required"}), 400

    trials = get_clinical_trials(cancer_type, location, treatment_phase)
    return jsonify({'trials': trials})


@app.route('/api/treatment-info', methods=['GET'])
def treatment_info():
    """
    API route to fetch treatment information for a specific cancer type.
    Required query parameter: cancer_type.
    """
    cancer_type = request.args.get('cancer_type')
    if not cancer_type:
        return jsonify({"error": "cancer_type is required"}), 400

    info = get_treatment_info(cancer_type)
    return jsonify(info)


@app.route('/api/predict-outcome', methods=['POST'])
def predict_patient_outcome():
    patient_data = request.json
    if not patient_data or not all(key in patient_data for key in ['age', 'cancer_type', 'stage', 'treatment', 'genetic_marker', 'previous_treatments']):
        return jsonify({"error": "Invalid patient data"}), 400

    prediction = predict_outcome(pd.DataFrame([patient_data]))
    return jsonify(prediction)


@app.route('/api/analyze-feedback', methods=['POST'])
def analyze_feedback_sentiment():
    """
    API route to analyze the sentiment of patient feedback.
    Required JSON field: feedback.
    """
    feedback = request.json.get('feedback')
    if not feedback:
        return jsonify({"error": "Feedback is required"}), 400

    sentiment = analyze_sentiment(feedback)
    return jsonify(sentiment)


@app.route('/api/treatment-recommendations', methods=['POST'])
def get_recommendations():
    """
    API route to get treatment recommendations based on patient data.
    Required JSON fields: age, cancer_type, stage, genetic_marker, previous_treatments.
    """
    patient_data = request.json
    if not patient_data or not all(key in patient_data for key in ['age', 'cancer_type', 'stage', 'genetic_marker', 'previous_treatments']):
        return jsonify({"error": "Invalid patient data"}), 400

    recommendations = get_treatment_recommendations(
        pd.DataFrame([patient_data]))
    return jsonify(recommendations)


@app.route('/api/wearable-data-analysis', methods=['GET'])
def wearable_data_analysis():
    """
    API route to analyze wearable data for a patient.
    Required query parameter: patient_id.
    """
    patient_id = request.args.get('patient_id')
    if not patient_id:
        return jsonify({"error": "patient_id is required"}), 400

    analysis = analyze_wearable_data(int(patient_id))
    return jsonify(analysis)


@app.route('/api/patient-dashboard', methods=['GET'])
def patient_dashboard():
    patient_id = request.args.get('patient_id')
    if not patient_id:
        return jsonify({"error": "patient_id is required"}), 400

    patient_data = MOCK_PATIENT_DATA[MOCK_PATIENT_DATA['patient_id'] == int(
        patient_id)].iloc[0]

    clinical_trials = get_clinical_trials(patient_data['cancer_type'], '21202', patient_data['treatment'])[
        :3]
    # print('trials', get_trials(patient_data['cancer_type'], '21202')[:3])
    treatment_info = get_treatment_info(patient_data['cancer_type'])
    outcome_prediction = predict_outcome(
        pd.DataFrame([patient_data.to_dict()]))
    recent_feedback = MOCK_FEEDBACK_DATA[MOCK_FEEDBACK_DATA['patient_id'] == int(
        patient_id)].iloc[-1]['feedback']
    sentiment_analysis = analyze_sentiment(recent_feedback)

    treatment_recommendations = get_treatment_recommendations(
        pd.DataFrame([patient_data.to_dict()]))
    wearable_analysis = analyze_wearable_data(int(patient_id))

    dashboard = {
        "patient_info": patient_data.to_dict(),
        "clinical_trials": clinical_trials,
        "treatment_info": treatment_info,
        "outcome_prediction": outcome_prediction,
        "recent_feedback": recent_feedback,
        "sentiment_analysis": sentiment_analysis,
        "treatment_recommendations": treatment_recommendations,
        "wearable_data_analysis": convert_int64_to_int(wearable_analysis)
    }

    return jsonify(dashboard)


@app.route('/api/onboard', methods=['POST'])
def onboard_patient():
    data = request.form
    name = data.get('name')
    cancer_type = data.get('cancerType')
    stage = data.get('stage')
    current_treatment = data.get('currentTreatment')
    medical_records = request.files.get('medicalRecords')

    # Save patient data to the database (pseudo-code)
    # save_patient_data(name, cancer_type, stage, current_treatment, medical_records)

    return jsonify({'message': 'Patient profile created successfully!'}), 201


@app.route('/api/dashboard', methods=['GET'])
def get_dashboard_data():
    # Fetch relevant clinical trials, articles, and support groups (pseudo-code)
    trials = []  # Fetch from database
    articles = []  # Fetch from database
    support_groups = []  # Fetch from database

    return jsonify({'trials': trials, 'articles': articles, 'supportGroups': support_groups})


@app.route('/api/chat', methods=['POST'])
def chat():
    """
    API route to interact with the OpenAI chatbot.
    Required JSON field: prompt.
    """
    data = request.json
    prompt = data.get('prompt')
    response = generate_chat_response(prompt)
    return jsonify(response)


@app.route('/api/health')
def healthcheck():
    """
    Healthcheck API to verify if the service is running.
    """
    return jsonify({"status": "healthy"})

with app.app_context():
    # Train or load models upon the first request to the application
    if not os.path.exists('outcome_prediction_model.joblib'):
        train_outcome_prediction_model()
    if not os.path.exists('sentiment_analysis_model.joblib'):
        train_sentiment_analysis_model()
    if not os.path.exists('recommendation_model.joblib'):
        train_recommendation_model()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
