export const API_BASE_URL = `${process.env.REACT_APP_API_HOST ?? ''}/api`;

export const cancerTypes = [
  {
    value: 'Acute Lymphoblastic Leukemia (ALL)',
    label: 'Acute Lymphoblastic Leukemia (ALL)',
  },
  {
    value: 'Acute Myeloid Leukemia (AML)',
    label: 'Acute Myeloid Leukemia (AML)',
  },
  {
    value: 'Adolescents, Cancer in',
    label: 'Adolescents, Cancer in',
  },
  {
    value: 'Adrenocortical Carcinoma',
    label: 'Adrenocortical Carcinoma',
  },
  {
    value: 'AIDS-Related Lymphoma (Lymphoma)',
    label: 'AIDS-Related Lymphoma (Lymphoma)',
  },
  {
    value: 'Anal Cancer',
    label: 'Anal Cancer',
  },
  {
    value: 'Appendix Cancer (Gastrointestinal Neuroendocrine Tumors)',
    label: 'Appendix Cancer (Gastrointestinal Neuroendocrine Tumors)',
  },
  {
    value: 'Astrocytomas, Childhood (Brain Cancer)',
    label: 'Astrocytomas, Childhood (Brain Cancer)',
  },
  {
    value: 'Atypical Teratoid/Rhabdoid Tumor, Childhood, Central Nervous System (CNS) Tumor (Brain Cancer)',
    label: 'Atypical Teratoid/Rhabdoid Tumor, Childhood, Central Nervous System (CNS) Tumor (Brain Cancer)',
  },
  {
    value: 'Basal Cell Carcinoma of the Skin (Skin Cancer)',
    label: 'Basal Cell Carcinoma of the Skin (Skin Cancer)',
  },
  {
    value: 'Bile Duct Cancer',
    label: 'Bile Duct Cancer',
  },
  {
    value: 'Bladder Cancer',
    label: 'Bladder Cancer',
  },
  {
    value: 'Brain Tumors',
    label: 'Brain Tumors',
  },
  {
    value: 'Breast Cancer',
    label: 'Breast Cancer',
  },
  {
    value: 'Bronchial Tumors (Lung Cancer)',
    label: 'Bronchial Tumors (Lung Cancer)',
  },
  {
    value: 'Burkitt Lymphoma (Non-Hodgkin Lymphoma)',
    label: 'Burkitt Lymphoma (Non-Hodgkin Lymphoma)',
  },
  {
    value: 'Carcinoma of Unknown Primary',
    label: 'Carcinoma of Unknown Primary',
  },
  {
    value: 'Central Nervous System (CNS) Germ Cell Tumor, Childhood (Brain Cancer)',
    label: 'Central Nervous System (CNS) Germ Cell Tumor, Childhood (Brain Cancer)',
  },
  {
    value: 'Cervical Cancer',
    label: 'Cervical Cancer',
  },
  {
    value: 'Childhood Cancers',
    label: 'Childhood Cancers',
  },
  {
    value: 'Cholangiocarcinoma (Bile Duct Cancer)',
    label: 'Cholangiocarcinoma (Bile Duct Cancer)',
  },
  {
    value: 'Chordoma, Childhood (Bone Cancer)',
    label: 'Chordoma, Childhood (Bone Cancer)',
  },
  {
    value: 'Chronic Lymphocytic Leukemia (CLL)',
    label: 'Chronic Lymphocytic Leukemia (CLL)',
  },
  {
    value: 'Chronic Myelogenous Leukemia (CML)',
    label: 'Chronic Myelogenous Leukemia (CML)',
  },
  {
    value: 'Colorectal Cancer',
    label: 'Colorectal Cancer',
  },
  {
    value: 'Craniopharyngioma, Childhood (Brain Cancer)',
    label: 'Craniopharyngioma, Childhood (Brain Cancer)',
  },
  {
    value: 'Cutaneous T-Cell Lymphoma (Lymphoma) (Mycosis Fungoids and Sézary Syndrome)',
    label: 'Cutaneous T-Cell Lymphoma (Lymphoma) (Mycosis Fungoids and Sézary Syndrome)',
  },
  {
    value: 'Diffuse Intrinsic Pontine Glioma (DIPG) (Brain Cancer)',
    label: 'Diffuse Intrinsic Pontine Glioma (DIPG) (Brain Cancer)',
  },
  {
    value: 'Ductal Carcinoma In Situ (DCIS) (Breast Cancer)',
    label: 'Ductal Carcinoma In Situ (DCIS) (Breast Cancer)',
  },
  {
    value: 'Endometrial Cancer (Uterine Cancer)',
    label: 'Endometrial Cancer (Uterine Cancer)',
  },
  {
    value: 'Ependymoma, Childhood (Brain Cancer)',
    label: 'Ependymoma, Childhood (Brain Cancer)',
  },
  {
    value: 'Esophageal Cancer',
    label: 'Esophageal Cancer',
  },
  {
    value: 'Esthesioneuroblastoma (Head and Neck Cancer)',
    label: 'Esthesioneuroblastoma (Head and Neck Cancer)',
  },
  {
    value: 'Ewing Sarcoma (Bone Cancer)',
    label: 'Ewing Sarcoma (Bone Cancer)',
  },
  {
    value: 'Extracranial Germ Cell Tumor, Childhood',
    label: 'Extracranial Germ Cell Tumor, Childhood',
  },
  {
    value: 'Extragonadal Germ Cell Tumor',
    label: 'Extragonadal Germ Cell Tumor',
  },
  {
    value: 'Fallopian Tube Cancer',
    label: 'Fallopian Tube Cancer',
  },
  {
    value: 'Gallbladder Cancer',
    label: 'Gallbladder Cancer',
  },
  {
    value: 'Gastric (Stomach) Cancer',
    label: 'Gastric (Stomach) Cancer',
  },
  {
    value: 'Gastrointestinal Neuroendocrine Tumors',
    label: 'Gastrointestinal Neuroendocrine Tumors',
  },
  {
    value: 'Gastrointestinal Stromal Tumors (GIST) (Soft Tissue Sarcoma)',
    label: 'Gastrointestinal Stromal Tumors (GIST) (Soft Tissue Sarcoma)',
  },
  {
    value: 'Gestational Trophoblastic Disease',
    label: 'Gestational Trophoblastic Disease',
  },
  {
    value: 'Glioma, Childhood (Brain Cancer)',
    label: 'Glioma, Childhood (Brain Cancer)',
  },
  {
    value: 'Hairy Cell Leukemia',
    label: 'Hairy Cell Leukemia',
  },
  {
    value: 'Head and Neck Cancer',
    label: 'Head and Neck Cancer',
  },
  {
    value: 'Heart Tumors, Childhood (Cardiac Tumors)',
    label: 'Heart Tumors, Childhood (Cardiac Tumors)',
  },
  {
    value: 'Hepatocellular (Liver) Cancer',
    label: 'Hepatocellular (Liver) Cancer',
  },
  {
    value: 'Hodgkin Lymphoma',
    label: 'Hodgkin Lymphoma',
  },
  {
    value: 'Hypopharyngeal Cancer (Head and Neck Cancer)',
    label: 'Hypopharyngeal Cancer (Head and Neck Cancer)',
  },
  {
    value: 'Intraocular Melanoma (Eye Cancer)',
    label: 'Intraocular Melanoma (Eye Cancer)',
  },
  {
    value: 'Kaposi Sarcoma (Soft Tissue Sarcoma)',
    label: 'Kaposi Sarcoma (Soft Tissue Sarcoma)',
  },
  {
    value: 'Kidney Cancer (Renal Cell)',
    label: 'Kidney Cancer (Renal Cell)',
  },
  {
    value: 'Langerhans Cell Histiocytosis',
    label: 'Langerhans Cell Histiocytosis',
  },
  {
    value: 'Laryngeal Cancer (Head and Neck Cancer)',
    label: 'Laryngeal Cancer (Head and Neck Cancer)',
  },
  {
    value: 'Leukemia',
    label: 'Leukemia',
  },
  {
    value: 'Lip and Oral Cavity Cancer (Head and Neck Cancer)',
    label: 'Lip and Oral Cavity Cancer (Head and Neck Cancer)',
  },
  {
    value: 'Liver Cancer',
    label: 'Liver Cancer',
  },
  {
    value: 'Lung Cancer',
    label: 'Lung Cancer',
  },
  {
    value: 'Lymphoma',
    label: 'Lymphoma',
  },
  {
    value: 'Male Breast Cancer',
    label: 'Male Breast Cancer',
  },
  {
    value: 'Medulloblastoma and Other Central Nervous System (CNS) Embryonal Tumors, Childhood (Brain Cancer)',
    label: 'Medulloblastoma and Other Central Nervous System (CNS) Embryonal Tumors, Childhood (Brain Cancer)',
  },
  {
    value: 'Melanoma',
    label: 'Melanoma',
  },
  {
    value: 'Merkel Cell Carcinoma (Skin Cancer)',
    label: 'Merkel Cell Carcinoma (Skin Cancer)',
  },
  {
    value: 'Mesothelioma, Malignant',
    label: 'Mesothelioma, Malignant',
  },
  {
    value: 'Metastatic Cancer',
    label: 'Metastatic Cancer',
  },
  {
    value: 'Metastatic Squamous Neck Cancer with Occult Primary (Head and Neck Cancer)',
    label: 'Metastatic Squamous Neck Cancer with Occult Primary (Head and Neck Cancer)',
  },
  {
    value: 'Mouth Cancer (Head and Neck Cancer)',
    label: 'Mouth Cancer (Head and Neck Cancer)',
  },
  {
    value: 'Multiple Endocrine Neoplasia Syndromes',
    label: 'Multiple Endocrine Neoplasia Syndromes',
  },
  {
    value: 'Mycosis Fungoides (Lymphoma)',
    label: 'Mycosis Fungoides (Lymphoma)',
  },
  {
    value: 'Myelodysplastic Syndromes',
    label: 'Myelodysplastic Syndromes',
  },
  {
    value: 'Myeloproliferative Neoplasms, Chronic',
    label: 'Myeloproliferative Neoplasms, Chronic',
  },
  {
    value: 'Myelodysplastic/Myeloproliferative Neoplasms',
    label: 'Myelodysplastic/Myeloproliferative Neoplasms',
  },
  {
    value: 'Nasal Cavity and Paranasal Sinus Cancer (Head and Neck Cancer)',
    label: 'Nasal Cavity and Paranasal Sinus Cancer (Head and Neck Cancer)',
  },
  {
    value: 'Nasopharyngeal Cancer (Head and Neck Cancer)',
    label: 'Nasopharyngeal Cancer (Head and Neck Cancer)',
  },
  {
    value: 'Neuroblastoma',
    label: 'Neuroblastoma',
  },
  {
    value: 'Neuroendocrine Tumors (Gastrointestinal)',
    label: 'Neuroendocrine Tumors (Gastrointestinal)',
  },
  {
    value: 'Non-Hodgkin Lymphoma',
    label: 'Non-Hodgkin Lymphoma',
  },
  {
    value: 'Non-Small Cell Lung Cancer',
    label: 'Non-Small Cell Lung Cancer',
  },
  {
    value: 'Oropharyngeal Cancer (Head and Neck Cancer)',
    label: 'Oropharyngeal Cancer (Head and Neck Cancer)',
  },
  {
    value: 'Osteosarcoma and Undifferentiated Pleomorphic Sarcoma of Bone Treatment',
    label: 'Osteosarcoma and Undifferentiated Pleomorphic Sarcoma of Bone Treatment',
  },
  {
    value: 'Ovarian Cancer',
    label: 'Ovarian Cancer',
  },
  {
    value: 'Ovarian Germ Cell Tumors',
    label: 'Ovarian Germ Cell Tumors',
  },
  {
    value: 'Pancreatic Cancer',
    label: 'Pancreatic Cancer',
  },
  {
    value: 'Pancreatic Neuroendocrine Tumors (Islet Cell Tumors)',
    label: 'Pancreatic Neuroendocrine Tumors (Islet Cell Tumors)',
  },
  {
    value: 'Papillomatosis (Childhood Laryngeal)',
    label: 'Papillomatosis (Childhood Laryngeal)',
  },
  {
    value: 'Paraganglioma',
    label: 'Paraganglioma',
  },
  {
    value: 'Paranasal Sinus and Nasal Cavity Cancer (Head and Neck Cancer)',
    label: 'Paranasal Sinus and Nasal Cavity Cancer (Head and Neck Cancer)',
  },
  {
    value: 'Parathyroid Cancer',
    label: 'Parathyroid Cancer',
  },
  {
    value: 'Penile Cancer',
    label: 'Penile Cancer',
  },
  {
    value: 'Pharyngeal Cancer (Head and Neck Cancer)',
    label: 'Pharyngeal Cancer (Head and Neck Cancer)',
  },
  {
    value: 'Pheochromocytoma',
    label: 'Pheochromocytoma',
  },
  {
    value: 'Pituitary Tumor',
    label: 'Pituitary Tumor',
  },
  {
    value: 'Plasma Cell Neoplasm/Multiple Myeloma',
    label: 'Plasma Cell Neoplasm/Multiple Myeloma',
  },
  {
    value: 'Pleuropulmonary Blastoma (Lung Cancer)',
    label: 'Pleuropulmonary Blastoma (Lung Cancer)',
  },
  {
    value: 'Pregnancy and Breast Cancer',
    label: 'Pregnancy and Breast Cancer',
  },
  {
    value: 'Primary Central Nervous System (CNS) Lymphoma',
    label: 'Primary Central Nervous System (CNS) Lymphoma',
  },
  {
    value: 'Primary Peritoneal Cancer',
    label: 'Primary Peritoneal Cancer',
  },
  {
    value: 'Prostate Cancer',
    label: 'Prostate Cancer',
  },
  {
    value: 'Pulmonary Inflammatory Myofibroblastic Tumor (Lung Cancer)',
    label: 'Pulmonary Inflammatory Myofibroblastic Tumor (Lung Cancer)',
  },
  {
    value: 'Rare Cancers of Childhood',
    label: 'Rare Cancers of Childhood',
  },
  {
    value: 'Rectal Cancer',
    label: 'Rectal Cancer',
  },
  {
    value: 'Recurrent Cancer',
    label: 'Recurrent Cancer',
  },
  {
    value: 'Retinoblastoma',
    label: 'Retinoblastoma',
  },
  {
    value: 'Rhabdomyosarcoma, Childhood (Soft Tissue Sarcoma)',
    label: 'Rhabdomyosarcoma, Childhood (Soft Tissue Sarcoma)',
  },
  {
    value: 'Salivary Gland Cancer (Head and Neck Cancer)',
    label: 'Salivary Gland Cancer (Head and Neck Cancer)',
  },
  {
    value: 'Sézary Syndrome (Lymphoma)',
    label: 'Sézary Syndrome (Lymphoma)',
  },
  {
    value: 'Skin Cancer',
    label: 'Skin Cancer',
  },
  {
    value: 'Small Cell Lung Cancer',
    label: 'Small Cell Lung Cancer',
  },
  {
    value: 'Small Intestine Cancer',
    label: 'Small Intestine Cancer',
  },
  {
    value: 'Soft Tissue Sarcoma',
    label: 'Soft Tissue Sarcoma',
  },
  {
    value: 'Squamous Cell Carcinoma of the Skin',
    label: 'Squamous Cell Carcinoma of the Skin',
  },
  {
    value: 'Stomach (Gastric) Cancer',
    label: 'Stomach (Gastric) Cancer',
  },
  {
    value: 'Testicular Cancer',
    label: 'Testicular Cancer',
  },
  {
    value: 'Throat Cancer (Head and Neck Cancer)',
    label: 'Throat Cancer (Head and Neck Cancer)',
  },
  {
    value: 'Thymoma and Thymic Carcinoma',
    label: 'Thymoma and Thymic Carcinoma',
  },
  {
    value: 'Thyroid Cancer',
    label: 'Thyroid Cancer',
  },
  {
    value: 'Tracheobronchial Tumors (Lung Cancer)',
    label: 'Tracheobronchial Tumors (Lung Cancer)',
  },
  {
    value: 'Transitional Cell Cancer of the Renal Pelvis and Ureter (Kidney Cancer)',
    label: 'Transitional Cell Cancer of the Renal Pelvis and Ureter (Kidney Cancer)',
  },
  {
    value: 'Ureter and Renal Pelvis, Transitional Cell Cancer (Kidney Cancer)',
    label: 'Ureter and Renal Pelvis, Transitional Cell Cancer (Kidney Cancer)',
  },
  {
    value: 'Urethral Cancer',
    label: 'Urethral Cancer',
  },
  {
    value: 'Uterine Cancer, Endometrial',
    label: 'Uterine Cancer, Endometrial',
  },
  {
    value: 'Uterine Sarcoma',
    label: 'Uterine Sarcoma',
  },
  {
    value: 'Vaginal Cancer',
    label: 'Vaginal Cancer',
  },
  {
    value: 'Vascular Tumors, Childhood (Soft Tissue Sarcoma)',
    label: 'Vascular Tumors, Childhood (Soft Tissue Sarcoma)',
  },
  {
    value: 'Vulvar Cancer',
    label: 'Vulvar Cancer',
  },
  {
    value: 'Wilms Tumor and Other Childhood Kidney Tumors',
    label: 'Wilms Tumor and Other Childhood Kidney Tumors',
  },
  {
    value: 'Young Adults, Cancer in',
    label: 'Young Adults, Cancer in',
  },
];
