import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { toast } from 'sonner';
import { submitContact } from '@components/utils/submitContact';
import { useNavigate } from 'react-router-dom';
import SessionSelect from '@components/ui/SessionSelect';
import DateSelect from '@components/ui/DateSelect';
import TimeSelect from '@components/ui/TimeSelect';
import VariantSelect from '@components/ui/VariantSelect';
import { getDefaultVariant, getVariants } from '@components/ui/SessionVariants';
import FaqSection from '@sections/Home/FaqSection';
import TestimonialsSection from '@sections/Home/TestimonialsSection';





const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const PHONE_RE = /^\+?[0-9()\-\s]{7,}$/;

const sessions = [
  {
    group: 'Portrait Sessions',
    items: [
      { name: 'Individual Session' },
      { name: 'Family Session' },
      { name: 'Couple Session' },
    ],
  },
  {
    group: 'Event Coverage',
    items: [
      { name: 'Wedding Session' },
      { name: 'Party Coverage' },
      { name: 'Milestone Coverage' },
    ],
  },
  { group: 'Other', items: [{ name: 'Commercial Session' }] },
];

const firstSession = sessions[0].items[0].name;

const BookingPage = () => {
  // ---------- Motion Variants ----------
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

  const slideRight = (delay = 0) => ({
    initial: { opacity: 0, x: 60 },
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

  // ---------- State ----------
  const [form, setForm] = useState({
    session: firstSession,
    variant: getDefaultVariant(firstSession),
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
    botcheck: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastSubmitRef = useRef(0);
  const navigate = useNavigate();

  // ---------- Validation ----------
  const validate = values => {
    const next = {};
    if (!values.session) next.session = 'Session is required.';

    const needsVariant = getVariants(values.session).length > 0;
    if (needsVariant && !values.variant)
      next.variant = 'Please choose an option.';

    if (!values.date) next.date = 'Date is required.';
    if (!values.time) next.time = 'Time is required.';
    if (!values.name?.trim()) next.name = 'Full name is required.';
    if (!values.email?.trim()) next.email = 'Email is required.';
    if (!values.phone?.trim()) next.phone = 'Phone number is required.';

    if (values.email && !EMAIL_RE.test(values.email.trim())) {
      next.email = 'Enter a valid email address.';
    }
    if (values.phone && !PHONE_RE.test(values.phone.trim())) {
      next.phone = 'Enter a valid phone number.';
    }
    return next;
  };

  // ---------- Handlers ----------
  const handleChange = e => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };

    if (name === 'session') {
      updated.variant = getDefaultVariant(value); // auto-pick first option or ''
    }

    setForm(updated);

    const fieldErrs = validate(updated);
    setErrors(prev => {
      const merged = { ...prev, [name]: fieldErrs[name] };
      if (!fieldErrs[name]) delete merged[name];
      return merged;
    });
  };

  const handleSubmit = async e => {
    e.preventDefault(); // toast-only validation (no native UI)
    const now = Date.now();
    if (now - lastSubmitRef.current < 5000) {
      toast.error('Please wait before submitting again.');
      return;
    }

    const clientErrors = validate(form);
    if (Object.keys(clientErrors).length) {
      setErrors(clientErrors);

      // focus first invalid
      const order = ['session', 'date', 'time', 'name', 'email', 'phone'];
      const firstKey = order.find(k => clientErrors[k]);
      if (firstKey) {
        setTimeout(() => {
          document.querySelector(`[name="${firstKey}"]`)?.focus();
        }, 0);
      }

      toast.error(
        clientErrors[firstKey] || 'Please fix the highlighted fields.'
      );
      return;
    }

    // Map booking fields -> submitContact expected payload
    const [firstName, ...rest] = (form.name || '').trim().split(/\s+/);
    const bookingMessage = [
      'New Booking Request',
      `Session: ${form.session}`,
      form.variant ? `Option: ${form.variant}` : null, // NEW
      `Preferred Date: ${form.date}`,
      `Preferred Time: ${form.time}`,
      `Full Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Notes: ${form.notes || '-'}`,
    ]
      .filter(Boolean)
      .join('\n');

    let toastId;
    try {
      setIsSubmitting(true);
      toastId = toast.loading('Submitting booking...');

      // send fields your contact endpoint expects
      const result = await submitContact({
        firstName: firstName || 'Guest',
        lastName: rest.join(' '),
        email: form.email,
        phone: form.phone,
        message: bookingMessage,
        botcheck: form.botcheck,
      });

      toast.dismiss(toastId);
      lastSubmitRef.current = Date.now();

      if (result?.ok) {
        toast.success(
          result.message || "Booking request sent! We'll be in touch soon."
        );
        setForm({
          session: sessions[0].items[0].name,
          date: '',
          time: '',
          name: '',
          email: '',
          phone: '',
          notes: '',
          botcheck: '',
        });
        setErrors({});
        navigate('/thank-you', {
          state: {
            name: form.name,
            email: form.email,
            session: form.session,
            variant: form.variant,
            date: form.date,
            time: form.time,
          },
        });
      } else {
        toast.error(result?.message || 'Something went wrong. Try again.');
      }
    } catch {
      toast.dismiss(toastId);
      toast.error('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container section-heading relative">
      <div className="mt-12 border-b border-dark-midLight pt-10 pb-10">
        <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* LEFT INFO */}
          <motion.div className="lg:col-span-4" {...slideLeft(0.4)}>
            <motion.h2
              className="tracking-wide text-lg dark:text-grey-light uppercase"
              {...fadeUp(0.6)}
            >
              Booking Information
            </motion.h2>
            <p className="mt-6 text-[13px] leading-6 text-grey-midDark max-w-md">
              Select your session type, pick a date, and share your details. We
              will confirm availability and get back to you promptly.
            </p>
          </motion.div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-8">
            <motion.h3
              className="tracking-wide text-lg dark:text-grey-light uppercase"
              {...fadeUp(0.2)}
            >
              Book a Session
            </motion.h3>

            <motion.form
              onSubmit={handleSubmit}
              className="mt-8"
              {...parentMotion}
              aria-busy={isSubmitting}
              noValidate
            >
              {/* Honeypot */}
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
                {/* Session */}
                <motion.label className="block" {...childMotion}>
                  <span className="block text-xs dark:text-grey-midLight mb-2">
                    Session Type
                  </span>
                  <SessionSelect
                    sessions={sessions}
                    value={form.session}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    error={errors.session}
                  />
                </motion.label>

                {/* Variant (auto-hides if none) */}
                <motion.div className="block" {...childMotion}>
                  <VariantSelect
                    session={form.session}
                    value={form.variant}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    error={errors.variant}
                    label={
                      /Session$/.test(form.session)
                        ? 'Location / Type'
                        : 'Coverage Type'
                    }
                  />
                </motion.div>

                {/* Date */}
                <motion.div className="block" {...childMotion}>
                  <DateSelect
                    value={form.date}
                    onChange={handleChange}
                    error={errors.date}
                    disabled={isSubmitting}
                    min={new Date().toISOString().slice(0, 10)} // today forward
                  />
                </motion.div>

                {/* Time */}
                <motion.label className="block" {...childMotion}>
                  <TimeSelect
                    value={form.time}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    error={errors.time}
                    start="08:00"
                    end="17:00"
                    step={30}
                  />
                </motion.label>

                {/* Full Name */}
                <motion.label className="block" {...childMotion} htmlFor="name">
                  <span className="block text-xs dark:text-grey-midLight mb-2">
                    Full Name
                  </span>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="FULL NAME"
                    className={`input-style ${
                      errors.name ? 'ring-1 ring-red-500' : ''
                    }`}
                    disabled={isSubmitting}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                  />
                </motion.label>

                {/* Email */}
                <motion.label
                  className="block"
                  {...childMotion}
                  htmlFor="email"
                >
                  <span className="block text-xs dark:text-grey-midLight mb-2">
                    Email Address
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
                    disabled={isSubmitting}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                  />
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
                    disabled={isSubmitting}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                  />
                </motion.label>
              </div>

              {/* Notes (optional) */}
              <motion.label
                className="block mt-6"
                {...childMotion}
                htmlFor="notes"
              >
                <span className="block text-xs dark:text-grey-midLight mb-2">
                  Additional Notes (Optional)
                </span>
                <textarea
                  id="notes"
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Tell us more about your vision…"
                  rows={4}
                  className="input-style resize-y"
                  disabled={isSubmitting}
                />
              </motion.label>

              <div className="mt-8 h-px w-full bg-dark-midLight" />

              {/* Submit */}
              <motion.div
                className="mt-6 flex items-center gap-4 flex-wrap"
                {...fadeUp(0.4)}
              >
                <h1 className="text-xl uppercase dark:text-grey-midLight">
                  Confirm Booking
                </h1>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Confirm booking"
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

      <FaqSection/>
      <TestimonialsSection/>
    </section>
  );
};

export default BookingPage;
