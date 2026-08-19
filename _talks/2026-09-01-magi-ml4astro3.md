---
title: "MAGI (Multivariate Autoencoder for particle Generative Inference): a generative ML framework for accelerated multi-stage particle simulations"
collection: talks
type: "Flash Talk"
talk_type: "Flash Talk"
venue: "ML4ASTRO3 -- International Conference on Machine Learning for Astrophysics"
date: 2026-09-01
location: "Valletta, Malta"
excerpt: 'A CVAE-based generative ML framework for accelerating Geant4 particle transport simulations, applied to environmental background modeling for TES arrays with active anticoincidence systems (NewAthena, IAXO).'
---

Detailed particle transport simulations, particularly through the Geant4 toolkit, are essential for evaluating instrumental particle backgrounds that ultimately limit detector sensitivity and drive the design and optimization of low-background instrumentation in high-energy astrophysics and particle physics. By propagating incident particle fluxes through detailed mass models and simulating their interactions up to detector response, Geant4 provides a physically accurate but often computationally prohibitive framework, especially when rare-event backgrounds and complex detector configurations must be explored over large parameter spaces.

We present the development of a machine-learning framework based on Conditional Variational Autoencoders (CVAEs) aimed at accelerating Monte Carlo particle transport simulations while preserving the multi-dimensional statistical properties of the original particle distributions. The method is designed to learn correlated features emerging from particle interactions with complex geometries and to generate statistically faithful synthetic event samples, conditioned on relevant physical parameters, to enhance simulation efficiency.

The framework is currently being applied to simulations of environmental background in prototype Transition-Edge Sensor arrays with active anticoincidence systems, motivated by ultra-low-background studies for high-energy space missions and dark matter experiments such as NewAthena and IAXO, respectively. In parallel, its adaptability to other computationally demanding cases is being investigated, particularly for space-based high-energy observatories and cosmic-ray experiments.

Particular emphasis is placed on assessing generative fidelity through distribution-level comparisons and on estimating the achievable reduction in computational cost relative to full Geant4 simulations. This work explores generative machine learning as a flexible fast-simulation approach for complex background modeling, especially in data-scarce regimes and multiscale simulations. The approach opens potential applications for detector optimization, large-scale Monte Carlo production, and rapid exploration of low-background instrument configurations across a broad range of astroparticle and space instrumentation studies.

Slides and materials will be added after the conference.
