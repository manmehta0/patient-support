"""
services.py: Contains functions to interact with external APIs, such as clinical trial information and treatment details.
"""

import requests
import os
from datetime import datetime

# Base URL for the NCI (National Cancer Institute) API
NCI_API_BASE_URL = "https://clinicaltrialsapi.cancer.gov/api/v2/"
# Header with API key for authentication
headers = {'X-API-KEY': os.environ['CLIENT_API_KEY']}

GOOGLE_PLACES_API_URL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json'
GOOGLE_GEOCODING_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json'
GOOGLE_API_KEY = os.environ['GOOGLE_MAPS_API_KEY']


def get_autocomplete(input_text):
    response = requests.get(GOOGLE_PLACES_API_URL, params={
        'input': input_text,
        'types': 'geocode',
        'key': GOOGLE_API_KEY,
        # Restrict to US postal codes (adjust as needed)
        'components': 'country:us',
    })

    if response.status_code == 200:
        data = response.json()

        # Filter only the suggestions that contain postal codes
        filtered_results = []
        for result in data.get('predictions', []):
            place_id = result['place_id']

            # Fetch place details to get the postal code
            place_details_response = requests.get(GOOGLE_GEOCODING_API_URL, params={
                'place_id': place_id,
                'key': GOOGLE_API_KEY,
            })

            if place_details_response.status_code == 200:
                print('place_details_response', place_details_response)
                place_details = place_details_response.json()
                if place_details['results']:
                    address_components = place_details['results'][0].get(
                        'address_components', [])
                    postal_code = next(
                        (comp['long_name'] for comp in address_components if 'postal_code' in comp['types']), None)
                    if postal_code:
                        filtered_results.append({
                            'description': result['description'],
                            'postal_code': postal_code,
                        })

        return {'predictions': filtered_results}
    return {}

    


def get_studies(nct_id):
    """
    Fetch studies from the NCI API based on nct id for a given trial.
    """
    response = requests.get("https://clinicaltrials.gov/api/v2/studies/" + nct_id,
                            headers=headers)
    if response.status_code == 200:
        return response.json()
    return []

def get_clinical_trials(cancer_type, location, treatment_phase):
    """
    Fetch clinical trials from the NCI API based on cancer type, location, and treatment phase.
    """
    params = {
        "brief_title._fulltext": cancer_type,
        "sites.org_postal_code": location,
        "current_trial_status": "Active",
        "current_trial_status_date_lte": datetime.now().strftime("%Y-%m-%d"),
        "size": 10
    }
    response = requests.get(NCI_API_BASE_URL + "trials",
                            headers=headers, params=params)
    if response.status_code == 200:
        return response.json().get('data', [])
    return []


def get_treatment_info(cancer_type):
    """
    Fetch treatment information for a given cancer type from the NCI API.
    """
    params = {"query": f"{cancer_type}", "size": 5}
    response = requests.get(
        NCI_API_BASE_URL + "interventions", headers=headers, params=params)
    if response.status_code == 200:
        return response.json().get('data', [])
    return []

