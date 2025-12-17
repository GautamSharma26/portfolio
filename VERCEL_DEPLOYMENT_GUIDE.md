# 🚀 Vercel Deployment Guide for Your Portfolio

## Step-by-Step Deployment Instructions

### **Step 1: Prepare Your Repository**

1. **Commit your changes to Git:**
```bash
git add .
git commit -m "Add contact form with email functionality"
git push origin feature/dev-latest
```

2. **Push to main branch (optional but recommended for production):**
```bash
git checkout main
git merge feature/dev-latest
git push origin main
```

### **Step 2: Set Up Environment Variables on Vercel**

After connecting your repository to Vercel, you MUST add your email credentials:

**Via Vercel Dashboard:**
1. Go to: https://vercel.com/dashboard
2. Select your project
3. Click **Settings** → **Environment Variables**
4. Add these variables:

| Name | Value | Environments |
|------|-------|--------------|
| `EMAIL_USER` | `gautamkr1998@gmail.com` | All |
| `EMAIL_PASSWORD` | `ltdyswwrf yqsssdscd esjo` | All |

⚠️ **IMPORTANT:** Use the same credentials from your `.env.local`

### **Step 3: Create `.env.example` (Important!)**

Create a new file `D:\my_portfolio\.env.example` with this content:

```bash
# Email Configuration - Contact Form
# Add these to Vercel Environment Variables
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
```

Then commit it:
```bash
git add .env.example
git commit -m "Add environment variables template"
git push
```

### **Step 4: Update `.gitignore` (Already Done)**

Make sure `.env.local` is in `.gitignore` so credentials don't get pushed:

```bash
# In your .gitignore file - should already have:
.env.local
.env*.local
```

### **Step 5: Verify Your Code Structure**

Check these files exist and are correct:

✅ `app/contact/page.js` - Contact form (client component with 'use client')
✅ `app/api/contact/route.js` - Email API endpoint
✅ `next.config.js` - Next.js configuration
✅ `package.json` - With nodemailer dependency
✅ `tsconfig.json` or `jsconfig.json` - JS/TS configuration

### **Step 6: Deploy to Vercel**

**Option A: Via Vercel Dashboard**
1. Connect your GitHub repo to Vercel
2. Select the repository
3. Framework: **Next.js** (auto-detected)
4. Root Directory: `.` (default)
5. Build Command: `npm run build` (default)
6. Output Directory: `.next` (default)
7. Click **Deploy**

**Option B: Via Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel
```

### **Step 7: Configure After Deployment**

1. Wait for build to complete
2. Visit your Vercel deployment link
3. Navigate to `/contact` page
4. Test the form submission

---

## ✅ Checklist for Vercel

- [ ] Git repository connected to Vercel
- [ ] Email credentials added to Environment Variables
- [ ] `.env.local` is in `.gitignore`
- [ ] `.env.example` created and committed
- [ ] `app/api/contact/route.js` exists
- [ ] `app/contact/page.js` has `'use client'` directive
- [ ] `package.json` includes `nodemailer` dependency
- [ ] Build completes without errors
- [ ] Contact form works on live URL

---

## 🔐 Security Notes

### DO NOT:
- ❌ Commit `.env.local` to Git
- ❌ Add credentials directly in code
- ❌ Share your Gmail App Password
- ❌ Use your regular Gmail password (use App Password only)

### DO:
- ✅ Use Vercel Environment Variables
- ✅ Keep `.env.local` locally only
- ✅ Use Gmail App Password (not regular password)
- ✅ Keep `.env.example` in repo (without real credentials)

---

## 📝 File Checklist

### Backend Files (Must Exist)
```
app/
├── api/
│   └── contact/
│       └── route.js        ✅ Email API endpoint
├── contact/
│   └── page.js             ✅ Contact form page
└── page.js                 ✅ Home page
```

### Config Files (Must Exist)
```
├── next.config.js          ✅ Next.js config
├── package.json            ✅ With nodemailer dependency
├── tsconfig.json           ✅ TypeScript config
└── .gitignore              ✅ Ignore .env.local
```

### Environment Files (Local Only)
```
.env.local                   ✅ Local credentials (DO NOT COMMIT)
.env.example                 ✅ Template (COMMIT this)
```

---

## 🐛 Troubleshooting

### Issue: "Build failed on Vercel"
**Solution:**
- Check build logs in Vercel dashboard
- Run `npm run build` locally to debug
- Ensure all imports are correct

### Issue: "Email not sending on Vercel"
**Solution:**
- Verify EMAIL_USER and EMAIL_PASSWORD are set in Vercel Environment Variables
- Go to Vercel Settings → Environment Variables
- Restart the deployment after adding variables

### Issue: "Environment variables not loading"
**Solution:**
1. Go to Vercel Dashboard
2. Project Settings → Environment Variables
3. Make sure variables are set for "Production", "Preview", and "Development"
4. Redeploy after adding/updating variables

### Issue: "Module not found: nodemailer"
**Solution:**
- Ensure `package.json` includes: `"nodemailer": "^6.9.7"`
- Run `npm install` locally
- Commit `package-lock.json`

---

## 🚀 After Deployment

1. **Test your contact form:**
   - Go to `/contact` on your live URL
   - Fill out and submit the form
   - Check you received the email

2. **Monitor errors:**
   - Check Vercel logs: Dashboard → Deployments → Logs
   - Check browser console for frontend errors
   - Check email spam folder

3. **Keep tracking:**
   - Set up error notifications (optional)
   - Monitor email delivery

---

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Nodemailer Docs:** https://nodemailer.com/
- **Gmail App Passwords:** https://support.google.com/accounts/answer/185833

---

## Quick Vercel Environment Variables Template

Copy these into Vercel Dashboard → Settings → Environment Variables:

```
EMAIL_USER=gautamkr1998@gmail.com
EMAIL_PASSWORD=ltdy yqcd esjo rsaa
```

Set for all environments: Production, Preview, Development

---

**Your portfolio is ready for production! 🎉**
