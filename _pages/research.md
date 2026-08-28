---
title: "Research"
permalink: /research/
author_profile: true
---

<link rel="stylesheet" href="{{ base_path }}/assets/css/scrollytelling.css">

<div class="scrolly-container" id="scrolly-research">
  <div class="scrolly-story">

{% capture body_interests %}
My research focuses on detector simulations and data-analysis methods for high-energy astrophysics instrumentation.

**Main research interests**

- X-ray instrumentation for space-based observatories
- Transition-Edge Sensor detectors
- Geant4 simulations of particle interactions in detector systems
- Background modeling and mitigation via detector design
- Machine-learning techniques for event classification and background suppression and for efficiency enhancement in Geant4 multi-stage simulations
- Instrumentation for future space missions such as ATHENA and for low-background on Earth experiments such as IAXO
{% endcapture %}
<div class="scrolly-step" data-category="interests">
  <h2>Research Interests</h2>
  {{ body_interests | markdownify }}
</div>

{% capture body_magi %}
I'm developing **MAGI** (Multivariate Autoencoder for particle Generative Inference), a Conditional Variational Autoencoder (CVAE) that learns the phase-space distribution — energy, position, and direction — of particles crossing a detector surface in Geant4 simulations. This allows sampling new, physically consistent events directly instead of re-running full particle transport.

The current architecture conditions on particle species and uses specialized output heads:
- **Geometry heads** — Gaussian and unit-circle-regularized heads for the radial and angular crossing coordinates
- **Energy gate** — a learned mixture of a conditional spline-flow continuum and narrow components pinned at measured fluorescence-line energies, trained with a focal objective so the rare lines aren't drowned out by the continuum
- **Learned latent prior** — a conditional coupling-flow prior over the latent code, rather than a fixed Gaussian

Validated against real cosmic-ray data from the DM1.2 and SRON lab cryostats, MAGI reproduces detector-level count rates to within a few percent while giving a 194×/139× statistical amplification per transported particle, translating into a 2–3× net speed-up that improves with every additional detector-design iteration reusing the same trained model. I'm currently extending this to rare, low-statistics sources — e.g. ⁴⁰K decays, where the achievable speed-up is far larger but still under validation — and applying MAGI to cosmic-ray background modeling for the NewAthena X-IFU detector.

This work will be presented at ML4ASTRO3 (Valletta, Malta, September 2026). Code, manual, and examples: [github.com/francescomonastra/MAGI](https://github.com/francescomonastra/MAGI).
{% endcapture %}
<div class="scrolly-step" data-category="simulation">
  <h2>MAGI: Fast Generative Simulation</h2>
  {{ body_magi | markdownify }}
  <div class="scrolly-visual">
    <img src="{{ base_path }}/images/research/magi-validation-dm12-sron.png" alt="Full Geant4 simulation vs. MAGI-injected deposited-energy spectra for the DM1.2 and SRON XFDM cryostats, with Poisson-pull residuals below each panel">
    <p class="scrolly-visual-caption">Full Geant4 simulation vs. MAGI-injected spectra for the DM1.2 (muon channel) and SRON&nbsp;XFDM (Detector&nbsp;1, TES array) cryostats, with Poisson-pull residuals below each panel — detector-level rates agree to within a few percent.</p>
  </div>
</div>

{% capture body_henabics %}
I'm also developing **HENABICS** to cross-correlate data from different X-ray instruments and orbits. This provides real-time particle background estimates during observations, replacing post-hoc modeling.

Building on simulation-based inference (SBI):
- **Invertible neural networks**
- **Neural posterior estimation**
 
Current focus: Applying to real background/radiation data from XMM-Newton and eROSITA, following methods by [Barret & Dupourque](https://arxiv.org/abs/2401.06061), [Ardizzone](https://arxiv.org/abs/1808.04730), and [Backes](https://arxiv.org/abs/2212.08674).
{% endcapture %}
<div class="scrolly-step" data-category="inference">
  <h2>HENABICS: Real-Time Background Inference</h2>
  {{ body_henabics | markdownify }}
</div>

  </div>
</div>

<script src="https://unpkg.com/scrollama@3.2.0/build/scrollama.min.js"></script>
<script src="{{ base_path }}/assets/js/scrollytelling.js"></script>
<script>
  window.scrollytellingContainers = [
    { containerId: 'scrolly-research', visualId: 'scrolly-research-visual' }
  ];
  // Initialize scrollytelling
  document.addEventListener('DOMContentLoaded', function() {
    if (window.initScrollytelling) {
      window.initScrollytelling({ containerId: 'scrolly-research' });
    }
  });
</script>