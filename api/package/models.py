"""
models.py: Contains the machine learning model training and prediction logic.
"""

import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neighbors import NearestNeighbors
import joblib
from textblob import TextBlob
from .data import MOCK_FEEDBACK_DATA, MOCK_PATIENT_DATA, MOCK_WEARABLE_DATA


def train_outcome_prediction_model():
    """
    Train the RandomForestClassifier model to predict patient outcomes.
    The model is saved to 'outcome_prediction_model.joblib'.
    """
    X = pd.get_dummies(MOCK_PATIENT_DATA[['age', 'cancer_type', 'stage',
                       'treatment', 'genetic_marker', 'previous_treatments']], drop_first=True)
    y = (MOCK_PATIENT_DATA['outcome'] == 'improved').astype(int)
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42)
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Outcome prediction model accuracy: {accuracy:.2f}")
    joblib.dump(model, 'outcome_prediction_model.joblib')
    return model


def predict_outcome(patient_data):
    """
    Predict the outcome for a given patient based on trained RandomForestClassifier.
    """
    model = joblib.load('outcome_prediction_model.joblib')
    patient_features = pd.get_dummies(patient_data[[
                                      'age', 'cancer_type', 'stage', 'treatment', 'genetic_marker', 'previous_treatments']], drop_first=True)
    missing_cols = set(model.feature_names_in_) - set(patient_features.columns)
    for col in missing_cols:
        patient_features[col] = 0
    patient_features = patient_features[model.feature_names_in_]

    prediction = model.predict_proba(patient_features)[0]
    return {"improvement_probability": prediction[1]}


def train_sentiment_analysis_model():
    """
    Train a sentiment analysis model using patient feedback data.
    The model and vectorizer are saved as 'sentiment_analysis_model.joblib' and 'sentiment_vectorizer.joblib'.
    """
    vectorizer = TfidfVectorizer(max_features=1000)
    X = vectorizer.fit_transform(MOCK_FEEDBACK_DATA['feedback'])
    y = MOCK_FEEDBACK_DATA['feedback'].apply(
        lambda x: TextBlob(x).sentiment.polarity > 0).astype(int)

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42)

    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Sentiment analysis model accuracy: {accuracy:.2f}")

    joblib.dump(model, 'sentiment_analysis_model.joblib')
    joblib.dump(vectorizer, 'sentiment_vectorizer.joblib')
    return model, vectorizer


def analyze_sentiment(feedback):
    """
    Analyze sentiment for the given feedback using the trained model.
    """
    model = joblib.load('sentiment_analysis_model.joblib')
    vectorizer = joblib.load('sentiment_vectorizer.joblib')

    feedback_vector = vectorizer.transform([feedback])
    sentiment = model.predict_proba(feedback_vector)[0]
    return {"positive_sentiment_probability": sentiment[0]}


def train_recommendation_model():
    """
    Train a recommendation model based on patient data using NearestNeighbors.
    The model is saved as 'recommendation_model.joblib'.
    """
    X = pd.get_dummies(MOCK_PATIENT_DATA[[
                       'age', 'cancer_type', 'stage', 'genetic_marker', 'previous_treatments']], drop_first=True)
    model = NearestNeighbors(n_neighbors=5, metric='cosine')
    model.fit(X)

    joblib.dump(model, 'recommendation_model.joblib')
    return model


def get_treatment_recommendations(patient_data):
    """
    Get treatment recommendations for a given patient based on similar patients.
    """
    model = joblib.load('recommendation_model.joblib')
    patient_features = pd.get_dummies(patient_data[[
                                      'age', 'cancer_type', 'stage', 'genetic_marker', 'previous_treatments']], drop_first=True)
    missing_cols = set(model.feature_names_in_) - set(patient_features.columns)
    for col in missing_cols:
        patient_features[col] = 0
    patient_features = patient_features[model.feature_names_in_]

    _, indices = model.kneighbors(patient_features)
    similar_patients = MOCK_PATIENT_DATA.iloc[indices[0]]
    successful_treatments = similar_patients[similar_patients['outcome']
                                             == 'improved']['treatment'].value_counts()

    return successful_treatments.to_dict()


def analyze_wearable_data(patient_id):
    """
    Analyze wearable data for the given patient ID and return a summary and trends.
    """
    patient_data = MOCK_WEARABLE_DATA[MOCK_WEARABLE_DATA['patient_id'] == patient_id].sort_values(
        'date')

    latest_data = patient_data.iloc[-1]
    avg_data = patient_data.mean()

    analysis = {
        "latest": {
            "heart_rate": latest_data['heart_rate'],
            "steps": latest_data['steps'],
            "sleep_hours": latest_data['sleep_hours'],
            "stress_level": latest_data['stress_level']
        },
        "average": {
            "heart_rate": avg_data['heart_rate'],
            "steps": avg_data['steps'],
            "sleep_hours": avg_data['sleep_hours'],
            "stress_level": avg_data['stress_level']
        },
        "trends": {
            "heart_rate": "stable" if abs(latest_data['heart_rate'] - avg_data['heart_rate']) < 5 else ("increasing" if latest_data['heart_rate'] > avg_data['heart_rate'] else "decreasing"),
            "steps": "stable" if abs(latest_data['steps'] - avg_data['steps']) < 1000 else ("increasing" if latest_data['steps'] > avg_data['steps'] else "decreasing"),
            "sleep_hours": "stable" if abs(latest_data['sleep_hours'] - avg_data['sleep_hours']) < 1 else ("increasing" if latest_data['sleep_hours'] > avg_data['sleep_hours'] else "decreasing"),
            "stress_level": "stable" if abs(latest_data['stress_level'] - avg_data['stress_level']) < 1 else ("increasing" if latest_data['stress_level'] > avg_data['stress_level'] else "decreasing")
        }
    }

    return analysis
