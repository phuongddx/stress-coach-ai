# Stress Levels

StressMonitor turns each reading into a stress score from 0 to 100 and places it on one of five levels. Ripple, the app's otter coach, changes its face with the level, so you can see where you are at a glance.

<div class="level-table">

| Ripple | Level | Score | Meaning |
|--------|-------|-------|---------|
| <img class="level-face" src="/img/ripple/relaxed-head.svg" width="48" height="48" alt="Ripple smiling with eyes closed"> | <span class="level-name"><span class="level-dot" style="background:#8CC12A"></span>**Relaxed**</span> | 0–25 | High HRV, low resting HR — very low body pressure |
| <img class="level-face" src="/img/ripple/mild-head.svg" width="48" height="48" alt="Ripple with a small, calm smile"> | <span class="level-name"><span class="level-dot" style="background:#4FA89D"></span>**Mild**</span> | 25–50 | Normal HRV and resting HR — manageable pressure |
| <img class="level-face" src="/img/ripple/elevated-head.svg" width="48" height="48" alt="Ripple looking uneasy, with a bead of sweat"> | <span class="level-name"><span class="level-dot" style="background:#F2BC50"></span>**Elevated**</span> | 50–75 | Lower HRV or raised resting HR — consider lifestyle adjustments |
| <img class="level-face" src="/img/ripple/high-head.svg" width="48" height="48" alt="Ripple worried and frowning, with a bead of sweat"> | <span class="level-name"><span class="level-dot" style="background:#E2683C"></span>**High**</span> | 75–90 | Clearly lower HRV and higher resting HR — a good time for a break or a breathing session |
| <img class="level-face" src="/img/ripple/severe-head.svg" width="48" height="48" alt="Ripple worried, with tears in its eyes"> | <span class="level-name"><span class="level-dot" style="background:#E46A80"></span>**Severe**</span> | 90–100 | Significantly decreased HRV, significantly increased resting HR — high overload risk |

</div>

A score that sits exactly on a boundary belongs to the higher level. For example, 25 is Mild and 90 is Severe.

The score is personalized to your historical baseline — it is not based on fixed universal values. The same absolute HRV number may give a Relaxed score for one person and an Elevated score for another.

## How Levels Are Calculated

The stress score combines:
- **HRV component** (70% weight) — deviation from your personal baseline
- **Resting heart rate component** (30% weight) — deviation from your personal resting HR

The combined 0–100 score maps to the five levels above.

## Why Personalization Matters

StressMonitor evaluates each reading relative to **your** 30-day history, not population averages. This means:

- A new user's readings may be less accurate for the first 7–30 days while the baseline builds
- After 30 days, the app has a stable personal reference for meaningful comparisons
- Sudden lifestyle changes (new exercise routine, illness, travel) temporarily shift the baseline
