
import { useState } from 'react';
import { Menu, X, MessageCircle, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/43998ece-6ec9-4e4a-9898-e140a72c496b.png" 
              alt="LoopMind"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold gradient-text">LoopMind</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#demos" className="text-gray-300 hover:text-white transition-colors">
              Demos
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#coming-soon" className="text-gray-300 hover:text-white transition-colors">
              What's Coming
            </a>
            <a 
              href="https://www.linkedin.com/company/loopmind" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://wa.me/+917905538458" 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-gradient text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Contact</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#demos" className="text-gray-300 hover:text-white transition-colors">
                Demos
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#coming-soon" className="text-gray-300 hover:text-white transition-colors">
                What's Coming
              </a>
              <a 
                href="https://www.linkedin.com/company/loopmind" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://wa.me/+917905538458" 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-gradient text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:opacity-90 transition-opacity w-fit"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Contact</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
