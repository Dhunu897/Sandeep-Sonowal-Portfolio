# Local Testing Guide

## Method 1: View Form Locally (No Email Sending)

You can view and interact with the form locally, but emails won't send until deployed.

### Steps:

1. **Open with Live Server:**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Your browser will open at `http://127.0.0.1:5500` or similar

2. **What Works:**
   - ✅ Form validation
   - ✅ Visual feedback
   - ✅ Loading states
   - ❌ Actual email sending (FormSubmit blocks localhost)

3. **What You'll See:**
   - Form will validate correctly
   - You'll see "Sending..." message
   - But the email won't actually send

---

## Method 2: Test on GitHub Pages (RECOMMENDED)

This is the only way to fully test email functionality:

### Steps:

1. **Commit and push changes:**
   ```bash
   git add .
   git commit -m "Added FormSubmit contact form"
   git push origin main
   ```

2. **Visit your live site:**
   - Go to: `https://dhunu897.github.io/Sandeep-Sonowal-Portfolio/`
   - Scroll to contact form
   - Fill it out and submit

3. **Check your email:**
   - Look for confirmation email from FormSubmit
   - Click the confirmation link
   - Test again - you should receive the message!

---

## Method 3: Quick Local Preview

Just open the file directly:

1. **Navigate to your project folder:**
   ```
   F:\Personal-Project\Sandeep-Sonowal-Portfolio
   ```

2. **Double-click `index.html`**
   - Opens in your default browser
   - You can see the form
   - But emails won't send (same limitation)

---

## 🎯 Recommendation:

**Push to GitHub and test there** - it's the fastest way to verify everything works!

The form is already configured correctly, so once it's live, it will work perfectly.

---

## Need Help?

Just say:
- "Commit and push" - I'll deploy it for you
- "Open locally" - I'll open it in your browser for preview
- "Explain more" - I'll provide more details
