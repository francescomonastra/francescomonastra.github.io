---
title: "Research"
permalink: /research/
---

<link rel="stylesheet" href="{{ base_path }}/assets/css/scrollytelling.css">

<div class="rlog-shell">
  <nav class="rlog-channelnav" aria-label="Research sections">
    <button data-target="ch-interests"><span class="dot"></span><span class="lbl">CH.1&nbsp;INTERESTS</span></button>
    <button data-target="ch-magi"><span class="dot"></span><span class="lbl">CH.2&nbsp;MAGI</span></button>
    <button data-target="ch-henabics"><span class="dot"></span><span class="lbl">CH.3&nbsp;HENABICS</span></button>
  </nav>

  <div>
    <header class="rlog-hero">
      <canvas aria-hidden="true"></canvas>
      <div class="rlog-hero-inner">
        <div class="rlog-eyebrow">Francesco Monastra &middot; INAF-IAPS / ASI-SSDC</div>
        <h1>Artificial intelligence for particle-background subtraction in X-ray astronomy</h1>
        <p class="lede">That's my PhD thesis title, and the throughline of everything below: combining Geant4 simulations and machine learning to understand and suppress the particle background in X-ray detectors &mdash; from the NewAthena X-IFU instrument to a broader, multi-mission high-energy astrophysics network.</p>
        <div class="meta">
          <span class="rlog-chip">Rome, Italy</span>
          <span class="rlog-chip">Geant4</span>
          <span class="rlog-chip">TES detectors</span>
          <span class="rlog-chip">Generative ML</span>
        </div>
      </div>
    </header>

    <div id="scrolly-research" class="scrolly-container">
      <div class="scrolly-story">

{% capture body_interests %}
Detector-background work splits naturally into two halves: knowing how much background a design will see before it's built, and estimating it in real time once the instrument is flying. The two projects below are one for each half.
{% endcapture %}
        <section class="rlog-card" id="ch-interests" style="--accent:var(--blue); --accent-tint:var(--blue-tint);">
          <div class="chan"><span class="dot"></span><span class="rlog-eyebrow">CH.1 &middot; Research interests</span></div>
          <h2>Where background modeling meets instrument design</h2>
          {{ body_interests | markdownify }}
          <div class="rlog-tags">
            <span class="rlog-tag">X-ray instrumentation</span>
            <span class="rlog-tag">TES detectors</span>
            <span class="rlog-tag">Geant4</span>
            <span class="rlog-tag">Background mitigation</span>
            <span class="rlog-tag">NewAthena</span>
            <span class="rlog-tag">IAXO</span>
          </div>
        </section>

{% capture body_magi %}
I'm developing **MAGI** (Multivariate Autoencoder for particle Generative Inference), a Conditional Variational Autoencoder that learns the phase-space distribution &mdash; energy, position, and direction &mdash; of particles crossing a detector surface in Geant4 simulations. This allows sampling new, physically consistent events directly instead of re-running full particle transport.

The current architecture conditions on particle species and uses specialized output heads:
- **Geometry heads** &mdash; Gaussian and unit-circle-regularized heads for the radial and angular crossing coordinates
- **Energy gate** &mdash; a learned mixture of a conditional spline-flow continuum and narrow components pinned at measured fluorescence-line energies, trained with a focal objective so the rare lines aren't drowned out by the continuum
- **Learned latent prior** &mdash; a conditional coupling-flow prior over the latent code, rather than a fixed Gaussian

