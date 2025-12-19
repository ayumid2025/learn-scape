import { Link, NavLink } from 'react-router-dom';
import { CatchyButton } from '@/components/custom/CatchyButton';
import { Menu, X, BookOpen, Gamepad2, Star, Shield, Smile } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { to: '/subjects', text: 'Subjects', icon: <BookOpen className="w-5 h-5" /> },
  { to: '/games', text: 'Games & Quizzes', icon: <Gamepad2 className="w-5 h-5" /> },
  { to: '/progress', text: 'My Progress', icon: <Star className="w-5 h-5" /> },
  { to: '/about', text: 'Safety', icon: <Shield className="w-5 h-5" /> },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: '#F5A623',
    fontWeight: '700',
  };

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-lg-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <span className="text-3xl font-heading text-brand-primary">Kidedu Online Education Center</span>
            <Smile className="w-8 h-8 text-brand-secondary" />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                className="flex items-center gap-2 text-lg font-sans font-medium text-brand-dark hover:text-brand-secondary transition-colors"
              >
                {link.icon}
                <span>{link.text}</span>
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <CatchyButton asChild variant="secondary" size="sm">
              <Link to="/portal">Portal</Link>
            </CatchyButton>
            <CatchyButton asChild variant="primary" size="sm">
              <Link to="/profile">My Profile</Link>
            </CatchyButton>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-dark">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white pb-4 absolute top-20 left-0 w-full shadow-xl-soft">
          <nav className="flex flex-col items-center gap-4 pt-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                className="flex items-center gap-3 text-xl font-sans font-medium text-brand-dark hover:text-brand-secondary transition-colors py-2"
              >
                {link.icon}
                <span>{link.text}</span>
              </NavLink>
            ))}
            <div className="flex flex-col gap-4 mt-4 w-full px-8">
               <CatchyButton asChild variant="secondary" className="w-full" onClick={() => setIsOpen(false)}>
                <Link to="/portal">Portal</Link>
              </CatchyButton>
              <CatchyButton asChild className="w-full" onClick={() => setIsOpen(false)}>
                <Link to="/profile">My Profile</Link>
              </CatchyButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;