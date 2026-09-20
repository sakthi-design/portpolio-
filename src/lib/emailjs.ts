import emailjs from '@emailjs/browser';

/**
 * Central EmailJS config.
 *
 * Fill in .env.local with your REAL credentials from https://dashboard.emailjs.com
 * and restart the dev server — `VITE_EMAILJS_*` variables are baked in at build
 * time. EmailJS public keys are designed to be public, so no secret here.
 */
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
} as const;

let initialized = false;

/**
 * Call once at app startup. Safe to call when unconfigured: the rest of the
 * app keeps working, and the contact form shows a setup hint on submit.
 */
export function initEmailJS(): void {
  if (initialized) return;
  if (!EMAILJS_CONFIG.publicKey) {
    console.warn(
      '[emailjs] Public key is missing. Add VITE_EMAILJS_PUBLIC_KEY to .env.local ' +
        '(see https://dashboard.emailjs.com/admin/account) and restart the dev server.'
    );
    return;
  }
  emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  initialized = true;
}

export interface SendInquiryParams {
  name: string;
  email: string;
  message: string;
}

export async function sendInquiry({ name, email, message }: SendInquiryParams): Promise<void> {
  if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
    throw new Error(
      'EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID ' +
        'and VITE_EMAILJS_PUBLIC_KEY to .env.local, then restart the dev server.'
    );
  }

  await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    {
      from_name: name,
      from_email: email,
      reply_to: email,
      message,
    },
    EMAILJS_CONFIG.publicKey
  );
}

/** Maps EmailJS/SDK failures to a user-facing message. */
export function describeEmailError(error: unknown): string {
  // EmailJS SDK v4 throws `EmailJSResponseStatus` objects with status/statusText
  const status =
    typeof error === 'object' && error !== null && 'status' in error
      ? (error as { status: number }).status
      : undefined;

  if (status === 400 || status === 401 || status === 403) {
    return 'The contact form is misconfigured. Please use the email link instead.';
  }
  if (status === 404) {
    return 'The contact service is currently unavailable. Please use the email link instead.';
  }
  if (status === 429) {
    return 'Too many messages have been sent recently. Please try again later.';
  }
  if (error instanceof Error && /not configured|missing/i.test(error.message)) {
    return 'The contact form is not set up yet. Please use the email link instead.';
  }
  return 'Unable to send your message right now. Please use the email link instead.';
}