Validated against real cosmic-ray data from the DM1.2 and SRON lab cryostats, MAGI reproduces detector-level count rates to within a few percent. I'm currently extending this to rare, low-statistics sources &mdash; e.g. <sup>40</sup>K decays, where the achievable speed-up is far larger but still under validation &mdash; and applying MAGI to cosmic-ray background modeling for the NewAthena X-IFU detector.
{% endcapture %}
        <section class="rlog-card" id="ch-magi" style="--accent:var(--rust); --accent-tint:var(--rust-tint);">
          <div class="chan"><span class="dot"></span><span class="rlog-eyebrow">CH.2 &middot; MAGI</span></div>
          <h2>MAGI &mdash; fast generative simulation</h2>
          {{ body_magi | markdownify }}

          <div class="rlog-readout">
            <div class="cell"><div class="num" data-count="194" data-suffix="&times;">0</div><div class="lbl">DM1.2 amplification</div></div>
            <div class="cell"><div class="num" data-count="139" data-suffix="&times;">0</div><div class="lbl">SRON amplification</div></div>
            <div class="cell"><div class="num" data-count="2.03" data-decimals="2" data-suffix="&times;">0</div><div class="lbl">DM1.2 speed-up</div></div>
            <div class="cell"><div class="num" data-count="3.33" data-decimals="2" data-suffix="&times;">0</div><div class="lbl">SRON speed-up</div></div>
            <div class="cell"><div class="num" data-count="0.97" data-decimals="2">0</div><div class="lbl">DM1.2 closure R</div></div>
          </div>

          <figure class="rlog-scope">
            <div class="frame">
              <img src="{{ base_path }}/images/research/magi-validation-dm12-sron.png" alt="Full Geant4 simulation vs. MAGI-injected deposited-energy spectra for the DM1.2 and SRON XFDM cryostats, with Poisson-pull residuals below each panel">
            </div>
            <figcaption>Full Geant4 vs. MAGI-injected spectra, DM1.2 (muon channel) and SRON&nbsp;XFDM (Detector&nbsp;1, TES array) &mdash; detector-level rates agree to within a few percent.</figcaption>
          </figure>

          <div class="rlog-tags">
            <span class="rlog-tag">CVAE</span>
            <span class="rlog-tag">Spline flow</span>
            <span class="rlog-tag">Focal loss</span>
            <span class="rlog-tag">Coupling prior</span>
          </div>
          <div class="rlog-btnrow">
            <a class="rlog-btn" href="https://github.com/francescomonastra/MAGI">&#8599; github.com/francescomonastra/MAGI</a>
            <span class="rlog-btn ghost">ML4ASTRO3 &middot; Valletta, Sept 2026</span>
          </div>
        </section>

{% capture body_henabics %}
**HENABICS** is growing from a two-instrument prototype into a shared, multi-mission network for real-time particle-background estimation across high-energy astrophysics observatories &mdash; cross-correlating data from different X-ray instruments and orbits to estimate background **during** an observation, rather than relying on post-hoc modeling.

Built on simulation-based inference: invertible neural networks and neural posterior estimation. Current focus: validating on real background and radiation-environment data from XMM-Newton and eROSITA, as a first step toward the wider network, following [Barret & Dupourque](https://arxiv.org/abs/2401.06061), [Ardizzone](https://arxiv.org/abs/1808.04730), and [Backes](https://arxiv.org/abs/2212.08674).
{% endcapture %}
        <section class="rlog-card" id="ch-henabics" style="--accent:var(--violet); --accent-tint:var(--violet-tint);">
          <div class="chan"><span class="dot"></span><span class="rlog-eyebrow">CH.3 &middot; HENABICS</span></div>
          <h2>HENABICS &mdash; a multi-mission background network</h2>
          {{ body_henabics | markdownify }}
          <div class="rlog-tags">
            <span class="rlog-tag">Simulation-based inference</span>
            <span class="rlog-tag">Invertible NN</span>
            <span class="rlog-tag">Neural posterior estimation</span>
            <span class="rlog-tag">Multi-mission</span>
          </div>
        </section>

      </div>
    </div>

    <p class="rlog-footnote">More on this work so far on the <a href="{{ base_path }}/publications/">Publications</a> page.</p>
  </div>
</div>

<script src="{{ base_path }}/assets/js/scrollytelling.js"></script>
