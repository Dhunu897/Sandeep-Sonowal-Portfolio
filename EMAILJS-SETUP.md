# EmailJS Setup Guide - Complete Step by Step

## What You Need
- **Email**: sandeepsonowal897@gmail.com (your Gmail account)
- **Time**: 5-10 minutes
- **Cost**: FREE (200 emails/month)

---

## STEP 1: Create EmailJS Account

1. Open browser and go to: **https://www.emailjs.com/**

2. Click **"Sign Up"** button (top right corner)

3. Fill in the registration form:
   - Email: `sandeepsonowal897@gmail.com`
   - Password: (create a strong password)
   - Click "Sign Up"

4. Check your email inbox (sandeepsonowal897@gmail.com)
   - Look for verification email from EmailJS
   - Click the verification link
   - You'll be redirected to EmailJS dashboard

---

## STEP 2: Connect Your Gmail Account

1. In EmailJS dashboard, click **"Email Services"** (left sidebar)

2. Click **"Add New Service"** button

3. You'll see a list of email providers:
   - Click on **"Gmail"**

4. A popup will appear:
   - Service Name: Type `Portfolio Gmail` (or any name you like)
   - Click **"Connect Account"**

5. Google Sign-In popup will appear:
   - Select your account: `sandeepsonowal897@gmail.com`
   - Click "Allow" to give EmailJS permission to send emails

6. After connecting, you'll see:
   - **Service ID**: Something like `service_abc1234`
   - **COPY THIS SERVICE ID** - you'll need it later!
   - Click "Create Service"

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
// Service ID: service_gmail123
// Template ID: template_contact456

// Then your code should look like:
emailjs.init("abc123xyz789");

emailjs.sendForm('service_gmail123', 'template_contact456', this)
```

---

## STEP 6: Save and Deploy

1. Save the `script.js` file

2. Commit and push to GitHub:
```bash
git add script.js
git commit -m "Configure EmailJS with real credentials"
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

6. Check your email: sandeepsonowal897@gmail.com
   - You should receive the test message
   - Check spam folder if not in inbox

---

## Email Addresses Explained

### You Only Need ONE Email: sandeepsonowal897@gmail.com

**This email is used for:**
1. ✅ Creating EmailJS account
2. ✅ Connecting Gmail service
3. ✅ RECEIVING all contact form messages

**You DON'T need:**
- ❌ Multiple email addresses
- ❌ Separate "agent" emails
- ❌ Business email accounts
- ❌ Any paid email service

**How it works:**
- Visitor fills form on your website
- EmailJS sends email FROM visitor's email
- Email arrives TO: sandeepsonowal897@gmail.com
- You can reply directly to the visitor

---

## Free Tier Limits

✅ **200 emails per month** - More than enough for a portfolio
✅ **No credit card required**
✅ **No expiration**
✅ **Unlimited templates**
✅ **Unlimited services**

If you get more than 200 contacts per month (congrats!), you can upgrade for $7/month.

---

## Troubleshooting

### Problem: "Failed to send message"
**Solution:**
- Check browser console (F12) for errors
- Verify all three IDs are correct in script.js
- Make sure you copied IDs without extra spaces

### Problem: "Not receiving emails"
**Solution:**
- Check spam/junk folder
- Verify Gmail is connected in EmailJS dashboard
- Send a test email from EmailJS dashboard to confirm setup

### Problem: "Service not found"
**Solution:**
- Double-check Service ID in script.js
- Make sure you created the service in EmailJS dashboard

### Problem: "Template not found"
**Solution:**
- Double-check Template ID in script.js
- Make sure you saved the template in EmailJS dashboard

---

## Quick Reference

After setup, your script.js should have:

```javascript
// Initialize EmailJS with YOUR Public Key
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");

// Send form with YOUR Service ID and Template ID
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
```

**Remember to replace:**
- `YOUR_ACTUAL_PUBLIC_KEY` → Your Public Key from Step 4
- `YOUR_SERVICE_ID` → Your Service ID from Step 2
- `YOUR_TEMPLATE_ID` → Your Template ID from Step 3

---

## Need Help?

If you're stuck, share:
1. Which step you're on
2. Any error messages you see
3. Screenshot of the issue

I'll help you fix it!
