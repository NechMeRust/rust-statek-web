
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/af7e19d1-cae1-4890-809e-e0e1c2c10b3a.png" 
            alt="Nech Mě Růst Logo" 
            className="h-12" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-forest-800 hover:text-forest-600 font-medium">
            Úvod
          </Link>
          <Link to="/o-nas" className="text-forest-800 hover:text-forest-600 font-medium">
            O Nás
          </Link>
          <Link to="/cinnosti" className="text-forest-800 hover:text-forest-600 font-medium">
            Naše Činnosti
          </Link>
          <Link to="/eshop" className="text-forest-800 hover:text-forest-600 font-medium">
            E-shop
          </Link>
          <Link to="/kontakt" className="text-forest-800 hover:text-forest-600 font-medium">
            Kontakt
          </Link>
          <Link to="/podporte-nas">
            <Button className="bg-forest-600 hover:bg-forest-700 text-white">
              Podpořte nás
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-forest-800 hover:text-forest-600 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-forest-100 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-4 py-4">
              <Link
                to="/"
                className="text-forest-800 hover:text-forest-600 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Úvod
              </Link>
              <Link
                to="/o-nas"
                className="text-forest-800 hover:text-forest-600 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                O Nás
              </Link>
              <Link
                to="/cinnosti"
                className="text-forest-800 hover:text-forest-600 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Naše Činnosti
              </Link>
              <Link
                to="/eshop"
                className="text-forest-800 hover:text-forest-600 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                E-shop
              </Link>
              <Link
                to="/kontakt"
                className="text-forest-800 hover:text-forest-600 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </Link>
              <Link
                to="/podporte-nas"
                onClick={() => setIsOpen(false)}
              >
                <Button className="bg-forest-600 hover:bg-forest-700 text-white w-full">
                  Podpořte nás
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

