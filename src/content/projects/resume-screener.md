---
title: "AI Resume Classification & Details Extraction"
summary: "A resume screening API that predicts the job category of an uploaded resume and extracts contact details, built with FastAPI and a Random Forest model."
tag: "NLP / machine learning"
services: [machine-learning, data-insights]
tech: [Python, FastAPI, Textract, TF-IDF, Random Forest, Regex]
type: demo
status: demo
featured: true
order: 30
cover: ../../assets/projects/resume-screener/cover.png
coverAlt: "Resume screener on phone and tablet: upload panel with extracted candidate details and recommended jobs"
facts:
  - { label: "Industry", value: "HR tech & recruitment" }
  - { label: "Product type", value: "AI resume screening API" }
  - { label: "Backend", value: "Python, FastAPI, Textract, TF-IDF, Random Forest" }
---

## Problem

Screening resumes is one of HR's most time-consuming tasks: someone has to open every file, decide which role it fits and copy out the candidate's contact details.

## What we built

A lightweight API that automates the first pass. A user uploads a resume, and the system predicts which job category it belongs to (for example Data Science, Engineering or Marketing) and extracts key contact details such as email addresses and phone numbers. The structured result can feed straight into a recruitment platform or HR dashboard.

### Key features

- **Multi-format uploads:** accepts PDF, DOCX and TXT resumes.
- **Job category prediction:** TF-IDF features and a trained Random Forest model classify each resume by role.
- **Contact extraction:** regex-based extraction of emails and phone numbers.
- **REST API endpoint:** a single `/upload-resume` endpoint that plugs into HR dashboards.
- **Runtime model loading:** `rf_classifier.pkl` and `tfidf_vectorizer.pkl` load at startup for fast, portable inference.
- **Integration-ready:** designed as a clean backend for React frontends and recruitment platforms.

## How it works

1. A user uploads a resume in PDF, DOCX or TXT format.
2. The FastAPI backend receives the file on the `/upload-resume` endpoint.
3. Textract parses the document into raw text.
4. The text is vectorised with TF-IDF and classified by the Random Forest model.
5. Regex extraction finds contact details such as email addresses and phone numbers.
6. The API returns the predicted category and extracted details to the frontend.

## Tech

- **Backend:** Python, FastAPI, REST API
- **Parsing:** Textract for PDF, DOCX and TXT
- **Machine learning:** TF-IDF vectoriser, Random Forest classifier
- **Extraction:** regex-based email and phone parsing

## Result

This is a demo build. It is designed to:

- reduce manual resume screening for recruiters and HR teams;
- standardise classification and contact extraction across resumes;
- provide a fast backend service that can be embedded in hiring dashboards;
- serve as a base for job matching, ranking and applicant workflow automation.
