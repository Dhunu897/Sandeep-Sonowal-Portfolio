# EmailJS Template Configuration - Visual Guide

## Your Form Fields (What visitors will fill):
1. **Name** → sends as `{{from_name}}`
2. **Email** → sends as `{{from_email}}`
3. **Subject** → sends as `{{subject}}`
4. **Message** → sends as `{{message}}`

---

## Step-by-Step Template Setup

### Step 1: Access Template Editor
1. Go to: https://dashboard.emailjs.com/admin/templates
2. Click the **"Create New Template"** button (blue button, top right)
3. You'll see the template editor screen

---

### Step 2: Configure Template Settings (Top Section)

You'll see a form with several fields. Fill them EXACTLY as shown:

#### Field 1: Template Name
```
Portfolio Contact Form
```
*This is just for your reference in the dashboard*

---

#### Field 2: From Name
```
{{from_name}}
```
**What this does:** Shows the visitor's name as the sender
**Example:** If visitor enters "John Doe", email will show "From: John Doe"

---

#### Field 3: From Email  
```
{{from_email}}
```
**What this does:** Shows the visitor's email as sender
**Example:** If visitor enters "john@example.com", email will show "From: john@example.com"

⚠️ **Note:** Some email providers may override this with your Outlook email for security

---

#### Field 4: Subject Line
```
New Portfolio Contact: {{subject}}
```
**What this does:** Creates email subject with visitor's subject
**Example:** If visitor enters "Job Inquiry", email subject will be "New Portfolio Contact: Job Inquiry"

---

#### Field 5: Reply-To Email
```
{{from_email}}
```
**What this does:** When you click "Reply" in your email, it will reply to the visitor's email
**Example:** Click reply and it automatically addresses to visitor's email

---

### Step 3: Configure Email Body (Main Content Area)

In the large text box labeled "Content", copy and paste this EXACT template:

```
You have received a new message from your portfolio website!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT DETAILS:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MESSAGE:

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was sent from your portfolio contact form at:
https://sandeep-sonowal-portfolio.vercel.app/

To reply to {{from_name}}, simply click the Reply button.
```

---

### Step 4: Understanding the Variables

When a visitor fills your form like this:
- **Name:** Rahul Sharma
- **Email:** rahul.sharma@gmail.com
- **Subject:** Interested in your services
- **Message:** Hi Sandeep, I saw your portfolio and would like to discuss a project...

You will receive an email that looks like this:

```
From: Rahul Sharma <rahul.sharma@gmail.com>
To: sandeep897@outlook.com
Subject: New Portfolio Contact: Interested in your services

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT DETAILS:

Name: Rahul Sharma
Email: rahul.sharma@gmail.com
Subject: Interested in your services

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MESSAGE:

Hi Sandeep, I saw your portfolio and would like to discuss a project...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was sent from your portfolio contact form at:
https://sandeep-sonowal-portfolio.vercel.app/

To reply to Rahul Sharma, simply click the Reply button.
```

---

### Step 5: Test Your Template (Optional but Recommended)

Before saving, you can test the template:

1. Look for **"Test it"** button (usually on the right side)
2. Click it
3. Fill in test values:
   - from_name: `Test User`
   - from_email: `test@example.com`
   - subject: `Test Subject`
   - message: `This is a test message`
4. Click "Send Test"
5. Check your email: sandeep897@outlook.com
6. You should receive a test email

---

### Step 6: Save Template

1. Click the **"Save"** button (top right, blue button)
2. You'll see a success message
3. Your template is now saved!

---

### Step 7: Copy Template ID

After saving, you'll see your template in the list. Look for:

```
Template ID: template_xxxxxxx
```

**COPY THIS ID!** You need it for the next step.

---

## Visual Reference - Field Mapping

```
┌─────────────────────────────────────────────────────────────┐
│  YOUR WEBSITE FORM          →    EMAIL TEMPLATE             │
├─────────────────────────────────────────────────────────────┤
│  Name field                 →    {{from_name}}              │
│  Email field                →    {{from_email}}             │
│  Subject field              →    {{subject}}                │
│  Message field              →    {{message}}                │
└─────────────────────────────────────────────────────────────┘
```

---

## Complete Template Configuration Checklist

Copy this and check off as you go:

```
☐ Template Name: "Portfolio Contact Form"
☐ From Name: {{from_name}}
☐ From Email: {{from_email}}
☐ Subject: New Portfolio Contact: {{subject}}
☐ Reply-To: {{from_email}}
☐ Content: (Full template with all variables)
☐ Clicked "Save" button
☐ Copied Template ID
☐ (Optional) Sent test email
```

---

## What Each Variable Does

| Variable | Purpose | Example |
|----------|---------|---------|
| `{{from_name}}` | Visitor's name | "Priya Patel" |
| `{{from_email}}` | Visitor's email | "priya@example.com" |
| `{{subject}}` | Message subject | "Job Opportunity" |
| `{{message}}` | Full message text | "I would like to hire you..." |

---

## Common Mistakes to Avoid

❌ **Wrong:** `{from_name}` (single brackets)
✅ **Correct:** `{{from_name}}` (double brackets)

❌ **Wrong:** `{{ from_name }}` (spaces inside)
✅ **Correct:** `{{from_name}}` (no spaces)

❌ **Wrong:** `{{name}}` (wrong variable name)
✅ **Correct:** `{{from_name}}` (matches form field name)

❌ **Wrong:** Changing the variable names
✅ **Correct:** Use EXACTLY: `from_name`, `from_email`, `subject`, `message`

---

## After You Get Template ID

Once you have your Template ID (looks like `template_abc1234`), tell me and I'll update your code:

```javascript
// I'll change this line in script.js:
emailjs.sendForm('service_j6vm1wj', 'YOUR_TEMPLATE_ID', this)

// To this:
emailjs.sendForm('service_j6vm1wj', 'template_abc1234', this)
```

---

## Alternative: Simple Template (If you want minimal)

If you prefer a simpler email format:

**Subject:**
```
Portfolio Contact from {{from_name}}
```

**Content:**
```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

This works too! Choose whichever format you prefer.

---

## Need Help?

If you see any errors or get stuck:
1. Take a screenshot of the template editor
2. Share the error message
3. Tell me which step you're on

I'll help you fix it immediately!
