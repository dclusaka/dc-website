# Diplomatic Club of Lusaka — website

## Setup

1. `npm install`
2. `npm run build` to build, or `npm run serve` to preview locally

## Deploying

1. Push this folder to a new GitHub repository
2. In Netlify: "Add new site" → "Import an existing project" → pick the repo
3. Netlify auto-detects the build settings from netlify.toml — click Deploy
4. Your site goes live at a `*.netlify.app` address

## What's built so far

- Home, About, Benefits, Events, Contact — all public, using your real
  content from the current Wix site
- Contact form uses Netlify Forms (free, no third-party sign-up)

## Coming next (phase 2)

- Supabase account for login, the member database, and photo storage
- /apply/ — online application form with photo upload
- /login/ — shared login for members and admins
- /members/ — logged-in members see name + nationality of other members
- /admin/ — admins see full contact details for all members
- Digital membership card with QR code
- /verify/[id] — public page staff can scan to check active/expired status
- Stripe integration for automatic payment verification (once a Stripe
  account exists)
