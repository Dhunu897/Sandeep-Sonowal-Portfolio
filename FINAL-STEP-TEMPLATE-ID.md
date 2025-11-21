# Final Step - Get Your Template ID

## ✅ Already Configured:
- Service ID: `service_j6vm1wj`
- Public Key: `vXJovGVPDj4cSibQZ`

## ⏳ Still Need:
- **Template ID** (takes 2 minutes to create)

---

## How to Get Template ID

### Step 1: Go to EmailJS Dashboard
1. Open: https://dashboard.emailjs.com/admin
2. Login with your account

### Step 2: Create Email Template
1. Click **"Email Templates"** (left sidebar)
2. Click **"Create New Template"** button

### Step 3: Fill Template Details

Copy and paste these exact values:

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

**To Email:**
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
Reply directly to this email to respond to {{from_name}}.
```

**Reply To:**
```
{{from_email}}
```

### Step 4: Save and Copy Template ID

1. Click **"Save"** button

2. After saving, you'll see your **Template ID** at the top
   - It looks like: `template_abc1234`

3. **COPY THIS TEMPLATE ID**

---

## Update Your Code

Once you have the Template ID:

1. Open `script.js`

2. Find this line (around line 106):
```javascript
emailjs.sendForm('service_j6vm1wj', 'YOUR_TEMPLATE_ID', this)
```

3. Replace `YOUR_TEMPLATE_ID` with your actual Template ID:
```javascript
emailjs.sendForm('service_j6vm1wj', 'template_abc1234', this)
```

4. Save the file

5. Commit and push:
```bash
git add script.js
git commit -m "Add EmailJS Template ID"
git push
```

---

## Test Your Form

After Vercel deploys (1-2 minutes):

1. Go to your website
2. Fill out the contact form
3. Click "Send Message"
4. Check your email: **sandeep897@outlook.com**

---

## Quick Summary

**What I need from you:**
Just the **Template ID** after you create the template in EmailJS dashboard.

**What's already done:**
✅ Service ID configured
✅ Public Key configured
✅ Code structure ready
✅ Success modal ready
✅ Form fields ready

**Time needed:**
⏱️ 2 minutes to create template and get ID
⏱️ 1 minute to update code
⏱️ 2 minutes for deployment

**Total: 5 minutes to completion!**

---

## Share With Me

After creating the template, just tell me:

```
Template ID: template_________
```

And I'll update the code for you immediately!
