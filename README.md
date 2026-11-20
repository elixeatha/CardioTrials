# Trial of the Day – Cardiology Quiz

A dependency-free web app that shows one landmark cardiovascular trial per day.
Each day you get five questions (trial name, year, key finding, two clinical-context questions),
a trial **design diagram**, and a **key figure** that unlocks once you've answered the findings question.
Past days are kept in an **archive** for practice, with a streak and average score.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npm start        # http://localhost:8000
```

No build step, no dependencies.

## How the daily trial is chosen

`EPOCH` in `src/app.js` is day 0. The trial for a given day is `ORDER[dayNumber % trials.length]`,
where `ORDER` is a fixed seeded shuffle of the trials, so everyone sees the same trial on the same
local date and the archive is reproducible. Answer options are also generated with a seeded RNG
(per day and trial), so a past quiz looks identical when you revisit it.

Progress (scores, streak) is stored in `localStorage` under `ctq-v3`. If you change `EPOCH` or the
number or order of trials, day numbers map to different trials: bump the storage key so old scores
don't attach to the wrong trial.

## Add or edit a trial

Edit `data/trials.js`. Each trial:

```js
{
  n: "PARADIGM-HF",            // short name (shown after answering)
  full: "…full trial title…",
  y: 2014, j: "N Engl J Med",  // year and journal
  cat: "Heart failure",        // category; name distractors prefer the same category
  pop: "…population…", N: "8,442",
  arms: ["Sacubitril/valsartan", "Enalapril"],   // 2–4 arms
  fu: "Median 27 months",
  ep: "CV death or HF hospitalisation",
  stat: "21.8% vs 26.5% (HR 0.80)",
  km: [27, "months", [21.8, 26.5]],  // [follow-up length, unit, end event % per arm, approx?]
  f: "Correct finding",
  fw: ["wrong 1", "wrong 2", "wrong 3"],
  q: [                                  // exactly two context questions
    ["Question?", "Correct", ["w1", "w2", "w3"], "Explanation"],
    ["Question?", "Correct", ["w1", "w2", "w3"], "Explanation"]
  ]
}
```

Then run `npm test` to validate. Set the optional 4th element of `km` to `true` when end rates are
derived from annual event rates, so the chart is labelled "approximate".

## About the figures

The **key figure** is an original schematic drawn from each trial's published headline event rates
(curve shapes are illustrative, not reconstructed patient-level data). It is **not** the journal's
figure. Trial data were compiled from memory of the primary publications and must be verified
against the papers before being relied on. Trials were chosen mostly from the
[WikiJournalClub usable articles list](https://www.wikijournalclub.org/wiki/WikiJournalClub:Usable_articles#Cardiology).

## Deploy to GitHub Pages

1. Push to a repo's `main` branch.
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. The included workflow validates the data and publishes the site.

## Licence

Add a licence of your choice before publishing (none is included).
