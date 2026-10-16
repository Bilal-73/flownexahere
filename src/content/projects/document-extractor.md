---
title: "Document Extractor: Invoices to Structured Data"
summary: "TODO: Turns invoice and receipt PDFs into structured JSON and writes them to a Google Sheet for bookkeeping."
tag: "Document AI"
services: [workflow-automation, data-insights]
tech: [Python, TODO]
type: demo
status: draft
listed: false
featured: false
order: 330
---

> **DRAFT.** Hidden from the production site until `status` is changed. Replace every TODO, add a cover image, then set `status: demo` (or `live`).

## Problem

TODO: Someone types invoice and receipt details into a spreadsheet by hand every week.

## What we built

TODO: An extractor that reads invoice/receipt PDFs and returns clean JSON (supplier, date, totals, tax, line items), validated against a schema, then appends it to a Google Sheet.

## How it works

1. TODO: PDF arrives (upload, email attachment or folder).
2. TODO: Text/layout extraction (OCR when needed).
3. TODO: LLM or rules map fields to a fixed JSON schema; validation catches missing totals.
4. TODO: Row appended to Google Sheet; failures flagged for review.

## Tech

- TODO: PDF/OCR library, LLM, schema validation, Google Sheets API

## Result

TODO: Real accuracy on your own test set of sample documents (use fake/sample invoices only).
