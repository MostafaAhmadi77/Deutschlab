# DeutschLab 🇩🇪

A mobile-first web app for learning German, in the style of a language village, with a Persian interface.

## What's in this version

- **Books:** *Menschen*, *Starten wir!* and *Momente*, levels A1 to B2
  - Each book has its own cover card (title, level, publisher and ISBN where available) and a lesson list, so users know exactly which book they are opening
  - Each level includes a sample lesson with a German topic, a Persian explanation and a grammar note
  - Key vocabulary for each level, with device text-to-speech pronunciation
  - **Book reader:** on each book's page, users can pick the PDF of their own legally owned copy from their phone and read it right inside the app; the file is never uploaded or stored
- **Podcasts:** levelled from A1 to C1
  - Coffee Break German, Slow German, Easy German, Auf Deutsch gesagt
  - Plus DW's slowly spoken news
- **Stories:** levelled from A1 to C1
  - German text + Persian translation + vocabulary + comprehension questions + read-aloud
- **Dictionary & sentence translator:** 90 words (40 nouns, 26 verbs, 24 adjectives) with Persian meanings, word type, noun plurals and verb conjugations
  - Every word has exactly 10 sentences per level, for levels A1 to B2 — 40 generated sentences per word and 3,600 sentences in total
  - Search is live: typing in the translator box filters the list instantly; an exact single-word match shows the meaning and a link to the word's page directly, and near matches are suggested when there is no exact hit
  - Sentences are built from levelled templates: A1 simple, A2 with past tense and connectors, B1 with subordinate clauses, B2 with conditionals and advanced structures; every sentence can be played aloud
  - Sentence translator: an exact match with a generated sentence returns its precise translation; anything else gets a word-by-word gloss (recognising verb conjugations and noun plurals) with a clear warning that it is no substitute for a professional translation
- **Levelled grammar:** 24 separate topics, 6 per level from A1 to B2, following the order of *Menschen*, *Starten wir!* and *Momente*
  - Each topic: step-by-step teaching, related examples with pronunciation, and an interactive exercise before the quiz
  - A “Quiz for this topic” button at the end of each topic: 5 questions on that topic, with a score and answer explanations at the end
  - The quiz questions are original practice items written in the style and format of the Goethe / ÖSD exams — they are not real, unpublished Goethe or ÖSD questions
- **Progress tracking:** a “done” checkmark for lessons, podcasts and stories, stored in the browser
- Level filter (A1, A2, B1, B2, C1) and search across all sections

## Running it (no install, no build)

```bash
# Simple option: open index.html in a browser
# Better option (recommended):
python3 -m http.server 8000
# then visit: http://localhost:8000
```

It also works on an Android phone this way, and with “Add to Home Screen” it installs like an app (PWA — `manifest.json` is ready).

## Building a real Android app (next step)

This version is a mobile-first web app so the logic, content and interface can be seen and tested early. For an APK/AAB with Capacitor:

```bash
npm install @capacitor/core @capacitor/cli
npx cap init "DeutschLab" com.deutschlab.app --web-dir=.
npx cap add android
npx cap open android
```

The APK is then built from Android Studio.

## An important note on copyright

The official text and audio of the *Menschen*, *Starten wir!* and *Momente* books and of the named podcasts are **not in this repository**. What is here is an independently written study path: sample lessons, grammar summaries and common vocabulary written for teaching. The displayed covers are graphic designs generated inside the app with each book's exact title and details, not scans of the publisher's printed covers. To read a full book, users buy their own legal copy from Hueber using the listed ISBN and open it in the in-app reader. Adding official content to the app itself would require a licence from the publisher.

## Roadmap (subject to approval)

- Placement test and an end-of-lesson test for every lesson
- Flashcards with spaced repetition
- Complete grammar, conversation and listening sections
- Licensed audio for the books and podcasts
- A native Flutter/Kotlin Android version, if chosen

## Project structure

```
index.html        # App shell and bottom navigation (Android-app style)
css/style.css     # Mobile-first dark theme
js/data.js        # Books, podcasts and stories data
js/dictionary.js  # Dictionary (90 words) + sentence templates and the 10-sentences-per-level engine
js/grammar.js     # Grammar (24 topics, A1–B2) + examples, exercises and a 5-question quiz per topic
js/app.js         # App logic: filtering, search, progress, pronunciation, dictionary and sentence translator
manifest.json     # PWA installation
```
