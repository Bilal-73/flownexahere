---
title: "ProNexa: Private Personal Organiser for Android"
summary: "A private, encrypted, offline-first personal organiser for Android: money, bike, notes, journal, habits, prayer and study in one app, with no account, no server and no ads."
tag: "Android app"
services: [custom-software]
tech: [Flutter, Dart, SQLite3 Multiple Ciphers, Android Keystore, AES-256-GCM, Argon2id]
type: product
status: in-development
order: 110
facts:
  - { label: "Platform", value: "Android 7.0+ (Flutter)" }
  - { label: "Data", value: "On the phone only, encrypted (AES-256)" }
  - { label: "Account", value: "None. No server, no ads" }
---

## Problem

Personal life admin is spread across a dozen apps: an expense tracker, a notes app, a habit tracker, a prayer app, a fuel log. Most of them want an account, send your data to a server, show ads, or stop working without internet. For something as personal as money, journal entries and documents, that is the wrong trade.

## What we built

ProNexa is one Android app for daily life that keeps everything on your phone, encrypted. There is no account, no server and no ads, and every feature works offline. It is a FlowNexa product, past its first version and still in active development.

### Private by design

- **Encrypted storage:** all data lives in an encrypted SQLite database (SQLite3 Multiple Ciphers, AES-256), with the key held in the Android Keystore. Nothing is sent anywhere.
- **App lock:** 6-digit PIN, fingerprint unlock, auto-lock, a privacy cover in the app switcher and optional screenshot blocking. A recovery code resets the PIN.
- **Your backups, your control:** password-protected backup files (AES-256-GCM + Argon2id) you can save to Google Drive, a laptop or anywhere else, then restore on a new phone.

### What's inside

- **Money:** add an expense in three taps with a keypad that understands `120+80`; categories, monthly budgets with 80% / 100% alerts, monthly and yearly charts, savings goals, a lent/borrowed tracker with due-date reminders and partial repayments, recurring expenses, Excel import and export, and Pakistani (`Rs 1,05,000`) or international number formats.
- **Bike:** a fuel log that calculates whichever of amount, price per litre or litres you leave out; a true full-tank-to-full-tank fuel average with range estimate; fill-ups that add themselves to Money and stay in sync; a service schedule by km and/or date with reminders; history and charts.
- **Notes and journal:** notes with pins, colours, labels, checklists and autosave; a daily journal with mood, streaks, prompts and "on this day"; a bucket list where "Save for this" turns a dream into a savings goal; an ideas canvas of draggable, connected cards; and voice notes.
- **Daily life:** habits (daily, chosen weekdays or X times a week) with streaks and a 12-week heatmap; an offline Namaz tracker with prayer times for major cities or any coordinates; a Pomodoro study timer per subject that keeps running in the background; and a private self-control tracker with streaks, an urge log and insights.
- **Vault and tools:** an encrypted document vault for photos and PDFs, hidden from the gallery, with expiry reminders; search across everything; a home-screen widget for month spend, habits and prayers; a 30-day recently-deleted bin with Undo on every delete; and light, dark or system theme.

## How it works

1. Everything is stored in one encrypted SQLite database on the phone; the key never leaves the Android Keystore.
2. Each area (money, bike, notes, habits, study, vault…) has its own repository that the screens listen to, with fast synchronous reads.
3. Every record carries created, updated, device and soft-delete fields, which powers the recently-deleted bin today and keeps the data ready for future multi-device sync.
4. Backups are exported as password-protected files that the user stores wherever they like and restores on a new phone.
5. Optional features plug in through a module registry, so new areas can be added without touching the rest of the app.

## Tech

- **UI:** Flutter 3, Material 3
- **Database:** `sqlite3` with SQLite3 Multiple Ciphers (encrypted), migrations via `PRAGMA user_version`
- **Keys:** `flutter_secure_storage` (Android Keystore)
- **Crypto:** `cryptography` (AES-256-GCM, Argon2id, PBKDF2)
- **Notifications:** `flutter_local_notifications` with `timezone`
- **Charts:** `fl_chart`
- **Also:** `excel`, `file_picker`, `image_picker`, `record`, `just_audio`, `home_widget`, `adhan`, `local_auth`
- **Quality:** logic tests and tap-through UI tests for every page

## Result

ProNexa is past its first version and in active development. It shows the kind of engineering we bring to client work: privacy and security designed in from the start, offline-first data, safe backups, and a codebase organised so features can be added cleanly.
