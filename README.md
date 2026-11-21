# Spectrum Test

A quick timed test (about 2 minutes, 16 questions) that ends in a colour:
RED = female-typical answers, BLUE = male-typical answers, PURPLE in between.
The person taking it tells the colour to whoever gave the test.

## Files

- `index.html` – the whole test (no libraries, no build step)
- `drafts/draft1.html` – the first draft, kept for comparison
- `docs/index.html` – standalone copy served by GitHub Pages; rebuild it with `node build.js` after editing `index.html`

Live: https://mulkmulkmulk.github.io/spectrum-test/

## How a run is built

- 3 job questions, 2 hobby questions, 3 personality questions and 2 partner-preference questions,
  each drawn at random from a larger pool (38 items in total)
- 1 favourite-colour pick and 1 paired colour comparison (hues jittered each run)
- 4 mental-rotation puzzles with randomly generated 3D block shapes
- 7-second timer per question (10 s for shapes); answer order is shuffled every run

## Scoring

Each answer gets a log-likelihood ratio (male vs female) from an approximate effect size d,
assuming the underlying trait is N(±d/2, 1). Answers in the same domain are divided by
1 + (k−1)·r so correlated answers aren't counted twice, then everything is summed and
scaled by 1.15 (calibration factor fitted in simulation). The resulting probability maps to
7 named colours: RED, ROSE, MAGENTA, PURPLE, VIOLET, INDIGO, BLUE.

Simulated accuracy with these effect sizes is about 78%, with well-calibrated percentages.
Real-world accuracy hasn't been measured yet.

Sources are listed inside the page under "How it works".
