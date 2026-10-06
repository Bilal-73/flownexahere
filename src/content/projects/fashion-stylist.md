---
title: "AI-Based Virtual Fashion Stylist"
summary: "A computer vision outfit recommender: it detects garments in photos, extracts their dominant colours and suggests matching outfits from the user's wardrobe."
tag: "Computer vision"
services: [machine-learning]
tech: [Python, Flask, YOLOv8, KMeans, MySQL]
type: demo
status: demo
featured: true
order: 50
cover: ../../assets/projects/fashion-stylist/cover.png
coverAlt: "Fashion stylist app on phone and tablet: a detected shirt with matching trousers suggested"
facts:
  - { label: "Industry", value: "Fashion tech & personal styling" }
  - { label: "Product type", value: "AI outfit recommendation system" }
  - { label: "Backend", value: "Flask, YOLOv8, KMeans, MySQL" }
---

## Problem

Choosing an outfit every day is slow, and most people use only a fraction of their wardrobe because matching items takes effort.

## What we built

An intelligent fashion recommendation system that helps users pick outfits by analysing their clothing with computer vision and machine learning. It detects garments in user-uploaded images, extracts their dominant colours and recommends matching outfits using a colour compatibility model and the user's saved wardrobe.

### Key features

- **Image-based styling:** users upload clothing photos for visual analysis.
- **Garment detection:** YOLOv8 detects clothing items in each image.
- **Dominant colour extraction:** KMeans finds each garment's main colours to support matching.
- **Wardrobe management:** users store and manage the items that power their recommendations.
- **Personalised suggestions:** recommendations based on colour compatibility and wardrobe data.
- **User accounts:** the Flask backend handles authentication and per-user wardrobe records.

## How it works

1. The user uploads or selects a clothing image in the mobile app.
2. The Flask API receives the request and calls the AI module.
3. YOLOv8 detects the garment in the image.
4. KMeans extracts the garment's dominant colours.
5. The colours are compared against a predefined colour compatibility model.
6. Matching outfits are recommended from the user's saved wardrobe.

## Tech

- **Backend:** Flask, Python API architecture (authentication, wardrobe management, app ↔ AI communication)
- **Computer vision:** YOLOv8 garment detection
- **Machine learning:** KMeans dominant colour extraction
- **Database:** MySQL for users, wardrobe items and recommendations

## Result

This is a demo build. It is designed to:

- simplify outfit selection by turning wardrobe data into recommendations;
- make suggestions more contextual with garment detection and colour extraction;
- improve personalisation through saved wardrobe items and history;
- serve as a base for fashion retail, closet apps and AI styling assistants.
