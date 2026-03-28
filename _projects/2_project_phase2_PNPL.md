---
layout: page
title: Uncertainty-Aware Allocation of Multimodal Biosignals for Robust Control
description: Adaptive signal weighting for assistive devices under degradation (Phase 2, PNPL)
img: assets/img/phase2_cover.jpg
importance: 2
category: ongoing
---

**Supervisors:** [Oiwi Parker Jones](https://eng.ox.ac.uk/people/oiwi-parker-jones) (PNPL), [Digby Chappell](https://ori.ox.ac.uk/people/digby-chappell) (HEAT)  
**Lab:** [Neural Processing Lab (PNPL)](https://neural-processing-lab.github.io/), University of Oxford  
**Status:** Ongoing — AIMS CDT Project

When a biosignal-controlled assistive device loses confidence in a signal due to degradation, drift, or failure, what should it do? The simplest answer is to stop and to halt the action until the signal recovers and, for many robotic systems, this conservative response is correct. However, for assistive body-interfacing devices worn by people within biomedical applications (e.g. prosthetic limbs) it can introduce as much risk as the decoding error it was designed to prevent.

This project, developed within the [Neural Processing Lab (PNPL)](https://neural-processing-lab.github.io/) under the supervision of [Oiwi Parker Jones](https://eng.ox.ac.uk/people/oiwi-parker-jones) and [Digby Chappell](https://ori.ox.ac.uk/people/digby-chappell), builds on the fusion framework developed in [Phase 1](/projects/phase1_HEAT) by introducing an uncertainty-aware control layer that adapts in real time to signal degradation instead of defaulting to a binary halt.

{% comment %}
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/uncertainty_layer.jpg" title="Uncertainty-aware control layer" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/signal_allocation.jpg" title="Adaptive signal allocation under degradation" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/control_stability.jpg" title="Control stability under failure modes" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The uncertainty-aware layer uses calibrated confidence estimates to adaptively weight, down-weight, or override individual biosignal modalities — maintaining control stability under degradation rather than triggering conservative system halts.
</div>
{% endcomment %}

The approach is inspired by the [GUARDIAN framework](https://arxiv.org/abs/2511.20570) — a real-time neuro-symbolic verification system that enforces safety in neural signal-controlled robotics by halting actions when signals exceed an uncertainty threshold. GUARDIAN's runtime monitoring approach is well-suited to many robotic systems, but assistive devices demand more nuance to avoid the abrupt action interruption for a person mid-motion.

As such, this project focuses on adaptive allocation, deciding at each moment whether to trust, down-weight, or override a given modality to maintain stable control, rather than enforcing a binary pass/fail safety gate. Calibrated confidence and reliability estimates from Phase 1 are used to build a control layer that degrades safely and robustly under signal failure modes rather than failing in catastrophic manner.

{% comment %}
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/adaptive_allocation.jpg" title="Adaptive modality allocation under signal degradation" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/failure_modes.jpg" title="Signal failure modes" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Rather than chasing marginal accuracy gains on laboratory benchmarks, both phases of this project are oriented around a single question: when and how can multimodality make assistive control more robust to the failures that actually matter in real-world use?
</div>
{% endcomment %}

The overarching goal across both phases is not to demonstrate marginal accuracy gains over unimodal baselines on laboratory benchmarks. It is to understand *when and how* multimodality genuinely improves control robustness under the kinds of degradation and uncertainty that real-world assistive device deployment involves, and to build technology that extends a person's physical capacity and independence while keeping the user in the control loop. This connects to a broader commitment running through both phases: that assistive systems should be designed around their failure modes from the start, not as an afterthought once benchmark performance has been established.
