# EmailJS Setup Guide for Portfolio Contact Form

This guide will help you set up EmailJS to enable email functionality in your portfolio contact form.

## 🚀 Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Contact Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Your Portfolio Contact Form
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

### 5. Update Your Code
Replace the placeholder values in `script.js`:

```javascript
// Line 2: Replace with your actual public key
emailjs.init("user_def456");

// Line 47: Replace with your actual service ID
emailjs.send('service_abc123', 'template_xyz789', templateParams)

// Line 40: Replace with your actual email address
to_email: 'your-actual-email@gmail.com'
```

## 📧 Email Template Variables

The contact form sends these variables to your email template:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_name}}` - Your name (Sandeep Sonowal)
- `{{to_email}}` - Your email address

## 🔧 Features Included

### ✅ Form Validation
- Required field validation
- Email format validation
- User-friendly error messages

### ✅ Loading States
- Button shows "Sending..." with spinner
- Button disabled during submission
- Prevents multiple submissions

### ✅ Success/Error Handling
- Success notification on email sent
- Error notification if something goes wrong
- Form resets after successful submission

### ✅ Professional UX
- Smooth animations
- Clear feedback messages
- Responsive design

## 🎯 How It Works

1. **User fills form** → Validation checks
2. **User clicks send** → Loading state activates
3. **EmailJS sends email** → To your specified email address
4. **Success/Error** → User gets notification
5. **Form resets** → Ready for next message

## 📱 Testing

1. Open your portfolio in a browser
2. Go to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email for the message

## 🔒 Security Notes

- EmailJS is secure and widely used
- No sensitive data is stored
- Emails are sent directly to your inbox
- Free tier allows 200 emails/month

## 🆘 Troubleshooting

### Common Issues:
1. **"Service not found"** → Check your Service ID
2. **"Template not found"** → Check your Template ID
3. **"Invalid public key"** → Check your Public Key
4. **Emails not received** → Check spam folder

### Support:
- EmailJS Documentation: [docs.emailjs.com](https://docs.emailjs.com/)
- EmailJS Community: [community.emailjs.com](https://community.emailjs.com/)

## 💡 Pro Tips

1. **Test thoroughly** before going live
2. **Monitor your email** for the first few messages
3. **Set up email filters** to organize portfolio messages
4. **Consider upgrading** if you expect high volume

---

**Your contact form is now ready to receive real emails! 🎉** 