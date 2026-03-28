---
layout: page
title: Characterising Control Roles in Multimodal Biosignals
description: Principled fusion frameworks for assistive systems (Phase 1, HEAT Lab)
img: assets/img/phase1_cover.jpg
importance: 1
category: ongoing
---

**Supervisors:** [Digby Chappell](https://ori.ox.ac.uk/people/digby-chappell) (HEAT), [Oiwi Parker Jones](https://eng.ox.ac.uk/people/oiwi-parker-jones) (PNPL)  
**Lab:** [Human-Centred Autonomy and Technology (HEAT)](https://ori.ox.ac.uk/groups/heat), Oxford Robotics Institute  
**Status:** Ongoing — AIMS CDT Project

Most multimodal biosignal control systems are evaluated against a single question: how accurate is the ensemble overall? This project asks a different one — *when* does each signal actually help, and when does it introduce noise?

The standard approach to multimodal fusion treats the combined signal as the unit of analysis, optimising for aggregate accuracy across steady-state tasks. But for the most part assistive devices don't fail in steady state. They fail under signal perturbation, degradation, and rapid task corrections — exactly the conditions where safety and robustness is most critical for the people relying on them. This project focuses on the control-relevant characteristics of individual biosignal modalities (latency, bandwidth, reliability, resolution, etc) to understand when each source provides useful input and when it should be down-weighted or overridden.

{% comment %}
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/biosignal_modalities.jpg" title="EMG, EEG, IMU and gaze tracking signals" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/signal_characterisation.jpg" title="Signal characterisation under perturbation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Phase 1 involves synchronised collection and characterisation of EMG, EEG, IMU and gaze tracking signals. Controlled experiments are designed to explicitly expose the differing strengths and limitations of each modality — particularly under perturbation and degradation rather than idealised steady-state conditions.
</div>
{% endcomment %}

This phase, developed within the [HEAT Lab](https://ori.ox.ac.uk/groups/heat) under the supervision of [Digby Chappell](https://ori.ox.ac.uk/people/digby-chappell) and [Oiwi Parker Jones](https://eng.ox.ac.uk/people/oiwi-parker-jones), focuses on the synchronised collection, characterisation, and fusion of four signal modalities: EMG (muscle activity), EEG (neural signals), IMU (motion and orientation), and gaze tracking. Controlled experiments are designed not to benchmark performance under ideal conditions, but to deliberately expose when each modality breaks down.

The primary output is not a new fusion strategy, but an empirically grounded framework for when existing fusion strategies should be applied. Rather than selecting fusion methods heuristically, the goal is to understand the control-relevant properties of each signal well enough to make that selection principled.

{% comment %}
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/fusion_framework.jpg" title="Principled fusion framework" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/degradation_conditions.jpg" title="Signal degradation conditions" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The framework targets real-world deployment conditions: signal noise, electrode displacement, fatigue, and rapid intent changes. Clinical deployment is a key design consideration throughout, even where it falls outside the immediate scope.
</div>
{% endcomment %}

Although clinical deployment is beyond the scope of this project phase, it is a constant design consideration. Experiments are framed around the conditions and constraints of real-world assistive device use — not just what is convenient in a lab setting - and this distinction matters. A system that works well under optimal conditions but degrades unpredictably under realistic use provides no safety guarantee to the person depending on it.

This project sits within a broader DPhil programme investigating how multimodal biosignal systems can be designed to extend a person's physical capacity and independence, keeping the user in the control loop rather than replacing their agency with an automated substitute.