---
layout: compress
title: Posts
description: "List of posts"
permalink: /posts/
---

<html>
{% include head.html %}
  <body id="posts">

    <div class="block-left">
      <div class="content">
        <a href="{{ site.url }}" class="logo"><img src="{{ site.url }}/assets/images/{{ site.logo | '-small.' }}"></a>
        <h1 class="section-title">{{ page.title}}<em>/</em>
        </h1>
      </div>
    </div>

    <div class="block-right">
      <a href="/posts" title="posts" class="posts-menu-icon"></a>
      <div class="content">
        <ul class="posts-list">
        {% for post in site.posts %}
          <li>
            <h2>
              <a href="{{ site.url }}{{ post.url }}" class="post-title">
                <span>{{ post.title | markdownify | remove: "<p>" | remove: "</p>" }}</span>
              </a>
              <span class="date">{{ post.date | date: '%d %b %Y' }}</span>
            </h2>
            <p>{{ post.excerpt | strip_html | truncatewords:10 }}</p>
            <ul class="tags">
            {% for tag in post.tags %}
              <li><a href="{{ site.url }}/tags.html#{{ tag }}">{{ tag }}</a></li>
              {% unless forloop.last %}
              {% endunless %}
            {% endfor %}
            </ul>
          </li>
          {% endfor %}
        </ul>
      </div>
    </div>
    {% include overlay.html %}
    {% include scripts.html %}
  </body>
</html>