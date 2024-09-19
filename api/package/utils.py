"""
utils.py: Contains utility functions used across the application.
"""

import numpy as np


def convert_int64_to_int(data):
    """
    Recursively convert all instances of numpy int64 to native Python int in the given data structure.
    Useful for returning JSON data with standard Python types.
    """
    if isinstance(data, dict):
        return {k: convert_int64_to_int(v) for k, v in data.items()}
    elif isinstance(data, list):
        return [convert_int64_to_int(i) for i in data]
    elif isinstance(data, np.int64):
        return int(data)
    else:
        return data
