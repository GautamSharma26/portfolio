# ✅ Vercel Deployment Checklist

## Pre-Deployment (Do These NOW)

### 1. Commit Your Code
```bash
git add .
git commit -m "Add contact form with email functionality and Vercel deployment guide"
git push origin feature/dev-latest
```

### 2. Verify Files Exist
- [ ] `app/contact/page.js` - Contact form page
- [ ] `app/api/contact/route.js` - Email API endpoint  
- [ ] `.env.example` - Environment variable template
- [ ] `package.json` - Has nodemailer dependency
- [ ] `.gitignore` - Has `.env*.local`

### 3. Verify Code Quality
- [ ] No console errors locally: `npm run build`
- [ ] Contact form works locally: `npm run dev`
- [ ] API endpoint responds: Test `/api/contact`

---

## Vercel Deployment Steps

### Step 1: Create Vercel Account (if needed)
- Go to: https://vercel.com/signup
- Sign up with GitHub

### Step 2: Connect Repository
- Go to: https://vercel.com/new
- Import your GitHub repository
- Select the `feature/dev-latest` branch (or merge to main first)

### Step 3: Configure Project
- **Framework:** Next.js (auto-detected)
- **Root Directory:** `.` (or leave empty)
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### Step 4: Add Environment Variables
Before clicking "Deploy", add your variables:

**Name:** `EMAIL_USER`
**Value:** `gautamkr1998@gmail.com`
**Environments:** ✓ Production ✓ Preview ✓ Development

**Name:** `EMAIL_PASSWORD`
**Value:** `ltdy yqcd esjo rsaa`
**Environments:** ✓ Production ✓ Preview ✓ Development

### Step 5: Deploy
- Click **"Deploy"**
- Wait for build to complete (3-5 minutes)
- Get your live URL

### Step 6: Test on Live Site
- Visit your URL + `/contact`
- Fill out and submit the form
- Check you received the email

---

## After Deployment

### Monitor Deployments
```
Vercel Dashboard → Deployments → Click latest deployment
```

### View Logs
```
Dashboard → Deployments → Logs (if something fails)
```

### Update Environment Variables Later
```
Settings → Environment Variables → Edit/Add
```

---

## Quick Reference

| Item | Location |
|------|----------|
| Email API | `/api/contact` |
| Contact Form | `/contact` |
| Config | `next.config.js` |
| Dependencies | `package.json` |
| Local Credentials | `.env.local` (NOT committed) |
| Credential Template | `.env.example` (committed) |

---

## Common Issues & Fixes

### Build Fails
```
→ Check package.json has all dependencies
→ Run: npm install && npm run build
→ Check vercel logs for details
```

### Email Not Sending
```
→ Check Environment Variables in Vercel
→ Verify EMAIL_USER and EMAIL_PASSWORD are set
→ Restart deployment after setting variables
```

### Form Returns 500 Error
```
→ Check API logs: Vercel Dashboard → Functions
→ Verify environment variables exist
→ Check Gmail App Password is correct (16 chars)
```

---

## Security Checklist

- [ ] `.env.local` is NOT committed to Git
- [ ] `.env.example` is committed (without real values)
- [ ] Using Gmail App Password (not regular password)
- [ ] Environment variables set in Vercel (not in code)
- [ ] `.gitignore` includes `.env*.local`

---

## What You're Deploying

```
Your Contact Form System:
├── Frontend (app/contact/page.js)
│   └── Validates user input
│   └── Shows success/error messages
│   └── Sends data to backend
│
├── Backend (app/api/contact/route.js)
│   └── Validates server-side
│   └── Sends emails via Gmail
│   └── Returns responses
│
└── Configuration
    └── Environment variables (Vercel)
    └── Next.js setup
    └── Nodemailer integration
```

---

## Next Steps

1. ✅ Commit everything: `git push`
2. ✅ Go to vercel.com and import repository
3. ✅ Add environment variables in Vercel dashboard
4. ✅ Deploy and test
5. ✅ Share your live URL!

---

**Ready to go live? Let's do this! 🚀**
