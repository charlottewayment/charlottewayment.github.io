---
layout: page
title: Groundwater Forecasting in Sparse Sensor Networks
description: GAT-LSTM for spatio-temporal prediction at ungauged sites (MSc Thesis, Durham)
img: assets/img/gat_lstm_cover.jpg
importance: 3
category: completed
related_publications: false
---

**Supervised by:** Dr Julia Knapp, Durham University  
**Thesis grade:** 89% — First in Year  
**Award:** Winner, The Curry Prize for best MSc Thesis in an earth sciences application in the UK (2026)  
**HPC:** Durham University NVIDIA CUDA Centre (NCC)  
**Status:** Completed — Master of Data Science, Durham University

27% of monitored UK aquifers are knowingly over-abstracted. Effective groundwater management depends on knowing what is happening not just at monitored sites, but across the large regions that have no sensors at all. This thesis developed a hybrid deep learning architecture to predict groundwater levels at entirely ungauged locations — using only the spatial and temporal context available from surrounding sites and environmental data.

The core challenge is a familiar one in environmental modelling where sensors are sparse, unevenly distributed, and often noisy. Traditional physics-based models require extensive manual calibration that fail to scale beyond a local application, while standard deep learning models generalise poorly to unseen locations. The GAT-LSTM (Graph Attention – Long Short-Term Memory) network proposed here was designed to address both failure modes simultaneously, by explicitly disentangling the spatial and temporal drivers of groundwater response and learning to recombine them.

{% comment %}
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/eden_esk_geology.jpg" title="Eden and Esk catchment superficial geology" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/eden_esk_hydrology.jpg" title="Eden and Esk monitoring station network" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The Eden and Esk management catchment in northwest England: a 2,156 km² area with just 14 groundwater monitoring stations, spanning two geologically contrasting principal aquifer systems. Its sparse monitoring and hydrogeological heterogeneity made it a deliberately challenging test bed for ungauged prediction.
</div>
{% endcomment %}

The model was tested using a leave-one-station-out (LOSO) cross-validation protocol — withholding all groundwater data from one station at a time and predicting it purely from spatial and temporal context. This is a rigorous analogue of real-world deployment, where a model must generalise to locations it has never seen during training. Across 14 LOSO folds, the GAT-LSTM achieved a median Kling-Gupta Efficiency (KGE) of 0.676 — consistently outperforming LSTM-only, GAT-only, and fixed-gate ablations, as well as non-ML seasonal baselines, with 70% of daily predictions falling within 0.3σ of observed groundwater levels.

{% comment %}
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gat_lstm_architecture.jpg" title="GAT-LSTM model architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The GAT-LSTM architecture, combining a graph attention encoder for spatial embeddings with an LSTM temporal pathway, fused via a learned sigmoid gate.
</div>
{% endcomment %}

Performance was not uniform. The model handled fast-responding fractured aquifer systems well but struggled with slow-responding intergranular systems, where recharge horizons span months to years and the 28-day truncated backpropagation window proved insufficient. Rather than masking this limitation, the analysis explored the mechanisms driving it, demonstrating that stratifying results by bedrock flow type and aquifer productivity exposed a clear physical account of *where* and *why* the model fails.

{% comment %}
<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/great_musgrave_hydrograph.jpg" title="Great Musgrave - 75th percentile station" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/baronwood_hydrograph.jpg" title="Baronwood - 25th percentile station" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Predicted vs observed groundwater levels at the 75th percentile station (Great Musgrave, fractured aquifer, KGE 0.791) and 25th percentile station (Baronwood, intergranular aquifer, KGE 0.491). The contrast illustrates how bedrock flow type governs where the model succeeds and where it does not.
</div>
{% endcomment %}

The work also introduced intrinsic interpretability throughout the architecture, with learned fusion gate coefficients (α) and FiLM node conditioning parameters (γ, β) providing per-station and per-timestep diagnostics of how the spatial and temporal pathways are being balanced. Rather than being calculated as post-hoc attribution tools, these were are embedded in the forward pass and designed to support regulatory decision-making contexts where explainability is a requirement. Mechanistic interpretability, however, remains an ongoing challenge deserving of future focus in this work.

Several themes from this project have carried forward directly into my DPhil research:
1. the importance of characterising *when* a model fails rather than just how well it performs on average;
2. the value of structuring models around real-world deployment constraints rather than optimising for idealised benchmark conditions;
3. and the challenge of building systems that remain useful and interpretable in data-sparse, high-stakes settings.