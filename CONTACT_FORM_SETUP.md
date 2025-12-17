# Contact Form Setup Guide

## ✅ What's Implemented

Your contact form now includes:

### **Frontend Features:**
- ✅ Real-time form validation
- ✅ Error messages for each field
- ✅ Loading state during submission
- ✅ Success/error notifications
- ✅ Input field error styling
- ✅ Form auto-clears on success

### **Validation Rules:**
1. **Name**: 2+ characters, letters only
2. **Email**: Valid email format
3. **Subject**: 3+ characters minimum
4. **Message**: 10+ characters minimum

### **Backend Features:**
- ✅ API route at `/api/contact`
- ✅ Server-side validation
- ✅ Email notifications to admin
- ✅ Confirmation email to visitor
- ✅ Error handling and logging

---

## 🔧 Setup Instructions

### **Step 1: Install nodemailer**

Run this command in your terminal:
```bash
npm install nodemailer
```

### **Step 2: Set Up Gmail App Password**

1. Go to https://myaccount.google.com/security
2. Click "2-Step Verification" and enable it
3. Go back to Security settings
4. Find "App passwords" (appears after 2FA is enabled)
5. Select:
   - Device: "Windows Computer" (or your device)
   - App: "Mail"
6. Copy the 16-character password

### **Step 3: Update .env.local**

Edit `.env.local` file in your project root:

```env
EMAIL_USER=gautamkr1998@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

Replace with:
- Your actual Gmail address
- The 16-character App Password (with spaces)

### **Step 4: Test the Form**

1. Start your dev server: `npm run dev`
2. Go to http://localhost:3000/contact
3. Fill in the form and submit
4. Check both your email and the visitor's email

---

## 📧 Email Features

### **Admin Receives:**
- Visitor's name, email, and message
- Subject line clearly marked
- Professional HTML formatting

### **Visitor Receives:**
- Confirmation their message was received
- Echo of their message
- Expected response time

---

## 🔒 Security & Best Practices

✅ **Input Validation**: Server-side validation prevents bad data
✅ **Environment Variables**: Credentials never exposed in code
✅ **Error Handling**: Graceful error messages
✅ **CORS Ready**: Can be extended for third-party services
✅ **Accessible**: Proper labels and error announcements

---

## 🚀 Alternative Email Services

If you don't want to use Gmail, you can use:

### **Option 1: Formspree (No setup needed)**
Replace API route with redirect:
```jsx
<form action="https://formspree.io/f/your-form-id" method="POST">
```

### **Option 2: SendGrid (Professional)**
Install: `npm install @sendgrid/mail`

### **Option 3: Resend (Modern alternative)**
Install: `npm install resend`

---

## 📝 Form Fields Reference

| Field | Type | Min Length | Validation |
|-------|------|-----------|-----------|
| Name | Text | 2 | Letters only |
| Email | Email | 5 | Valid format |
| Subject | Text | 3 | Any characters |
| Message | Textarea | 10 | Any characters |

---

## ❌ Troubleshooting

### **"Gmail less secure app"**
- Use App Passwords instead (recommended)
- Don't enable "Less secure apps"

### **"Invalid credentials"**
- Check your 16-char password (copy again if needed)
- No spaces should be in the middle
- Ensure 2-Step Verification is enabled

### **"Module not found: nodemailer"**
- Run `npm install nodemailer`
- Restart your dev server

### **"Email not sending"**
- Check .env.local exists in project root
- Verify EMAIL_USER and EMAIL_PASSWORD values
- Check browser console for errors

---

## ✨ Future Enhancements

Optional features to add later:

1. **File Attachments**: Let users upload files
2. **Email Templates**: Use HTML templates
3. **Database Storage**: Save submissions to DB
4. **Rate Limiting**: Prevent spam
5. **Captcha**: Add reCAPTCHA
6. **Webhooks**: Send data to Slack/Discord

---

## 📞 Quick Test Commands

```bash
# Test if nodemailer is installed
npm list nodemailer

# Check environment variables loaded
node -e "console.log(process.env.EMAIL_USER)"

# View Next.js API routes
npm run build
```

---

**Status**: ✅ Ready to use after setting .env.local credentials
