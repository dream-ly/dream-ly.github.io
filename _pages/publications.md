---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{https://scholar.google.com.hk/citations?user=AuxxOSYAAAAJ&hl=zh-CN}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

* Unpacking ICT-supported Social Connections and Support of Late-life Migration: From the Lens of Social Convoys
* "Are You Really Sure?" Understanding the Effects of Human Self-Confidence Calibration in AI-Assisted Decision Making
* Who should i trust: Ai or myself? leveraging human and ai correctness likelihood to promote appropriate trust in ai-assisted decision-making
* Opo-fcm: A Computational Affection based occ-pad-ocean Federation Cognitive Modeling Approach
* 基于双流结构缩放和多重注意力机制的轻量级脑电情感识别方法

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
