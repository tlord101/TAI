const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message } = req.body || {};
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ ok: false, error: 'Missing required fields: name, email, subject, message' });
    }

    // OWNER_EMAIL: recipient for all contact form submissions
    const OWNER_EMAIL = process.env.OWNER_EMAIL || 'Goldenstatesestates@hotmail.com';

    // Sanitize environment variables (trim, strip surrounding quotes)
    const cleanEnv = (v) => {
      if (v === undefined || v === null) return undefined;
      try {
        // Remove surrounding single/double quotes and trim whitespace
        return String(v).replace(/^\s*"|"\s*$|^\s*'|'\s*$/g, '').trim();
      } catch {
        return v;
      }
    };

    const SMTP_HOST = cleanEnv(process.env.SMTP_HOST);
    const SMTP_USER = cleanEnv(process.env.SMTP_USER);
    // Passwords sometimes are copied with spaces or quotes; remove internal whitespace as well
    const SMTP_PASS = cleanEnv(process.env.SMTP_PASS)?.replace(/\s+/g, '') || undefined;
    const SMTP_PORT = cleanEnv(process.env.SMTP_PORT);
    const SMTP_SECURE = cleanEnv(process.env.SMTP_SECURE);

    // Check if SMTP is configured
    const smtpConfigured = SMTP_HOST && SMTP_USER && SMTP_PASS;
    if (!smtpConfigured) {
      // Log payload if SMTP not configured (useful for local testing)
      console.log('[TEST MODE] Email payload (not sent - SMTP not configured):', {
        to: OWNER_EMAIL,
        from_visitor: email,
        visitor_name: name,
        subject,
        message,
        timestamp: new Date().toISOString()
      });
      return res.status(200).json({
        ok: true,
        info: 'Test mode: Email payload logged. To enable sending, set SMTP_HOST, SMTP_USER, SMTP_PASS in environment.'
      });
    }

    // SMTP is configured — create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: SMTP_SECURE === 'true' || SMTP_SECURE === true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.SMTP_USER, // Send from the SMTP account
      to: OWNER_EMAIL, // Send to owner
      replyTo: email, // Set reply-to to visitor's email
      subject: subject || `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr/>
        <p>${message}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    // For Ethereal/test accounts, generate a preview URL
    let previewUrl = '';
    if (process.env.SMTP_HOST?.includes('ethereal')) {
      previewUrl = nodemailer.getTestMessageUrl(info);
    }
    
    const successMsg = `Email sent to ${OWNER_EMAIL}`;
    const logMsg = previewUrl ? `${successMsg} — Preview: ${previewUrl}` : successMsg;
    console.log('[SUCCESS]', logMsg);
    
    return res.status(200).json({
      ok: true,
      info: successMsg,
      previewUrl: previewUrl || undefined
    });
  } catch (err) {
    console.error('[ERROR] Failed to send email:', err.message);
    return res.status(500).json({
      ok: false,
      error: err.message || 'Failed to send email. Check server logs and SMTP configuration.'
    });
  }
};
