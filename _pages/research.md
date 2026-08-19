---
title: "Research"
permalink: /research/
author_profile: true
---

My research focuses on detector simulations and data-analysis methods for high-energy astrophysics instrumentation.

## Main research interests

- X-ray instrumentation for space-based observatories
- Transition-Edge Sensor detectors
- Geant4 simulations of particle interactions in detector systems
- Background modeling and mitigation via detector design
- Machine-learning techniques for event classification and background suppression and for efficiency enhancement in Geant4 multi-stage simulations
- Instrumentation for future space missions such as ATHENA and for low-background on Earth experiments such as IAXO

## MAGI: generative modeling for fast background simulation

I'm developing **MAGI** (Multivariate Autoencoder for particle Generative Inference), a Conditional Variational Autoencoder (CVAE) that learns the phase-space distribution — energy, position, and direction — of particles crossing a detector surface in Geant4 simulations, so that new, physically consistent events can be sampled directly instead of re-running full particle transport. The architecture uses per-variable output heads: a categorical head for the energy spectrum, and Gaussian and unit-circle-regularized heads for the radial and angular geometry, together with task-adaptive loss weighting to balance the different physical quantities during training. I'm applying this to accelerate cosmic-ray background modeling for the NewAthena X-IFU detector, and currently retraining it on an expanded cosmic-ray dataset following updates to the underlying Geant4 mass model.

## HENABICS: online background estimation across missions

I'm also working on **HENABICS**, aimed at cross-correlating data from different X-ray instruments and orbits to provide an online estimate of the particle background during an observation, rather than relying solely on post-hoc modeling. This builds on simulation-based inference methods — invertible neural networks and neural posterior estimation — following the work of [Barret & Dupourque](https://arxiv.org/abs/2401.06061), [Ardizzone](https://arxiv.org/abs/1808.04730), and [Backes](https://arxiv.org/abs/2212.08674). The current focus is on real background and radiation-environment data from XMM-Newton and eROSITA.