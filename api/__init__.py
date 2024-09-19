import os
import logging

# Initialize environment variables for APIs
CLIENT_API_KEY = os.getenv('CLIENT_API_KEY')
OPEN_API_KEY = os.getenv('OPEN_API_KEY')

# Ensure required API keys are set
if not CLIENT_API_KEY:
    raise EnvironmentError("CLIENT_API_KEY environment variable is not set.")
if not OPEN_API_KEY:
    raise EnvironmentError("OPEN_API_KEY environment variable is not set.")

# Set up basic logging configuration
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)

# Log initialization information
logging.info("Cancer Clinical Trials Support API initialized.")
