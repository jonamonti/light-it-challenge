import nodemailer from 'nodemailer'

export const sendConfirmationEmail = async (to: string, fullName: string) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  const info = await transporter.sendMail({
    from: '"Patient Registration" <no-reply@patients.com>',
    to,
    subject: 'Registration Successful',
    text: `Hello ${fullName}, your registration was successful.`,
    html: `<p>Hello <strong>${fullName}</strong>, your registration was successful.</p>`,
  })

  console.log(`📨 Confirmation email sent to ${to} — message ID: ${info.messageId}`);
}