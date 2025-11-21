# EmailJS Setup Guide - Using Outlook Email

## What You Need
- **Email**: sandeep897@outlook.com (your Outlook account)
- **Time**: 5-10 minutes
- **Cost**: FREE (200 emails/month)

---

## STEP 1: Create EmailJS Account

1. Open browser and go to: **https://www.emailjs.com/**

2. Click **"Sign Up"** button (top right corner)

3. Fill in the registration form:
   - Email: `sandeep897@outlook.com`
   - Password: (create a strong password)
   - Click "Sign Up"

4. Check your email inbox (sandeep897@outlook.com)
   - Look for verification email from EmailJS
   - Click the verification link
   - You'll be redirected to EmailJS dashboard

---

## STEP 2: Connect Your Outlook Account

### ⚠️ IMPORTANT DIFFERENCE: Outlook Setup

1. In EmailJS dashboard, click **"Email Services"** (left sidebar)

2. Click **"Add New Service"** button

3. You'll see a list of email providers:
   - **DO NOT choose Gmail**
   - Click on **"Outlook.com"** (it has the Outlook logo)

4. A form will appear with these fields:

**Service Name:**
```
Portfolio Outlook
```

**Email Address:**
```
sandeep897@outlook.com
```

**Password:**
```
[Your Outlook password]
```

⚠️ **IMPORTANT FOR OUTLOOK USERS:**

If you have 2-Factor Authentication (2FA) enabled on your Outlook account, you CANNOT use your regular password. You need to create an **App Password**.

### How to Create Outlook App Password:

1. Go to: **https://account.microsoft.com/security**

2. Sign in with: `sandeep897@outlook.com`

3. Click **"Advanced security options"**

4. Scroll to **"App passwords"** section

5. Click **"Create a new app password"**

6. A popup will show a password like: `abcd-efgh-ijkl-mnop`

