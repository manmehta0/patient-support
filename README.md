# cancer-patient-support
This application provides a comprehensive platform for exploring clinical trials related to cancer. 

## Features

- **Search Trials:** Find relevant trials based on keywords, status, and other criteria.
- **Trial Details:** View detailed information about interventions (treatments), trial phases, and locations.
- **Treatment Analysis:** Use machine learning to analyze the effectiveness of different treatments.
- **Predictive Analytics:** Predict trial outcomes and trends based on historical data.
- **User-Friendly Interface:** Simple and interactive web interface for easy upload and analysis of genetic data.

## Tech Stack
- **Frontend:** React
- **Backend:** Flask
- **Machine Learning:** Scikit-learn
  
## Installation

Before running GenomeScope, you will need to set up your environment. Here's how you can get started:
1. **Clone the Repository**
   ```bash
   git clone https://github.com/aarushm4/cancer-clinical-support.git
   ```
2. **Backend Setup**
   - **Navigate to the backend directory:**
      
     ```bash
     cd cancer-clinical-support/api
     ```
   - **Set up a Python Virtual Environment (recommended)**
      
     ```bash
     python -m venv venv
   
     source venv/bin/activate  # On Windows use `venv\Scripts\activate`
     ```
   - **Install Required Packages**
      
     ```bash
     pip install -r requirements.txt
     ```
   - **Start the Flask server:**
      
     ```bash
     flask run
     ```
3. **Frontend Setup**
   
   - **Navigate to the frontend directory:**
      
      ```bash
      cd cd cancer-clinical-support/patient-support
      ```
   - **Install frontend dependencies:**
      
      ```bash
      npm install
      ```
   - **Start React Development Server**
      
      ```bash
      npm start
      ```
## Usage
- **Navigate to <http://127.0.0.1:3000/> in your web browser to access Cancer Patient Support Portal.**
- **Navigate to <http://127.0.0.1:3000/dashboard> in your web browser to access Dashboard.**


## Contributions

Contributions are welcome! Please read our contributing guidelines to learn how you can propose bug fixes, improvements, or new features.

## License

GenomeScope is released under the MIT License. See the LICENSE file for more details.

## Contact

For support or partnership inquiries, please contact <aarushi2.mehta@gmail.com>.

