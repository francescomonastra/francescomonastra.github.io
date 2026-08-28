---
title: "Software"
permalink: /software/
author_profile: true
---

This page collects codes, analysis tools, and simulation-related software that I develop or contribute to.

## Geant4 detector simulations

Codes and tools related to detector-background simulations, event analysis, and particle-interaction studies.

Repositories will be added as they become publicly available.

## Machine learning methods for high-energy astrophysics

**MAGI** (Multivariate Autoencoder for particle Generative Inference) — a conditional VAE that learns to sample physically consistent Geant4 particle crossings directly, giving a 194×/139× statistical amplification per transported particle and a 2–3× net speed-up for detector-background simulations, validated against real cosmic-ray data from the DM1.2 and SRON lab cryostats. Applied to cosmic-ray background modeling for the NewAthena X-IFU instrument; to be presented at ML4ASTRO3 (Valletta, Malta, September 2026). See the [Research](/research/) page for more on the underlying architecture.

Code, manual, and examples: [github.com/francescomonastra/MAGI](https://github.com/francescomonastra/MAGI).

**HENABICS** — an ongoing project aiming to cross-correlate data from different instruments and orbits to provide an online estimate of the particle background during X-ray observations, building on simulation-based inference approaches (invertible neural networks and neural posterior estimation) such as the work of [Barret & Dupourque](https://arxiv.org/abs/2401.06061), [Ardizzone](https://arxiv.org/abs/1808.04730), and [Backes](https://arxiv.org/abs/2212.08674).

Repository will be added once the code is ready for public release.