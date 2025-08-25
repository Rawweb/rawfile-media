import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 20, filter: 'blur(1px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.6, ease: 'easeOut', delay: d },
  viewport: { once: true, amount: 0.2 },
});

function TermsAndConditions() {
  const BUSINESS_NAME = 'Kingsley Chibuikem';
  const BUSINESS_LOCATION = 'Anambra, Nigeria';
  const CONTACT_EMAIL = 'rawfile.webdev@gmail.com';
  const UPDATED = '25 Aug 2025';

  return (
    <section className="container section-heading mt-12">
      <motion.div className="max-w-4xl mx-auto space-y-8" {...fadeUp(0.05)}>
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Terms & Conditions</h1>
          <p className="text-sm text-grey-midDark">Last updated: {UPDATED}</p>
          <p className="mt-2 text-grey-midDark">
            These Terms govern the booking and delivery of photography services
            by <b>{BUSINESS_NAME}</b> in {BUSINESS_LOCATION}. By paying a
            retainer, confirming a booking, or using our services, you agree to
            these Terms.
          </p>
        </header>

        <motion.div className="space-y-6" {...fadeUp(0.1)}>
          <h2 className="text-xl font-semibold">1) Bookings & retainers</h2>
          <ul className="grid gap-3">
            {[
              'Dates are reserved only after we confirm availability and receive the agreed retainer.',
              'Unless stated otherwise, retainers are non-refundable but transferable once (subject to availability).',
              'Quotes are valid for 14 days. Pricing may change if the scope or date changes.',
            ].map((t, i) => (
              <li key={i} className="highlight-btn">
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.15)}>
          <h2 className="text-xl font-semibold">2) Payments</h2>
          <p className="text-grey-midDark">
            The remaining balance is due on or before the session/event day,
            unless the invoice states otherwise. Deliverables may be withheld
            until full payment is received. Late payments may attract reasonable
            fees.
          </p>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.2)}>
          <h2 className="text-xl font-semibold">
            3) Rescheduling & cancellation
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-grey-midDark">
            <li>
              <b>Portraits (Individual/Family/Couple):</b> Reschedule with 72
              hours’ notice. Cancellations within 48 hours may incur up to 100%
              of the fee.
            </li>
            <li>
              <b>Events (Weddings/Parties/Milestones):</b> Reschedule with 14+
              days’ notice where possible. Cancellations within 30 days may
              incur up to 100% of the fee due to lost date.
            </li>
            <li>
              If illness or emergencies arise for either party, we’ll seek a
              fair reschedule or substitute photographer.
            </li>
          </ul>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.25)}>
          <h2 className="text-xl font-semibold">
            4) Creative approach & editing
          </h2>
          <p className="text-grey-midDark">
            You hire us for our style and professional judgment. We select and
            edit the best images. RAW files are not delivered unless agreed in
            writing. Minor retouch requests are included (reasonable number
            within 7 days of gallery delivery). Extensive edits may attract
            additional fees.
          </p>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.3)}>
          <h2 className="text-xl font-semibold">5) Deliverables & Timelines</h2>

          {/* Portrait Sessions */}
          <div>
            <h3 className="text-lg font-semibold">Portrait Sessions</h3>
            <ul className="list-disc pl-6 space-y-2 text-grey-midDark mt-2">
              <li>
                <span className="font-medium">Selection Window:</span> After
                your session, you may select your preferred images immediately.
                If you are unable to decide on the spot, you are given up to{' '}
                <strong>24 hours</strong> to make your selection.
              </li>
              <li>
                <span className="font-medium">Delivery:</span> Once your
                selection is confirmed, final edited portraits will be delivered
                within
                <strong> 48–72 hours</strong>. During peak seasons, delivery
                times may extend slightly, and you will be notified in such
                cases.
              </li>
            </ul>
          </div>

          {/* Weddings & Events */}
          <div>
            <h3 className="text-lg font-semibold">Weddings & Events</h3>
            <ul className="list-disc pl-6 space-y-2 text-grey-midDark mt-2">
              <li>
                <span className="font-medium">Highlights:</span> Typically
                delivered within <strong>1–2 weeks</strong>.
              </li>
              <li>
                <span className="font-medium">Full Galleries:</span> Usually
                delivered within <strong>4–8 weeks</strong>.
              </li>
            </ul>
          </div>

          {/* Note */}
          <p className="text-grey-midDark">
            <span className="font-medium">Note:</span> Turnaround times are
            estimates and may vary depending on scope, season, or unforeseen
            circumstances.
          </p>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.35)}>
          <h2 className="text-xl font-semibold">6) Client responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2 text-grey-midDark">
            <li>
              Arrive on time; plan outfits, makeup, and permissions for
              locations.
            </li>
            <li>
              Secure permits and cover location/parking fees where required.
            </li>
            <li>
              Nominate a coordinator for group shots at events to keep timelines
              smooth.
            </li>
          </ul>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.4)}>
          <h2 className="text-xl font-semibold">
            7) Overtime, travel & expenses
          </h2>
          <p className="text-grey-midDark">
            Overtime is charged at our current hourly rate. Travel outside our
            local radius may incur mileage/transport and, for distant events,
            accommodation. Expenses will be communicated in advance where
            possible.
          </p>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.45)}>
          <h2 className="text-xl font-semibold">
            8) Intellectual property & usage
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-grey-midDark">
            <li>
              {BUSINESS_NAME} owns the copyright to all images created unless a
              separate license transfers rights.
            </li>
            <li>
              Clients receive a personal, non-commercial license to share and
              print. Commercial use requires a written license.
            </li>
            <li>
              AI training, NFTs, resale, or derivative works are not permitted
              without written permission.
            </li>
            <li>
              We may display selected images in our portfolio, website, social
              media, or competitions. You may opt out by writing to us before
              the session or in your booking form.
            </li>
          </ul>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.5)}>
          <h2 className="text-xl font-semibold">9) Model release & privacy</h2>
          <p className="text-grey-midDark">
            Where consent is given, you grant us permission to use images that
            include you and your party, consistent with our{' '}
            <a href="/privacy" className="underline hover:text-purple-midLight transition duration-300">
              Privacy Policy
            </a>
            . For minors, a parent/guardian or event organiser must approve.
          </p>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.55)}>
          <h2 className="text-xl font-semibold">
            10) Backups, archiving & data
          </h2>
          <p className="text-grey-midDark">
            We keep working backups while editing. After final delivery, we aim
            to retain archives for 12–24 months but cannot guarantee indefinite
            storage. Keep your own copies safe. Data handling follows our
            Privacy Policy.
          </p>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.6)}>
          <h2 className="text-xl font-semibold">11) Force majeure & safety</h2>
          <p className="text-grey-midDark">
            We’re not liable for events beyond our control (extreme weather,
            accidents, government action, equipment failure). We may pause/leave
            any unsafe environment. If we cannot perform, we’ll reschedule or
            refund fees paid (to the extent of services not delivered).
          </p>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.65)}>
          <h2 className="text-xl font-semibold">12) Liability</h2>
          <p className="text-grey-midDark">
            To the maximum extent permitted by law, our total liability for any
            claim is limited to the amount you paid for the specific service.
          </p>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.7)}>
          <h2 className="text-xl font-semibold">
            13) Disputes & governing law
          </h2>
          <p className="text-grey-midDark">
            These Terms are governed by the laws of the Federal Republic of
            Nigeria. Venue is the competent courts of Anambra State. We
            encourage good-faith negotiation before formal action.
          </p>
        </motion.div>

        <motion.div className="space-y-3" {...fadeUp(0.75)}>
          <h2 className="text-xl font-semibold">14) Changes & acceptance</h2>
          <p className="text-grey-midDark">
            We may update these Terms from time to time. By booking, paying a
            retainer, or using our services after an update, you accept the
            revised Terms.
          </p>
          <p className="text-grey-midDark">
            Questions? Email{' '}
            <a className="underline hover:text-purple-midLight transition duration-300" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default TermsAndConditions;
