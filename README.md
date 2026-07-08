# ⬡ NOUVURA SYSTEM

<div align="center">

![NOUVURA](https://img.shields.io/badge/NOUVURA-SYSTEM-00f0ff?style=for-the-badge&labelColor=0e0105&color=00f0ff)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-LIVE-00f0ff?style=for-the-badge&labelColor=0e0105)
![HTML](https://img.shields.io/badge/HTML5-Pure-00f0ff?style=for-the-badge&labelColor=0e0105)
![License](https://img.shields.io/badge/License-Proprietary-00f0ff?style=for-the-badge&labelColor=0e0105)

**Creative Studio · Digital System**

[🌐 View Live Site](https://nouvura.github.io) · [📲 WhatsApp](https://wa.me/213776532042) · [✉️ Email](mailto:yacineiguenene@gmail.com)

</div>

---

## 🧬 About NOUVURA

NOUVURA is a full-spectrum creative studio based in Algeria, specializing in:

| Service | Description |
|---------|-------------|
| ◈ UI/UX | Interface Design & User Experience |
| ⟨/⟩ Web | Frontend Development |
| ◉ Branding | Visual Identity Systems |
| ⬡ Graphic | Graphic Design |
| ▣ DTF | Direct-to-Film Printing |
| ⌗ CNC | CNC Cutting & Fabrication |
| ✦ Laser | Laser Engraving |
| ⊞ Motion | Animation & Motion Graphics |

---

## 🚀 Deploy on GitHub Pages

### 1. Fork or create repository

```bash
# Clone this repo
git clone https://github.com/NOUVURA/nouvura.github.io.git
cd nouvura.github.io
```

### 2. Add your media files

Place these files in the **root** of the repository:

```
nouvura.github.io/
├── index.html              ← Main site (already included)
├── README.md               ← This file
├── logo.png                ← Your logo (recommended: 200×200px PNG)
├── background.png          ← Background image
├── portfolio.png           ← Portfolio image 1
├── portfolio2.png          ← Portfolio image 2
├── cart visite -02 copie.jpg         ← Business card 1
├── cart visite _Plan de travail 1 copie.jpg  ← Business card 2
└── .nojekyll               ← Disables Jekyll processing (already included)
```

### 3. Enable GitHub Pages

1. Go to your repository → **Settings**
2. Click **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Choose branch: `main` (or `master`) → folder: `/ (root)`
5. Click **Save**

Your site will be live at:
```
https://YOUR-USERNAME.github.io/REPO-NAME/
```
Or if the repo is named `username.github.io`:
```
https://YOUR-USERNAME.github.io
```

### 4. Custom Domain (optional)

To use `www.nouvura.com` or similar:

1. Create a file named `CNAME` in the root with your domain:
   ```
   nouvura.com
   ```
2. Configure your DNS provider:
   - Add a `CNAME` record pointing to `YOUR-USERNAME.github.io`
3. In GitHub → Settings → Pages → Custom domain → enter your domain
4. Enable **Enforce HTTPS** ✓

---

## 🎨 Features

- **⚡ Zero dependencies** — Pure HTML, CSS, JavaScript. No frameworks, no build step.
- **🌐 Trilingual** — French, English, Arabic (RTL support included)
- **🤖 Built-in AI Chatbot** — Answers questions about services, pricing, timelines
- **🎬 Smooth animations** — Particle system, scroll reveals, cursor tracking
- **📱 Fully responsive** — Mobile-first, works on all screen sizes
- **🔒 Legal modal** — IP, Privacy Policy, Terms of Use built-in
- **🖼️ Portfolio lightbox** — Click-to-expand portfolio images
- **📺 YouTube showcase** — Embedded studio reel
- **🎯 SEO ready** — Meta tags, OG tags, semantic HTML

---

## 📁 File Structure

```
nouvura.github.io/
├── index.html          ← Single-file website (all CSS + JS inline)
├── README.md           ← Documentation
├── .nojekyll           ← GitHub Pages config
├── CNAME               ← Custom domain (optional)
└── assets/             ← Images & media (add your files here)
    ├── logo.png
    ├── background.png
    └── portfolio/
```

---

## ✏️ Customization

### Change Contact Info

In `index.html`, search for and update:

```html
<!-- WhatsApp -->
<a class="contact-item" href="https://wa.me/213776532042">
  <span class="contact-value">0776 532 042</span>
</a>

<!-- Email -->
<a class="contact-item" href="mailto:yacineiguenene@gmail.com">
  <span class="contact-value">yacineiguenene@gmail.com</span>
</a>
```

### Change YouTube Video

Find the `<iframe>` embed and replace the video ID:

```html
src="https://www.youtube.com/embed/YOUR_VIDEO_ID?..."
```

### Change Colors

In the `:root` CSS block at the top:

```css
:root {
  --cyan: #00f0ff;      /* Main accent color */
  --bg-deep: #0e0105;   /* Background */
  --text: #ffffff;      /* Primary text */
}
```

### Update Stats

Find `const counters` in the `<script>` block:

```javascript
const counters = [
  {id:'s1', target: 80, suffix:'+'},  // Projects
  {id:'s2', target: 60, suffix:'+'},  // Clients
  {id:'s3', target: 3,  suffix:'+'},  // Years
];
```

### Update Chatbot Pricing

Find `BOT_KNOWLEDGE` in the script and update the `pricing` key for each language.

---

## 🌍 Languages

The site supports **3 languages** with full RTL support for Arabic:

| Code | Language | Status |
|------|----------|--------|
| `fr` | French | ✅ Default |
| `en` | English | ✅ |
| `ar` | Arabic (RTL) | ✅ |

Translations are defined in the `LANG` object in the script.

---

## 📊 Performance

| Metric | Value |
|--------|-------|
| File Size | ~50KB (HTML only, no external JS) |
| Dependencies | 0 (just Google Fonts) |
| Load Time | < 1s on fast connection |
| Mobile Score | 95+ |

---

## 📬 Contact

| Channel | Value |
|---------|-------|
| 📲 WhatsApp | [0776 532 042](https://wa.me/213776532042) |
| ✉️ Email | [yacineiguenene@gmail.com](mailto:yacineiguenene@gmail.com) |

---

<div align="center">

**© 2025 NOUVURA — All Rights Reserved**

*All designs, visual assets, and code produced by NOUVURA are protected under applicable intellectual property laws.*

</div>
