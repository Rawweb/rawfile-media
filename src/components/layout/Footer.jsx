import { FiArrowUpRight } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MarqueeItems from '../ui/MarqueeItems';
import Cta from '../ui/Cta';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-dark-dark text-grey-light">
      {/* Floating Orb Background (Purple Drift) */}
      <motion.div
        className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ top: "20%", left: "15%", zIndex: 0 }}
      />

      {/* Big Background Heading with Purple Glow */}
      <div className="container relative z-10">
        <motion.h1
          className="text-[120px] md:text-[180px] lg:text-[230px] uppercase text-dark-midLight text-right relative"
          animate={{
            textShadow: [
              "0 0 10px rgba(168,85,247,0.3)", // soft purple
              "0 0 30px rgba(168,85,247,0.6)",
              "0 0 10px rgba(168,85,247,0.3)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          rawfile
        </motion.h1>
      </div>

      {/* Moving Marquee */}
      <div className="overflow-hidden text-grey-midLight bg-dark-midDark border border-dark-midLight border-l-0 border-r-0 relative z-10">
        <MarqueeItems />
      </div>

      {/* CTA Section */}
      <div className="border-b border-dark-midLight relative z-10">
        <div className="container py-10 border-r border-l border-dark-midLight">
          <Cta />
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-b border-dark-midLight relative z-10">
        <div className="container border-r border-l border-dark-midLight py-10 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <p className="text-sm uppercase mb-4 text-grey-midLight">
              A More Meaningful Home for Photography
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase text-grey-midDark">
              Home
            </h4>
            <div className="space-y-2 text-sm flex flex-col uppercase">
              <Link
                to="/about"
                className="hover:text-purple-600 transition duration-300"
              >
                About Me
              </Link>
              <Link className="hover:text-purple-600 transition duration-300">
                My works
              </Link>
              <Link className="hover:text-purple-600 transition duration-300">
                Testimonials
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase text-grey-midDark">
              Clients
            </h4>
            <div className="space-y-2 text-sm flex flex-col uppercase">
              <Link className="hover:text-purple-600 transition duration-300">
                Assumpta
              </Link>
              <Link className="hover:text-purple-600 transition duration-300">
                Blessing
              </Link>
              <Link className="hover:text-purple-600 transition duration-300">
                Onyinye
              </Link>
              <Link className="hover:text-purple-600 transition duration-300">
                Chinelo
              </Link>
              <Link className="hover:text-purple-600 transition duration-300">
                Power
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase text-grey-midDark">
              Portfolio
            </h4>
            <div className="space-y-2 text-sm flex flex-col uppercase">
              <Link className="hover:text-purple-600 transition duration-300">
                Events
              </Link>
              <Link className="hover:text-purple-600 transition duration-300">
                Portraits
              </Link>
              <Link className="hover:text-purple-600 transition duration-300">
                Branding
              </Link>
              <Link className="hover:text-purple-600 transition duration-300">
                Commercials
              </Link>
              <Link className="hover:text-purple-600 transition duration-300">
                Wedding
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase text-grey-midDark">
              Services
            </h4>
            <div className="space-y-2 text-sm flex flex-col uppercase">
              <Link className="hover:text-purple-600 transition duration-300">
                Portraits
              </Link>
              <Link className="hover:text-purple-600 transition duration-300">
                Events
              </Link>
              <Link className="hover:text-purple-600 transition duration-300">
                Commercials
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
        <div className="flex gap-4 text-sm">
          <a
            href="/terms"
            className="hover:textpurple-600k transition duration-300"
          >
            Terms & Conditions
          </a>
          <a
            href="/privacy"
            className="hover:text-purple-600 transition duration-300"
          >
            Privacy Policy
          </a>
        </div>
        <div className="flex gap-3">
          <a
            href="#"
            className="btn hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="btn hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="btn hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] transition duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Kingsley Rawfile Photography. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
