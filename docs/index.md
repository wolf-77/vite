---
layout: home

hero:
  name: MySite
  text: Static docs template built with VitePress.
  image:
    src: https://vitepress.dev/vitepress-logo-large.webp
    alt: Vite logo
  tagline: A free to use template for creating docs for your projects
  actions:
    - theme: brand
      text: Get Started
      link: /
    - theme: alt
      text: View on GitHub
      link: https://github.com/wolf-77

link: https://github.com/wolf-77

features:
  - icon: ⚡️
    title: MSite, The cool website generator
    details: More...
  - icon: 🎉
    title: Power of Vue meets Markdown
    details: More...
---
<style>
    /* Custom Stlye */
.custom-layout {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  min-height: 400px;
  max-width: 1152px;
  margin: 6rem auto 0;
  border-radius: 10px;
}

.custom-layout h1 {
  font-size: 2.2rem;
  font-weight: 600;
}

.custom-layout .btn {
  background-color: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  border-radius: 20px;
  padding: 0.5rem 1.4rem;
}
</style>
<div class="custom-layout">
  <h1>🤖</h1>
  <h1>Custom Layout</h1>
  <p>This section was added using plain HTML and CSS.</p>
  <a href="https://vitepress.dev/" target="_blank" class="btn">Source Code</a>
</div>