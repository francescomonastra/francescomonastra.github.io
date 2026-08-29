---
title: "Software"
permalink: /software/
---

<header class="page-hero">
  <div class="rlog-eyebrow">Code &amp; tools</div>
  <h1>Software</h1>
  <p class="lede">Simulation pipelines and machine-learning tools I build for detector-background work, released as they mature.</p>
</header>

<div class="rlog-cardlist">

<section class="rlog-card" style="--accent:var(--blue); --accent-tint:var(--blue-tint);">
  <div class="chan"><span class="dot"></span><span class="rlog-eyebrow">Geant4 simulations</span></div>
  <h2>Detector-background simulation tools</h2>
  <p>Codes and tools related to detector-background simulations, event analysis, and particle-interaction studies.</p>
  <p class="rlog-note">Repositories will be added as they become publicly available.</p>
</section>

{% capture body_magi %}
**MAGI** (Multivariate Autoencoder for particle Generative Inference) &mdash; a conditional VAE that learns to sample physically consistent Geant4 particle crossings directly, giving a 194&times;/139&times; statistical amplification per transported particle and a 2&ndash;3&times; net speed-up for detector-background simulations, validated against real cosmic-ray data from the DM1.2 and SRON lab cryostats. Applied to cosmic-ray background modeling for the NewAthena X-IFU instrument; to be presented at ML4ASTRO3 (Valletta, Malta, September 2026).
{% endcapture %}
<section class="rlog-card" style="--accent:var(--rust); --accent-tint:var(--rust-tint);">
  <div class="chan"><span class="dot"></span><span class="rlog-eyebrow">Machine learning</span></div>
  <h2>MAGI &mdash; fast generative simulation</h2>
  {{ body_magi | markdownify }}
  <div class="rlog-tags">
    <span class="rlog-tag">CVAE</span>
    <span class="rlog-tag">Spline flow</span>
    <span class="rlog-tag">Focal loss</span>
  </div>
  <div class="rlog-btnrow">
    <a class="rlog-btn" href="https://github.com/francescomonastra/MAGI">&#8599; github.com/francescomonastra/MAGI</a>
    <a class="rlog-btn ghost" href="{{ base_path }}/research/">More on the architecture &rarr;</a>
  </div>
</section>

{% capture body_henabics %}
**HENABICS** &mdash; growing from a two-instrument prototype into a shared, multi-mission network for real-time particle-background estimation across high-energy astrophysics observatories, cross-correlating data from different instruments and orbits to estimate background during an observation rather than relying on post-hoc modeling. Built on simulation-based inference (invertible neural networks and neural posterior estimation); currently validating on real data from XMM-Newton and eROSITA, following the work of [Barret & Dupourque](https://arxiv.org/abs/2401.06061), [Ardizzone](https://arxiv.org/abs/1808.04730), and [Backes](https://arxiv.org/abs/2212.08674).
{% endcapture %}
<section class="rlog-card" style="--accent:var(--violet); --accent-tint:var(--violet-tint);">
  <div class="chan"><span class="dot"></span><span class="rlog-eyebrow">Machine learning</span></div>
  <h2>HENABICS &mdash; a multi-mission background network</h2>
  {{ body_henabics | markdownify }}
  <div class="rlog-tags">
    <span class="rlog-tag">Simulation-based inference</span>
    <span class="rlog-tag">Invertible NN</span>
    <span class="rlog-tag">Neural posterior estimation</span>
  </div>
  <p class="rlog-note">Repository will be added once the code is ready for public release.</p>
</section>

</div>
