import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { submitContact } from '@components/utils/submitContact';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  // Form input Logic
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Submit Logic
  const handleSubmit = async e => {
    e.preventDefault();
    let dismissId;
    try {
      setIsSubmitting(true);
      dismissId = toast.loading('Sending message…');

      const result = await submitContact(form);

      toast.dismiss(dismissId);

      // Handle validation errors returned from submitContact
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
    } catch (err) {
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
              className="tracking-wide text-lg text-grey-light uppercase"
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
              className="tracking-wide text-lg text-grey-light uppercase"
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
                <motion.label className="block" {...childMotion}>
                  <span className="block text-xs text-grey-midLight mb-2">
                    First Name
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="FIRST NAME"
                    className="input-style"
                    aria-invalid={!!errors.firstName}
                    aria-describedby="firstName-error"
                    autoComplete="given-name"
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="error-text">
                      First Name is required.
                    </p>
                  )}
                </motion.label>

                {/* Last Name */}
                <motion.label className="block" {...childMotion}>
                  <span className="block text-xs text-grey-midLight mb-2">
                    Last Name
                  </span>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="LAST NAME"
                    className="input-style"
                    aria-invalid={!!errors.lastName}
                    aria-describedby="lastName-error"
                    autoComplete="family-name"
                  />
                  {errors.lastName && (
                    <p id="lastName-error" className="error-text">
                      Last Name is required.
                    </p>
                  )}
                </motion.label>

                {/* Email */}
                <motion.label className="block" {...childMotion}>
                  <span className="block text-xs text-grey-midLight mb-2">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="EMAIL ADDRESS"
                    className="input-style"
                    aria-invalid={!!errors.email}
                    aria-describedby="email-error"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p id="email-error" className="error-text">
                      Email is required.
                    </p>
                  )}
                </motion.label>

                {/* Phone */}
                <motion.label className="block" {...childMotion}>
                  <span className="block text-xs text-grey-midLight mb-2">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="PHONE NUMBER"
                    className="input-style"
                    aria-invalid={!!errors.phone}
                    aria-describedby="phone-error"
                    autoComplete="tel"
                  />
                  {errors.phone && (
                    <p id="phone-error" className="error-text">
                      Phone Number is required.
                    </p>
                  )}
                </motion.label>
              </div>

              {/* Message */}
              <motion.label className="block mt-6" {...childMotion}>
                <span className="block text-xs text-grey-midLight mb-2">
                  Your Message
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="YOUR MESSAGE"
                  rows={5}
                  className="input-style resize-y"
                  aria-invalid={!!errors.message}
                  aria-describedby="message-error"
                />
                {errors.message && (
                  <p id="message-error" className="error-text">
                    Message is required.
                  </p>
                )}
              </motion.label>

              <div className="mt-8 h-px w-full bg-dark-midLight" />

              {/* Submit row */}
              <motion.div
                className="mt-6 flex items-center gap-4 flex-wrap"
                {...fadeUp(0.4)}
              >
                <h1 className="text-xl uppercase text-grey-midLight">
                  send message
                </h1>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 bg-purple-light hover:bg-purple-midLight text-white px-6 py-2 rounded-full transition duration-300 hover:shadow-[0_0_20px_rgba(174,161,247,0.9)] animate-purple-glow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <FiArrowUpRight className="size-5" />
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
