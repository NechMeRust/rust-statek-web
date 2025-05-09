
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
          ? 'bg-forest-900/95 backdrop-blur-sm shadow-sm py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/0d0d4125-41a5-4ed5-9cd0-94943f191a7f.png" 
            alt="Nech Mě Růst Logo" 
            className="h-12" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-amber-200 hover:text-amber-100 font-medium">
            Úvod
          </Link>
          <Link to="/o-nas" className="text-amber-200 hover:text-amber-100 font-medium">
            O Nás
          </Link>
          <Link to="/cinnosti" className="text-amber-200 hover:text-amber-100 font-medium">
            Naše Činnosti
          </Link>
          <Link to="/eshop" className="text-amber-200 hover:text-amber-100 font-medium">
            E-shop
          </Link>
          <Link to="/kontakt" className="text-amber-200 hover:text-amber-100 font-medium">
            Kontakt
          </Link>
          <Link to="/podporte-nas">
            <Button className="bg-amber-300 hover:bg-amber-400 text-forest-900">
              Podpořte nás
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-amber-200 hover:text-amber-100 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-forest-900 border-t border-amber-900/20 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-4 py-4">
              <Link
                to="/"
                className="text-amber-200 hover:text-amber-100 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Úvod
              </Link>
              <Link
                to="/o-nas"
                className="text-amber-200 hover:text-amber-100 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                O Nás
              </Link>
              <Link
                to="/cinnosti"
                className="text-amber-200 hover:text-amber-100 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Naše Činnosti
              </Link>
              <Link
                to="/eshop"
                className="text-amber-200 hover:text-amber-100 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                E-shop
              </Link>
              <Link
                to="/kontakt"
                className="text-amber-200 hover:text-amber-100 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </Link>
              <Link
                to="/podporte-nas"
                onClick={() => setIsOpen(false)}
              >
                <Button className="bg-amber-300 hover:bg-amber-400 text-forest-900 w-full">
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
