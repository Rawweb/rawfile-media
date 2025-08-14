import { GiLaserSparks } from 'react-icons/gi';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const marqueeItems = [
    'product photography',
    'wedding photography',
    'landscape photography',
    'portrait photography',
    'event photography',
    'commercial photography',
    'landscape photography',
    'wedding photography',
    'landscape photography',
    'portrait photography',
    'event photography',
    'commercial photography',
    'product photography',
  ];

  return (
    <footer className="relative overflow-hidden bg-dark-dark text-grey-light">
      {/* Moving Marquee */}

      {/* Big Background Heading */}
      <div className="container">
        <h1 className="text-[120px] md:text-[180px] lg:text-[230px] uppercase text-dark-midLight text-right">
          rawfile
        </h1>
      </div>

      <div className="overflow-hidden text-grey-midLight bg-dark-midDark border border-dark-midLight border-l-0 border-r-0">
        <div className="flex gap-6 animate-marquee whitespace-nowrap py-4">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <GiLaserSparks className="text-purple-midLight size-5" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className='border-b border-dark-midLight'>
       <div className="container py-10 border-r border-l border-dark-midLight">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <h2 className="text-3xl font-bold text-white">
            LET’S <br /> WORK TOGETHER
          </h2>
          <button className="flex items-center gap-2 bg-purple-dark hover:bg-purple-midDark text-white px-6 py-3 rounded-full transition duration-300 hover:shadow-[0_0_20px_rgba(174,161,247,0.9)] animate-purple-glow">
            <span>LET’S</span> <FiArrowUpRight />
          </button>
        </div>
      </div> 
      </div>
      

      {/* Footer Links */}
      <div className='border-b border-dark-midLight'>
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
          <a
            href="#"
            className="p-2 bg-dark-midLight rounded-full hover:bg-purple-midDark transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="p-2 bg-dark-midLight rounded-full hover:bg-purple-midDark transition"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="p-2 bg-dark-midLight rounded-full hover:bg-purple-midDark transition"
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
}
