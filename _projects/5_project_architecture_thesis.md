---
layout: page
title: Urban-Scale Modelling for a Net-Zero Scotland
description: Cluster-based retrofit planning for Edinburgh's domestic building stock (MA Thesis, University of Edinburgh)
img: assets/img/edinburgh_cover.jpg
importance: 5
category: academic
---

**Supervised by:** Dr Alessia Calafiore, University of Edinburgh  
**Thesis grade:** 82% — First in Year (all four years)  
**Status:** Completed — MA (Hons) Architecture, University of Edinburgh, 2020–2024  
**Category:** Academic

Over half of domestic properties in Edinburgh fell below the EPC Band C target required by Scotland's Heat in Buildings Strategy, with domesitc buildings accounting for roughly 30% of Scottish energy consumption and 13% of total emissions. With the Scottish Government committing to net-zero by 2045, and Edinburgh's own target is 2030, a successful transition to retrofitting scottish policies is not a lack of policy ambition - multiple retrofit funding streams were already active at the time of this project - the challenge was scale, alignment, and domestic uptake.

This thesis developed a data-driven, policy-aligned modelling pipeline to classify Edinburgh's domestic building stock into focused retrofit typologies, mapped spatially across the city in a form directly usable by local authorities, community organisations, and residents.

{% comment %}
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/edinburgh_cf_clusters.jpg" title="Building Characteristic (CF) Clusters" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/edinburgh_if_clusters.jpg" title="Intervention Feature (IF) Clusters" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/edinburgh_intersecting_clusters.jpg" title="Intersecting Clusters" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    (a) Building Characteristic clusters — structural typologies based on age, glazing, property type and tenure. (b) Intervention Feature clusters — energy performance profiles based on wall, window, heating and lighting efficiency. (c) Intersection clusters — 12 final retrofit typologies combining both spaces, mapped across Edinburgh's datazone boundaries.
</div>
{% endcomment %}

The methodological contribution is a feature-based intersection clustering approach novel which used two concurrent K-Means models in place of clustering on a single feature space. These focused feature spaces were:

- **Characteristic Features (CF):** Fixed structural attributes, such as construction age, built form, glazing area, external wall count, and listed status.
- **Intervention Features (IF):** Modifiable energy performance attributes, such as window, lighting, heating efficiency scores, and fuel sources.

Each building is assigned a combined ID from its CF and IF cluster, generating typologies that are simultaneously physically grounded (in what the building is) and intervention-specific (in what that building needs to change). This separation matters for policy: a pre-1919 tenement with poor wall insulation requires a different intervention pathway than a post-war block with decent fabric but an inefficient heating system — even if both fall below EPC Band C.

{% comment %}
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/edinburgh_archetype_examples.jpg" title="Building archetype examples by cluster" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/edinburgh_simd_overlay.jpg" title="SIMD deprivation overlay" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: representative building photographs for each characteristic cluster — from pre-1919 tenements and sandstone flats to post-war bungalows and late 20th-century new builds. Right: cluster IDs overlaid with Scottish Index of Multiple Deprivation (SIMD) scores, identifying where energy vulnerability and social inequality compound.
</div>
{% endcomment %}

The final model produced 12 distinct building stock typologies across the city, each carrying a retrofit priority, a primary intervention focus (fabric-first, heating system, fuel source, or combined), and an estimated proportion of properties below EPC Band C. The typologies were validated against domain heuristics and silhouette scores, with PCA used diagnostically to confirm feature orthogonality rather than as a dimensionality reduction step.

A key insight from early research was that low retrofit uptake — particularly in lower-income areas — was not primarily a funding gap. Multiple schemes were already active (Warmer Homes Scotland, Area-Based Schemes, Historic Environment Scotland grants), but awareness and eligibility matching were poor. The model was therefore designed not just to classify buildings but to *interface directly with existing policy mechanisms*: for every archetype produced by the intersection clustering, the system identifies which current funding schemes that building profile qualifies for — without requiring new legislation, funding, or administrative infrastructure.

This led to a practical application prototype - a platform mock-up where a resident could input their address, see their building archetype, and immediately access tailored guidance on grant eligibility, insulation support, and heating upgrades. The same backend could support local authority outreach campaigns, directing retrofit programmes not just where they are technically needed but where uptake has historically been lowest.

The methodology was designed to be generalisable and scalable nationally from the outset. Data pipelines integrated multiple open-source government datasets — EPC records, SIMD deprivation indices, OS spatial data, BGS geology — with principled handling of missingness, multicollinearity, and inconsistently encoded categorical variables across sources.

Several processes established here run through all subsequent work:
1. that interpretability is a design requirement rather than an optional extra;
2. that technically rigorous outputs are only useful when legible to the people who need to act on them;
3. and that building systems around real-world constraints from the start produces more deployable results than retrofitting those considerations later.
