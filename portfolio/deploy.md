# Deployment Instructions

## Quick Fix for Vercel Deployment

### Option 1: Manual Vercel Settings Update
1. Go to https://vercel.com/dashboard
2. Find your project "Anit-port-ms"
3. Click Settings → General
4. Find "Root Directory" section
5. Change from "." to "portfolio"
6. Save and redeploy

### Option 2: Deploy from Portfolio Directory
Run these commands from the portfolio directory:

```bash
cd portfolio
npx vercel --prod
```

### Option 3: Create New Project
1. Delete current Vercel project
2. Run from portfolio directory:
```bash
cd portfolio
npx vercel
```
3. Follow prompts to create new project

The issue is that Vercel is trying to build from the root directory (Anit-port-ms) instead of the portfolio subdirectory where your Next.js project actually lives.