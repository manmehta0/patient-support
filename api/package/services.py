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
