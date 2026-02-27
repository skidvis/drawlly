# drawlly

**drawlly** generates daily drawing prompts using a randomized combination of adjectives, nouns, and verbs.

Visit [drawlly.com](https://drawlly.com) to get inspired!

---

## 🎨 Features

- Random drawing prompt generator (e.g., *"a bad alligator painting a floating tiger"*).
- Permalink system—share specific prompts via URL query parameters.
- Social media sharing buttons for Facebook and Twitter.
- Google Analytics integration for pageview and idea refresh tracking.
- Vue 3 component embedded in Astro pages.

---

## 🛠 Installation

```bash
npm install
```

---

## ▶️ Usage

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview the built site
```

---

## 📁 Project Structure

```
/
├── public/               # Static assets (images, styles, scripts)
│   ├── drawlly800.png   # Logo image
│   ├── style.css        # Global styles
│   └── socialcount/     # Social sharing icons
├── src/
│   ├── components/       # Vue components
│   │   └── Topic.vue    # Prompt generator component
│   └── pages/           # Astro pages (route-based)
│       └── index.astro  # Home page
├── astro.config.mjs     # Astro configuration
└── package.json
```

---

## 🌐 Configuration

The site is configured at [drawlly.com](https://drawlly.com) via Astro:

```javascript
// astro.config.mjs
export default {
  site: 'https://drawlly.com',
  integrations: [vue()]
};
```

---

## 🔀 How It Works

The `Topic.vue` component randomly selects from arrays of adjectives, nouns, and verbs to generate prompts like:

> **a** `adjective` `noun` `verb` **a** `adjective` `noun`

- Refresh the page or click "refresh" to get a new prompt.
- Share a specific prompt via the generated shortlink (e.g., `/?123-456-789-012-345`).

---

## 🚀 Deployment

Built and deployed automatically via GitHub Actions (see `.github/workflows/astro-page.yml`).

---

## 📄 License

<!-- TODO: Add license information if available -->
