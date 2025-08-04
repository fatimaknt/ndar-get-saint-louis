import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, UserIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import logo from '../assets/images/logo.jpeg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Événements', href: '/evenements' },
    { name: 'Expériences', href: '/experiences' },
    { name: 'Hébergements', href: '/hebergements' },
    { name: 'Covoiturage', href: '/covoiturage' },
    { name: 'Immobilier', href: '/immobilier' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ];

  const Logo: React.FC = () => (
    <div className="flex items-center space-x-3">
      <img
        src={logo}
        alt="Ndar Gët Logo"
        className="h-11 w-11 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <span className="text-xl font-bold">
          <span className="text-primary-orange">Ndar</span>
          <span className="text-primary-blue">Gët</span>
        </span>
        <span className="text-xs text-gray-600">Saint-Louis sous un autre angle</span>
      </div>
    </div>
  );

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap ${location.pathname === item.href
                    ? 'text-primary-orange bg-orange-50 shadow-sm'
                    : 'text-gray-700 hover:text-primary-orange hover:bg-orange-50 hover:shadow-sm'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-3">
              <Link to="/login" className="btn-outline text-sm flex items-center space-x-1.5">
                <UserIcon className="w-3.5 h-3.5" />
                <span>Connexion</span>
              </Link>
              <Link to="/register" className="btn-primary text-sm flex items-center space-x-1.5">
                <UserPlusIcon className="w-3.5 h-3.5" />
                <span>S'inscrire</span>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-orange hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-orange"
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${location.pathname === item.href
                ? 'text-primary-orange bg-orange-50'
                : 'text-gray-700 hover:text-primary-orange hover:bg-orange-50'
                }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link to="/login" className="btn-outline text-sm w-full flex items-center justify-center space-x-1.5">
                <UserIcon className="w-3.5 h-3.5" />
                <span>Connexion</span>
              </Link>
              <Link to="/register" className="btn-primary text-sm w-full flex items-center justify-center space-x-1.5">
                <UserPlusIcon className="w-3.5 h-3.5" />
                <span>S'inscrire</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 