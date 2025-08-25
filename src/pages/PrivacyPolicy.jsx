import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 20, filter: "blur(1px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.6, ease: "easeOut", delay: d },
  viewport: { once: true, amount: 0.2 },
});

 function PrivacyPolicy() {
  const BUSINESS_NAME = "Kingsley Chibuikem";
  const BUSINESS_LOCATION = "Anambra, Nigeria";
  const CONTACT_EMAIL = "rawfile.webdev@gmail.com"; 
  const UPDATED = "25 Aug 2025";

  return (
    <section className="container section-heading mt-12">
      <motion.div className="max-w-4xl mx-auto space-y-8" {...fadeUp(0.05)}>
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-sm text-grey-midDark">Last updated: {UPDATED}</p>
          <p className="mt-2 text-grey-midDark">
            This policy explains how <b>{BUSINESS_NAME}</b> (“we”, “us”) collects,
            uses, shares, and protects your information when you interact with our
            website, booking forms, emails, socials, or in-person services in{" "}
            {BUSINESS_LOCATION}.
          </p>
        </header>

        <motion.div className="space-y-6" {...fadeUp(0.1)}>
          <h2 className="text-xl font-semibold">1) What we collect</h2>
          <ul className="grid gap-3">
            {[
              "Contact & booking details (name, email, phone, session type, preferred date/time, location, notes).",
              "Files you provide (mood boards, reference photos, shot lists).",
              "Transactional info processed by secure third-party providers (we don’t store full card details).",
              "Usage & device data for security/analytics (IP, pages viewed, timestamps, cookies).",
              "Communications (emails, DMs, feedback) to manage your request."
            ].map((t, i) => (
              <li key={i} className="highlight-btn">{t}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.15)}>
          <h2 className="text-xl font-semibold">2) Why we use your data</h2>
          <p className="text-grey-midDark">
            We process data under lawful bases recognised in Nigeria’s Data
            Protection Act (NDPA) and similar global standards:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-grey-midDark">
            <li><b>Contract:</b> to schedule, photograph, edit, deliver galleries, and provide support.</li>
            <li><b>Consent:</b> for optional communications or portfolio usage (you can withdraw anytime).</li>
            <li><b>Legitimate interests:</b> to protect our services, prevent fraud, and improve user experience.</li>
            <li><b>Legal obligations:</b> invoices, tax, and regulatory compliance.</li>
          </ul>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.2)}>
          <h2 className="text-xl font-semibold">3) Cookies & analytics</h2>
          <p className="text-grey-midDark">
            We may use essential cookies and privacy-respecting analytics (e.g., Google
            Analytics or a self-hosted tool) to understand site performance. You can
            control cookies in your browser. Some features may not work without them.
          </p>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.25)}>
          <h2 className="text-xl font-semibold">4) Sharing your data</h2>
          <p className="text-grey-midDark">
            We share the minimum data required with trusted service providers:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-grey-midDark">
            <li>Hosting, email, gallery delivery, and payment processors.</li>
            <li>Assistants/second shooters bound by confidentiality.</li>
            <li>Vendors you ask us to coordinate with (e.g., event planners).</li>
            <li>Legal requests or to protect our rights and users’ safety.</li>
          </ul>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.3)}>
          <h2 className="text-xl font-semibold">5) Transfers & retention</h2>
          <p className="text-grey-midDark">
            Our providers may store data outside Nigeria. We use appropriate safeguards
            (contractual protections and reputable vendors). We keep data only as long
            as needed:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-grey-midDark">
            <li>Enquiries: up to 12 months.</li>
            <li>Client galleries/backups: typically 12–24 months (not guaranteed—see <Link to="/terms" className="underline hover:text-purple-midLight transition duration-300">Terms</Link>).</li>
            <li>Contracts/invoices: up to 3 years for accounting/compliance.</li>
          </ul>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.35)}>
          <h2 className="text-xl font-semibold">6) Your rights</h2>
          <p className="text-grey-midDark">
            You can request access, correction, deletion, portability, or withdraw
            consent. We’ll respond within a reasonable time. You may also lodge a
            complaint with the Nigeria Data Protection Commission (NDPC).
          </p>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.4)}>
          <h2 className="text-xl font-semibold">7) Children & sensitive content</h2>
          <p className="text-grey-midDark">
            We require consent from a parent/guardian for minors. For events where minors
            may be present, we rely on the organiser to obtain permissions. We avoid
            collecting unnecessary sensitive data unless it’s essential and consented.
          </p>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.45)}>
          <h2 className="text-xl font-semibold">8) Security</h2>
          <p className="text-grey-midDark">
            We use reasonable technical and organisational measures (encryption in
            transit, access controls, least-privilege). No method is 100% secure, but we
            work to protect your data.
          </p>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.5)}>
          <h2 className="text-xl font-semibold">9) Contact us</h2>
          <p className="text-grey-midDark">
            {BUSINESS_NAME} — {BUSINESS_LOCATION}
            <br />
            <b>Email:</b> <a className="underline hover:text-purple-midLight transition duration-300" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.55)}>
          <h2 className="text-xl font-semibold">10) Changes</h2>
          <p className="text-grey-midDark">
            We may update this policy to reflect law, technology, or our practices.
            Significant changes will be highlighted on this page with a new “Last
            updated” date.
          </p>
        </motion.div>

        <div className="pt-6">
          <Link to="/book-us" className="button">Book a Session</Link>
        </div>
      </motion.div>
    </section>
  );
}

export default PrivacyPolicy;