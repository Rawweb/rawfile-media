import React, { useState, useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { submitContact } from '@components/utils/submitContact';
import { useNavigate } from 'react-router-dom';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const PHONE_RE = /^\+?[0-9()\-\s]{7,}$/;
const MESSAGE_MAX = 1000;

const ContactInfoSection = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24, filter: 'blur(2px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.6, type: 'spring', ease: 'easeOut', delay },
    viewport: { once: true, amount: 0.45 },
  });

  const slideLeft = (delay = 0) => ({
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.9, ease: 'easeOut', delay },
    viewport: { once: true, amount: 0.5 },
  });

  const parentMotion = {
    variants: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.15 } },
    },
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: 0.3 },
  };

  const childMotion = {
    variants: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
  };

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    botcheck: '', // Honeypot field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const lastSubmitRef = useRef(0); // <-- for 5s rate-limit
  const navigate = useNavigate();

  // ---------- Validation ----------
  const validate = values => {
    const next = {};

    // Requireds
    if (!values.firstName?.trim()) next.firstName = 'First name is required.';
    if (!values.email?.trim()) next.email = 'Email is required.';
    if (!values.message?.trim()) next.message = 'Message is required.';

    // Formats
    if (values.email && !EMAIL_RE.test(values.email.trim())) {
      next.email = 'Enter a valid email address.';
    }
    if (values.phone && !PHONE_RE.test(values.phone.trim())) {
      next.phone = 'Enter a valid phone number.';
    }

    // Lengths
    if (values.message && values.message.length > MESSAGE_MAX) {
      next.message = `Message must be ≤ ${MESSAGE_MAX} characters.`;
    }

    return next;
  };

  // Form input Logic (with live validation)
  const handleChange = e => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };

    setForm(updated);

    // Live-validate only the field being changed
    const fieldErrs = validate(updated);
    setErrors(prev => {
      const merged = { ...prev, [name]: fieldErrs[name] };
      // If no error for this field now, remove it
      if (!fieldErrs[name]) delete merged[name];
      return merged;
    });
  };

  // ---------- Submit with Rate Limit ----------
  const handleSubmit = async e => {
    e.preventDefault();

    // 5s rate limiting
    const now = Date.now();
    const elapsed = now - lastSubmitRef.current;
    const cooldown = 5000;
    if (elapsed < cooldown) {
      const waitSec = Math.ceil((cooldown - elapsed) / 1000);
      toast.error(`Please wait ${waitSec}s before submitting again.`);
      return;
    }

    // Run full validation
    const clientErrors = validate(form);
    if (Object.keys(clientErrors).length) {
      setErrors(clientErrors);
      // focus first invalid field
      const firstKey = Object.keys(clientErrors)[0];
      setTimeout(() => {
        document.querySelector(`[name="${firstKey}"]`)?.focus();
      }, 0);
      toast.error('Please fix the highlighted fields.');
      return;
    }

    let dismissId;
    try {
      setIsSubmitting(true);
      dismissId = toast.loading('Sending message…');

      const result = await submitContact(form);

      toast.dismiss(dismissId);
      lastSubmitRef.current = Date.now(); // update last submit AFTER request ends

      // Handle validation errors returned from submitContact (server)
      if (!result.ok && result.code === 'VALIDATION') {
        const map = {
          'First name': 'firstName',
          Email: 'email',
          Message: 'message',
        };
        const nextErrors = {};
        (result.missing || []).forEach(label => {
          const key = map[label];
          if (key) nextErrors[key] = 'Required';
        });
        setErrors(nextErrors);
        toast.error(result.message || 'Please fill in all required fields.');
        return;
      }

      if (result.ok) {
        if (result.code === 'BOT') {
          // silently succeed
          return;
        }
        toast.success(result.message || 'Thanks! Your message was sent.');
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          botcheck: '',
        });
        setErrors({});
        navigate('/thank-you');
      } else {
        toast.error(
          result.message || 'Something went wrong. Please try again.'
        );
      }
    } catch {
      toast.dismiss(dismissId);
      toast.error('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container section-heading relative">
      <div className="mt-12 border-t border-b border-dark-midLight pt-10 pb-10">
        <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* LEFT: Contact Information */}
          <motion.div className="lg:col-span-4" {...slideLeft(0.4)}>
            <motion.h2
              className="tracking-wide text-lg dark:text-grey-light uppercase"
              {...fadeUp(0.6)}
            >
              contact information
            </motion.h2>

            {/* Phone + Email row */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-2 text-sm">
              <a
                href="tel:+2348068226614"
                className="inline-flex items-center gap-2 text-grey-midDark hover:text-purple-midLight transition"
              >
                <span className="font-semibold">+234-806-822-6614</span>
                <FiArrowUpRight className="size-4" />
              </a>
              <a
                href="mailto:rawfile.webdev@gmail.com"
                className="inline-flex items-center gap-2 text-grey-midDark hover:text-purple-midLight transition"
              >
                <span className="font-semibold">rawfile.webdev@gmail.com</span>
                <FiArrowUpRight className="size-4" />
              </a>
            </div>

            <p className="mt-6 text-[13px] leading-6 text-grey-midDark max-w-md">
              Feel free to reach out through phone or email. We’ll get back to
              you promptly.
            </p>
          </motion.div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-8">
            <motion.h3
              className="tracking-wide text-lg dark:text-grey-light uppercase"
              {...fadeUp(0.2)}
            >
              SEND ME A MESSAGE
            </motion.h3>
            <p className="mt-3 text-[13px] leading-6 text-grey-midDark">
              Have a specific inquiry or message? Use the form below and we’ll
              respond as soon as possible.
            </p>

            <motion.form
              onSubmit={handleSubmit}
              className="mt-8"
              {...parentMotion}
              aria-busy={isSubmitting}
            >
              {/* Honeypot (hidden) */}
              <input
                type="text"
                name="botcheck"
                value={form.botcheck}
                onChange={handleChange}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
                style={{ display: 'none' }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <motion.label
                  className="block"
                  {...childMotion}
                  htmlFor="firstName"
                >
                  <span className="block text-xs dark:text-grey-midLight mb-2">
                    First Name
                  </span>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="FIRST NAME"
                    className={`input-style ${
                      errors.firstName ? 'ring-1 ring-red-500' : ''
                    }`}
                    aria-invalid={!!errors.firstName}
                    aria-describedby="firstName-error"
                    autoComplete="given-name"
                    disabled={isSubmitting}
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="error-text">
                      {errors.firstName}
                    </p>
                  )}
                </motion.label>

                {/* Last Name */}
                <motion.label
                  className="block"
                  {...childMotion}
                  htmlFor="lastName"
                >
                  <span className="block text-xs dark:text-grey-midLight mb-2">
                    Last Name
                  </span>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="LAST NAME"
                    className="input-style"
                    aria-invalid={!!errors.lastName}
                    aria-describedby="lastName-error"
                    autoComplete="family-name"
                    disabled={isSubmitting}
                  />
                  {errors.lastName && (
                    <p id="lastName-error" className="error-text">
                      {errors.lastName}
                    </p>
                  )}
                </motion.label>

                {/* Email */}
                <motion.label
                  className="block"
                  {...childMotion}
                  htmlFor="email"
                >
                  <span className="block text-xs dark:text-grey-midLight mb-2">
                    Email
                  </span>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="EMAIL ADDRESS"
                    className={`input-style ${
                      errors.email ? 'ring-1 ring-red-500' : ''
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby="email-error"
                    autoComplete="email"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p id="email-error" className="error-text">
                      {errors.email}
                    </p>
                  )}
                </motion.label>

                {/* Phone */}
                <motion.label
                  className="block"
                  {...childMotion}
                  htmlFor="phone"
                >
                  <span className="block text-xs dark:text-grey-midLight mb-2">
                    Phone Number
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="PHONE NUMBER"
                    className={`input-style ${
                      errors.phone ? 'ring-1 ring-red-500' : ''
                    }`}
                    aria-invalid={!!errors.phone}
                    aria-describedby="phone-error"
                    autoComplete="tel"
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="error-text">
                      {errors.phone}
                    </p>
                  )}
                </motion.label>
              </div>

              {/* Message */}
              <motion.label
                className="block mt-6"
                {...childMotion}
                htmlFor="message"
              >
                <span className="block text-xs dark:text-grey-midLight mb-2">
                  Your Message
                </span>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="YOUR MESSAGE"
                  rows={5}
                  className={`input-style resize-y ${
                    errors.message ? 'ring-1 ring-red-500' : ''
                  }`}
                  aria-invalid={!!errors.message}
                  aria-describedby="message-error message-help"
                  maxLength={MESSAGE_MAX}
                  disabled={isSubmitting}
                />
                <div
                  id="message-help"
                  className="mt-1 text-[11px] text-grey-midLight"
                >
                  {form.message.length}/{MESSAGE_MAX}
                </div>
                {errors.message && (
                  <p id="message-error" className="error-text">
                    {errors.message}
                  </p>
                )}
              </motion.label>

              <div className="mt-8 h-px w-full bg-dark-midLight" />

              {/* Submit row */}
              <motion.div
                className="mt-6 flex items-center gap-4 flex-wrap"
                {...fadeUp(0.4)}
              >
                <h1 className="text-xl uppercase dark:text-grey-midLight">
                  send message
                </h1>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Send message"
                  className="flex items-center gap-2 bg-purple-light hover:bg-purple-midLight text-white px-6 py-2 rounded-full transition duration-300 hover:shadow-[0_0_20px_rgba(174,161,247,0.9)] animate-purple-glow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <FiArrowUpRight
                    className={`size-5 ${isSubmitting ? 'animate-pulse' : ''}`}
                  />
                  {isSubmitting ? 'Sending…' : ''}
                </button>
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
