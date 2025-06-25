
import { MessageCircle, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Refund Policy', href: '/refund' },
        { name: 'Cancellation Policy', href: '/cancellation' }
      ]
    }
  ];

  return (
    <footer className="relative py-16 border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/43998ece-6ec9-4e4a-9898-e140a72c496b.png" 
                alt="LoopMind"
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold gradient-text">LoopMind</span>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              AI automation solutions that transform how businesses operate. 
              Welcome to the future of intelligent automation.
            </p>

            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/company/107899358" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              
              <a 
                href="https://wa.me/+917905538458" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full theme-gradient hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks[0].links.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors group"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <a 
                href="https://wa.me/+917905538458" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 theme-gradient text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat on WhatsApp</span>
              </a>
              
              <p className="text-gray-400 text-sm">
                Ready to automate your business? Let's talk about your AI needs.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} LoopMind. All rights reserved. 
            <span className="gradient-text ml-2">Welcome to the Loop.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
