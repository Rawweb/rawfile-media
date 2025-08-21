export async function submitContact(formData, { redirectUrl } = {}) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

  if (!accessKey) {
    return {
      ok: false,
      code: 'MISSING_KEY',
      message: 'Missing Web3Forms access key',
    };
  }

  // Validate required fields
  const missing = [];
  if (!formData.firstName) missing.push('First name');
  if (!formData.email) missing.push('Email');
  if (!formData.message) missing.push('Message');

  if (missing.length) {
    return {
      ok: false,
      code: 'VALIDATION',
      message: `${missing.join(', ')} ${
        missing.length > 1 ? 'are' : 'is'
      } required.`,
      missing, // useful if you want to highlight fields later
    };
  }

  // Honeypot
  if (formData.botcheck) {
    return { ok: true, code: 'BOT', bot: true, message: 'Spam blocked' };
  }

  const payload = {
    access_key: accessKey,
    subject: 'New message from Photography site',
    from_name: `${formData.firstName} ${formData.lastName || ''}`.trim(),
    name: `${formData.firstName} ${formData.lastName || ''}`.trim(),
    email: formData.email,
    phone: formData.phone || '',
    message: formData.message,
    page: typeof window !== 'undefined' ? window.location.href : '',
    ...(redirectUrl ? { redirect: redirectUrl } : {}),
  };

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));

    if (res.ok && data?.success) {
      return {
        ok: true,
        code: 'SUCCESS',
        data,
        message: 'Thanks! Your message was sent.',
      };
    }

    // API returned an error payload
    return {
      ok: false,
      code: 'SERVER',
      message: data?.message || 'Submission failed.',
      status: res.status,
    };
  } catch (err) {
    const msg = err?.message?.includes('Failed to fetch')
      ? 'Network blocked/offline (check adblock & Network tab).'
      : `Network error: ${err?.message || err}`;
    return { ok: false, code: 'NETWORK', message: msg };
  }
}
