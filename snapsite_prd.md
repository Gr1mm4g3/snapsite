# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## 📄 Product Name: Snapsite

### One-click website generator from an uploaded image

---

## 📊 Problem Statement

Many non-technical users (designers, marketers, founders) have mockups or visual inspirations but struggle to turn them into actual websites. Tools like Figma require design knowledge; coding requires development skills. Snapsite bridges this gap by allowing users to upload a screenshot and instantly receive a working website.

---

## 🔎 Target Users

- **Designers** wanting to convert mockups to real code
- **Marketers** with visual landing page ideas
- **Founders** with sketches or screenshots
- **No-code makers** and hobbyists

---

## 🚀 Goals & Objectives

- Generate a responsive website from an image using AI
- Require minimal user input
- Enable real-time preview and editing
- Allow for one-click download or deployment

---

## 🤜 Key Features

### MVP
- Image upload interface
- GPT-4 Vision image analysis
- Component mapping to Tailwind UI
- HTML/CSS/JS generation engine
- Live preview pane
- Static ZIP export

### v1.0
- Hosted deployment (subdomains)
- Auth (Clerk)
- Project saving via Supabase
- Version history / edit log

### v1.5
- Stripe for paid features (deployment, templates)
- SEO metadata injection
- Light/dark theme toggles

---

## 🛠️ Technical Requirements

- **Frontend**: Next.js, TailwindCSS
- **AI Backend**: OpenAI GPT-4 Vision, custom component matcher
- **Auth**: Clerk
- **DB**: Supabase (users, projects, image metadata)
- **File Storage**: UploadThing or Cloudinary
- **Deployment**: Vercel + subdomain routing
- **PDF/ZIP Export**: Puppeteer or Static HTML build system

---

## ⌚ User Flow (v0.1 MVP)

1. **User uploads an image**
2. **System parses layout using GPT-4 Vision**
3. **AI maps layout to HTML/CSS using Tailwind components**
4. **User previews live result**
5. **User downloads ZIP or deploys site**

---

## 🚤 Success Metrics

- Time-to-website < 60 seconds
- Conversion rate from upload to preview: > 80%
- User NPS > 50 on first use
- Sharing rate / social impressions

---

## 📰 Marketing & Positioning

- **Tagline**: "Upload a screenshot. Get a website. Instantly."
- **USP**: Zero input, image-first creation. No design, no code, just results.
- **Launch Plan**: Product Hunt, Twitter/LinkedIn demos, Webflow/Figma community outreach

---

## 📆 Timeline (Est.)

| Phase | Week |
|-------|------|
| MVP Upload-to-ZIP | Week 1-2 |
| Hosted Deployment | Week 3-4 |
| Auth + DB | Week 4-5 |
| Public Beta | Week 6 |
| Stripe + Templates | Week 7-8 |
| Launch + Growth Tools | Week 9-10 |

