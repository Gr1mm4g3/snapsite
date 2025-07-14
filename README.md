# Snapsite

## 🚀 Turn Images into Websites with AI

**Snapsite** is an AI-powered tool that transforms your screenshots, sketches, or design mockups into fully responsive websites. Upload an image, and let Snapsite handle the rest — from layout analysis to code generation.

---

## ✨ Features

- 🖼️ **Image Upload** — Drag and drop or select images to get started
- 🔒 **Secure Authentication** — Built with Clerk for secure user management
- 🎨 **Image Editor** — Basic editing tools for your uploaded images
- 🖥️ **Responsive Preview** — See how your site looks on different devices
- 🚀 **Fast & Modern** — Built with Next.js 15 and TypeScript for optimal performance
- 🎨 **Beautiful UI** — Clean, accessible interface using shadcn/ui components

---

## 🎯 Use Cases

- Designers turning mockups into working prototypes
- Developers quickly creating landing pages from images
- Content creators building portfolio sites
- Anyone who wants to turn visual ideas into real websites

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 + React 18 + TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **Authentication**: Clerk
- **Image Processing**: Next.js Image Optimization
- **State Management**: React Hooks + Context API
- **Deployment**: Vercel (Platform as a Service)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0.0 or later
- npm or yarn package manager
- Clerk account (for authentication)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/snapsite.git
   cd snapsite
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Clerk credentials:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

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

