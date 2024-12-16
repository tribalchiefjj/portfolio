import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <p className="text-lg mb-2">Made with ❤️ by Jafar</p>
        {/* Copyright Section */}
        <p className="text-sm mb-4 md:mb-0">
          © {currentYear} My Portfolio. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {/* GitHub */}
          <a
            href="https://github.com/tribalchiefjj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/_jjafar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+254728738541"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}