7. **COPY THIS PASSWORD** (you can't see it again!)

8. Go back to EmailJS and paste this App Password in the "Password" field

9. Click **"Create Service"**

10. After creating, you'll see:
    - **Service ID**: Something like `service_abc1234`
    - **COPY THIS SERVICE ID** - you'll need it later!

**IMPORTANT: Write down your Service ID here:**
```
Service ID: service_________________
```

---

## STEP 3: Create Email Template

1. Click **"Email Templates"** (left sidebar)

2. Click **"Create New Template"** button

3. You'll see a template editor. Fill in these fields:

**Template Name:**
```
Portfolio Contact Form
```

**From Name:**
```
{{from_name}}
```

**From Email:**
```
{{from_email}}
```

**To Email:** (This is where you'll receive messages)
```
sandeep897@outlook.com
```

**Subject:**
```
New Portfolio Contact: {{subject}}
```

**Content (Message Body):**
```
You have received a new message from your portfolio website!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM: {{from_name}}
EMAIL: {{from_email}}
SUBJECT: {{subject}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MESSAGE:

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was sent from your portfolio contact form.
```

**Reply To:**
```
{{from_email}}
```

4. Click **"Save"** button

5. After saving, you'll see:
   - **Template ID**: Something like `template_xyz5678`
   - **COPY THIS TEMPLATE ID** - you'll need it!

**IMPORTANT: Write down your Template ID here:**
```
Template ID: template_________________
```

---

## STEP 4: Get Your Public Key

1. Click **"Account"** (left sidebar)

2. Click **"General"** tab

3. Scroll down to find **"Public Key"** section

4. You'll see something like: `kcOXWLxqxqJqLXqVu`
   - **COPY THIS PUBLIC KEY**

**IMPORTANT: Write down your Public Key here:**
```
Public Key: _________________________
```

---

## STEP 5: Update Your Website Code

Now you have all three values:
- Service ID
- Template ID  
- Public Key

Open your `script.js` file and find these lines (around line 89-106):

**FIND THIS:**
```javascript
emailjs.init("kcOXWLxqxqJqLXqVu"); // Public Key
```

**REPLACE WITH:**
```javascript
emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Replace with your actual Public Key
```

**FIND THIS:**
```javascript
emailjs.sendForm('service_iqxqxqx', 'template_portfolio', this)
```

**REPLACE WITH:**
```javascript
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
```

### Example (with fake IDs):
```javascript
// If your IDs are:
// Public Key: abc123xyz789
// Service ID: service_outlook123
// Template ID: template_contact456

// Then your code should look like:
emailjs.init("abc123xyz789");

emailjs.sendForm('service_outlook123', 'template_contact456', this)
```

---

## STEP 6: Save and Deploy

1. Save the `script.js` file

2. Commit and push to GitHub:
```bash
git add script.js
git commit -m "Configure EmailJS with Outlook credentials"
git push
```

3. Wait 1-2 minutes for Vercel to deploy

---

## STEP 7: Test Your Contact Form

1. Go to your website: https://sandeep-sonowal-portfolio.vercel.app/

2. Scroll to the Contact section

3. Fill out the form:
   - Name: Test User
   - Email: your-test-email@gmail.com
   - Subject: Test Message
   - Message: This is a test

4. Click "Send Message"

5. You should see:
   - Loading spinner
   - Success modal popup after 2-3 seconds

6. Check your email: **sandeep897@outlook.com**
   - You should receive the test message
   - Check spam/junk folder if not in inbox

---

## Key Differences: Outlook vs Gmail

| Feature | Gmail | Outlook |
|---------|-------|---------|
| **Connection Method** | OAuth (Click to connect) | Manual (Email + Password) |
| **2FA Enabled?** | Works automatically | Need App Password |
| **Setup Difficulty** | Easier | Slightly more steps |
| **Reliability** | Excellent | Excellent |
| **Speed** | Fast | Fast |

---

## Email Addresses Explained

### You Only Need ONE Email: sandeep897@outlook.com

**This email is used for:**
1. ✅ Creating EmailJS account
2. ✅ Connecting Outlook service
3. ✅ RECEIVING all contact form messages

**You DON'T need:**
- ❌ Multiple email addresses
- ❌ Separate "agent" emails
- ❌ Gmail account
- ❌ Business email accounts
- ❌ Any paid email service

**How it works:**
- Visitor fills form on your website
- EmailJS sends email using your Outlook account
- Email arrives TO: sandeep897@outlook.com
- You can reply directly to the visitor

---

## Troubleshooting - Outlook Specific

### Problem: "Authentication failed"
**Solution:**
- If you have 2FA enabled, you MUST use App Password (see Step 2)
- Regular password won't work with 2FA
- Create App Password at: https://account.microsoft.com/security

### Problem: "Invalid credentials"
**Solution:**
- Double-check email: sandeep897@outlook.com (no typos)
- Make sure you're using the correct password
- If using App Password, copy it exactly (with or without dashes)

### Problem: "Service not found"
**Solution:**
- Make sure you selected "Outlook.com" not "Gmail"
- Verify Service ID is copied correctly to script.js

### Problem: "Not receiving emails"
**Solution:**
- Check Junk/Spam folder in Outlook
- Add noreply@emailjs.com to your contacts
- Check if Outlook is blocking automated emails

### Problem: "Emails going to spam"
**Solution:**
- Mark first email as "Not Spam"
- Add sender to safe senders list
- Future emails will go to inbox

---

## Free Tier Limits

✅ **200 emails per month** - More than enough for a portfolio
✅ **No credit card required**
✅ **No expiration**
✅ **Unlimited templates**
✅ **Unlimited services**
✅ **Works with Outlook.com, Hotmail, Live.com**

If you get more than 200 contacts per month (congrats!), you can upgrade for $7/month.

---

## Quick Reference - Outlook Version

After setup, your script.js should have:

```javascript
// Initialize EmailJS with YOUR Public Key
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");

// Send form with YOUR Service ID and Template ID
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
```

**Remember to replace:**
- `YOUR_ACTUAL_PUBLIC_KEY` → Your Public Key from Step 4
- `YOUR_SERVICE_ID` → Your Service ID from Step 2 (Outlook service)
- `YOUR_TEMPLATE_ID` → Your Template ID from Step 3

---

## Summary of Changes for Outlook

### What's Different:
1. ✏️ Use `sandeep897@outlook.com` instead of Gmail
2. ✏️ Select "Outlook.com" service (not Gmail)
3. ✏️ Enter email + password manually (not OAuth)
4. ✏️ May need App Password if 2FA is enabled
5. ✏️ Check Outlook inbox for test emails

### What's the Same:
- ✅ Same EmailJS platform
- ✅ Same template setup
- ✅ Same Public Key process
- ✅ Same code in script.js
- ✅ Same 200 free emails/month
- ✅ Same success modal on website

---

## Need Help?

If you're stuck, share:
1. Which step you're on
2. Any error messages you see
3. Whether you have 2FA enabled on Outlook
4. Screenshot of the issue

I'll help you fix it!

---

## Pro Tip

After your first successful test:
- Add `noreply@emailjs.com` to your Outlook contacts
- This ensures future emails don't go to spam
- You'll get instant notifications for new contacts
