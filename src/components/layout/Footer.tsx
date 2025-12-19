import { Link } from 'react-router-dom';
import { Smile } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-heading text-brand-primary">ElimuFun</span>
            <Smile className="w-7 h-7 text-brand-secondary" />
          </Link>
          <p className="text-gray-500 font-sans text-center md:text-left">
            © {new Date().getFullYear()} ElimuFun. All rights reserved. <br/>
            Making learning an adventure!
          </p>
          <div className="flex gap-6 font-medium">
            <Link to="/about" className="text-gray-600 hover:text-brand-primary">Safety</Link>
            <Link to="/portal" className="text-gray-600 hover:text-brand-primary">Parents</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;