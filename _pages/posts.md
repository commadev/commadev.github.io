---
layout: home-without-head-image
title: Posts
description: "List of posts"
permalink: /posts/
---
{% for post in site.posts %}
<div class="post-list" {%if post.image %}style="background-image:url({{ site.url }}{{ post.image }})"{% endif %}>
	<a href="{{ site.url }}{{ post.url }}" class="post-title">
		<div class="post-mask">
			<h3>
				{{ post.title }}
			</h3>
			<span class="date">{{ post.date | date: '%d %b %Y' }}</span>
		</div>
	</a>
</div>
{% endfor %}