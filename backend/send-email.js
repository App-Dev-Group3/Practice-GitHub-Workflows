const { Resend } = require('resend');

const resendApiKey = process.env.RESEND_API_KEY;
console.log('send-email: RESEND_API_KEY present?', Boolean(resendApiKey));
console.log('send-email: EMAIL_FROM', process.env.EMAIL_FROM);

const resend = new Resend(resendApiKey);

async function sendEmail({ to, subject, text, html, from }) {
  if (!resendApiKey) {
    throw new Error('RESEND_API_KEY is not set in environment');
  }
  if (!to || !subject || (!text && !html)) {
    throw new Error('Missing required fields: to, subject, and text/html');
  }

  const fromAddress = from || process.env.EMAIL_FROM;

  const message = await resend.emails.send({
    from: fromAddress,
    to,
    subject,
    text,
    html,
  });

  return {
    id: message.id,
    status: message.status || 'queued',
    accepted: [to],
    provider: 'resend',
  };
}

module.exports = { sendEmail };