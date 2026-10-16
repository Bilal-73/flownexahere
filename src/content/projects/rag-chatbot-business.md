---
title: "RAG Chatbot for a Business"
summary: "TODO: A chatbot that answers customer questions from a business's own documents, with sources and a human handoff."
tag: "RAG chatbot"
services: [rag-chatbot]
tech: [Python, LangChain, Vector database, TODO]
type: demo
status: draft
listed: false
featured: false
order: 300
---

> **DRAFT.** Hidden from the production site until `status` is changed. Replace every TODO, add a cover image, then set `status: demo` (or `live`).

## Problem

TODO: Which business (or a realistic sample business)? What questions does the team answer again and again, and how long does it take today?

## What we built

TODO: A retrieval-augmented (RAG) chatbot trained on the business's FAQs, policies and product information. Describe where it lives (website widget, WhatsApp) and how it hands over to a human.

### Live demo

TODO: Embed or link the demo bot here (set `links.demo`). Until then this section stays a placeholder.

## How it works

1. TODO: Documents are split into chunks and embedded into a vector database.
2. TODO: A visitor asks a question; the most relevant chunks are retrieved.
3. TODO: The model answers using only those chunks and shows its sources.
4. TODO: If confidence is low, the bot offers a human handoff.

## Tech

- TODO: LLM provider and model
- TODO: Embeddings + vector database
- TODO: Hosting and widget

## Result

TODO: Real outcomes only (e.g. answer accuracy on a test set you ran). No invented metrics.
