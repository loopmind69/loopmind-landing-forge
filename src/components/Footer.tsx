
import { MessageCircle, Linkedin } from 'lucide-react';

const Footer = () => {
  const policyContent = {
    'About Us': 'LoopMind is a cutting-edge AI automation company specializing in intelligent business solutions. We transform how businesses operate through advanced chatbots, voice assistants, and custom automation workflows.',
    'Terms & Conditions': 'By using our services, you agree to our terms. All AI solutions are provided as-is with ongoing support. Custom development projects require signed agreements with specific deliverables and timelines.',
    'Privacy Policy': 'We protect your data with enterprise-grade security. Customer conversations and business data are encrypted and never shared with third parties. AI training uses anonymized data only.',
    'Refund Policy': 'Custom development projects: 50% refund if cancelled within 48 hours of agreement. Subscription services: Pro-rated refunds available within 30 days of cancellation request.',
    'Cancellation Policy': 'Services can be cancelled anytime with 30-day notice. Custom projects in development require completion of current milestone before cancellation takes effect.'
  };

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#', content: policyContent['About Us'] },
        { name: 'Terms & Conditions', href: '#', content: policyContent['Terms & Conditions'] },
        { name: 'Privacy Policy', href: '#', content: policyContent['Privacy Policy'] },
        { name: 'Refund Policy', href: '#', content: policyContent['Refund Policy'] },
        { name: 'Cancellation Policy', href: '#', content: policyContent['Cancellation Policy'] }
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
                href="https://www.linkedin.com/company/loopmind" 
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
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors group"
                    title={link.content}
                  >
                    {link.name}
                  </a>
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
