# README.md

## 🚀 Project: Snapsite — One-Click Website from an Image

**Snapsite** is an AI-powered tool that turns screenshots, sketches, or design mockups into fully responsive websites. Just upload an image — Snapsite analyzes its layout and content, then generates the HTML/CSS/JS code instantly.

---

## 🔥 Features

- 🖼️ **Image-to-Code Conversion** — Upload an image, get a full website
- ✨ **AI-Powered Layout Detection** — GPT-4 Vision interprets structure, hierarchy, and intent
- 🖥️ **Responsive Design** — TailwindCSS-based output works across all devices
- 👁️ **Live Preview** — See and edit generated site in real time
- 🚜 **Download & Deploy** — Export as ZIP, or deploy to your own subdomain in seconds

---

## 🧠 Ideal For

- Designers with mockups or Dribbble shots
- Marketers with landing page sketches
- Founders with wireframes
- Creators with screenshots of sites they love

---

## 🛠️ Tech Stack

- **Frontend**: Next.js + React + TailwindCSS
- **AI Layer**: GPT-4 Vision + layout heuristics
- **Authentication**: Clerk
- **Storage**: Supabase + UploadThing / Cloudinary
- **Deployment**: Vercel (subdomains)
- **Optional**: Stripe for premium exports/deployment

---

## 📝 Getting Started (Local Dev)

```bash
# Clone the repo
git clone https://github.com/your-org/snapsite.git
cd snapsite

# Install dependencies
yarn install

# Setup env variables (Clerk, Supabase, OpenAI keys)
cp .env.example .env.local

# Run the dev server
yarn dev
```

---

# ROADMAP.md

## 🚤 Snapsite Roadmap

### 🔹 Phase 1 — MVP

- Image upload
- GPT-4 Vision layout analysis
- TailwindCSS-based component matching
- ZIP export (static site)
- Basic UI + preview

### 🔹 Phase 2 — Hosted Deployment

- Subdomain routing (user.snapsite.app)
- Supabase user/project DB
- Auth via Clerk
- Live editing tools

### 🔹 Phase 3 — UX & Feature Polish

- Image annotation tools (optional zones/tags)
- Theme presets & customization
- Save/edit projects

### 🔹 Phase 4 — Monetization + Growth

- Stripe integration
- Referral rewards
- Public showcase/discover page
- Chrome plugin: "Convert this site to code"

---

## 🚀 Launch Milestones

| Milestone   | Goal                                    |
| ----------- | --------------------------------------- |
| v0.1 MVP    | Upload → HTML export working            |
| v1.0 Beta   | Upload → hosted website, saved projects |
| v1.5 Launch | Payments, SEO, templates                |
| v2.0 Scale  | Public showcase + discovery tooling     |

