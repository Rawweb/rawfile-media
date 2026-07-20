'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState = { ok: boolean; error?: string };

export async function sendInquiry(
  prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const type = String(formData.get('type') || '').trim();
  const timeline = String(formData.get('timeline') || '').trim();
  const details = String(formData.get('details') || '').trim();

  // validation
  if (!name || !email || !details) {
    return { ok: false, error: 'Name, email, and details are required.' };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }

  try {
    await resend.emails.send({
      from: 'Rawfile Media <contact@rawfilemedia.com>',
      to: 'rawfile.webdev@gmail.com',
      replyTo: email,
      subject: `New inquiry: ${type || 'Project'} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nType: ${type}\nTimeline: ${timeline}\n\n${details}`,
    });
    return { ok: true };
  } catch (err) {
    console.error('Resend error:', err);
    return {
      ok: false,
      error: 'Something went wrong. Try emailing me directly.',
    };
  }
}
