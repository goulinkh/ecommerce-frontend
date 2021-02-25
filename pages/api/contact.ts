import { NextApiHandler } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.EMAIL_API_KEY);

const Hello: NextApiHandler = async (req, res) => {
  // ReCAPTACH verification
  const { success, score } = await (
    await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_API_KEY}&response=${req.body.recaptchaToken}`,
      {
        method: 'POST',
      }
    )
  ).json();

  if (!success || score < 0.5) {
    res.status(200).json({
      error: true,
      // Degage, on veut pas de bot ici
      message: 'Il faut utiliser un navigateur que vous utiliser courament',
    });
    return;
  }
  const email = (req.body.email as string) || '';
  if (!email.match(/^\S+@\S+\.\S+$/)) {
    res.status(200).json({
      error: true,
      message: 'Votre addresse mail est invalide',
    });
    return;
  }
  try {
    await sgMail.send({
      to: 'goulin.khoge@gmail.com',
      from: 'contact@goulin.fr', // Use the email address or domain you verified above
      subject: 'Ecommerce demo contact form',
      html: `
<h1 style="color:rgb(73, 169, 230);">Demo Ecommerce Contact Form</h1>
<strong>Email: </strong><span>${email}</span>
<br/>
<strong>Demande: </strong><span>${req.body.typeDeDemande}</span>
<br/>
<strong>Message:</strong>
<p>${escapeHtml(req.body.message).split('\n').join('<br/>')}</p>`,
    });
    res.status(200).json({ message: 'Votre message a été envoyé avec succes' });
  } catch (e) {
    console.error('Failed to send email', e.response.body.errors);
    res.status(200).json({
      error: true,
      message: "Echec d'envoie de mail",
    });
  }
};

export default Hello;

function escapeHtml(text) {
  'use strict';
  return text.replace(/[\"&<>]/g, function (a) {
    return { '"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;' }[a];
  });
}
