import { FiArrowUpRight } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MarqueeItems from '../ui/MarqueeItems';
import Cta from '../ui/Cta';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-dark-dark text-grey-light">
      {/* Big Background Heading */}
      <div className="container">
        <h1 className="text-[120px] md:text-[180px] lg:text-[230px] uppercase text-dark-midLight text-right">
          rawfile
        </h1>
      </div>

      {/* Moving Marquee */}

      <div className="overflow-hidden text-grey-midLight bg-dark-midDark border border-dark-midLight border-l-0 border-r-0">
        <MarqueeItems />
      </div>

      {/* CTA Section */}
      <div className="border-b border-dark-midLight">
        <div className="container py-10 border-r border-l border-dark-midLight">
          <Cta />
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-b border-dark-midLight">
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
                className="hover:text-grey-dark transition duration-300"
              >
                About Me
              </Link>
              <Link className="hover:text-grey-dark transition duration-300">
                My works
              </Link>
              <Link className="hover:text-grey-dark transition duration-300">
                Testimonials
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase text-grey-midDark">
              Clients
            </h4>
            <div className="space-y-2 text-sm">
              <div className="space-y-2 text-sm flex flex-col uppercase">
                <Link className="hover:text-grey-dark transition duration-300">
                  Assumpta
                </Link>
                <Link className="hover:text-grey-dark transition duration-300">
                  Blessing
                </Link>
                <Link className="hover:text-grey-dark transition duration-300">
                  Onyinye
                </Link>
                <Link className="hover:text-grey-dark transition duration-300">
                  Chinelo
                </Link>
                <Link className="hover:text-grey-dark transition duration-300">
                  Power
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase text-grey-midDark">
              Portfolio
            </h4>
            <div className="space-y-2 text-sm">
              <div className="space-y-2 text-sm flex flex-col uppercase">
                <Link className="hover:text-grey-dark transition duration-300">
                  Events
                </Link>
                <Link className="hover:text-grey-dark transition duration-300">
                  Portraits
                </Link>
                <Link className="hover:text-grey-dark transition duration-300">
                  Branding
                </Link>
                <Link className="hover:text-grey-dark transition duration-300">
                  Commercials
                </Link>
                <Link className="hover:text-grey-dark transition duration-300">
                  Wedding
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase text-grey-midDark">
              Services
            </h4>
            <div className="space-y-2 text-sm flex flex-col uppercase">
              <Link className="hover:text-grey-dark transition duration-300">
                Portraits
              </Link>
              <Link className="hover:text-grey-dark transition duration-300">
                Events
              </Link>
              <Link className="hover:text-grey-dark transition duration-300">
                Commercials
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex gap-4 text-sm">
          <a
            href="/terms"
            className="hover:text-grey-dark transition duration-300"
          >
            Terms & Conditions
          </a>
          <a
            href="/privacy"
            className="hover:text-grey-dark transition duration-300"
          >
            Privacy Policy
          </a>
        </div>
        <div className="flex gap-3">
          <a href="#" className="btn">
            <FaFacebookF />
          </a>
          <a href="#" className="btn">
            <FaTwitter />
          </a>
          <a href="#" className="btn">
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
