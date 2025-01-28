import { Menu, X, Home, Info, Code, Users, Phone, UserCheck, Eye, Award,Target  } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: Info },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Mentors', href: '#mentors', icon: UserCheck },
  { name: 'Team', href: '#team', icon: Users },
  { name: 'Vision', href: '#vision', icon: Eye },
  { name: 'Achievements', href: '#achievements', icon: Award },
  { name: 'Plan of Action', href: '#plan-of-action', icon: Target },
  { name: 'Contact', href: '#contact', icon: Phone },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 p-2 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <img
            src="https://i.postimg.cc/c4sQGJpX/temp-Image-CGe4jl.avif"
            alt="Wisdom Roots Logo"
            className="w-16 h-auto"
            style={{
              background: 'none', // Remove any background color for the logo
              WebkitMaskImage: 'none', // Ensure no unwanted masking
            }}
          />
        </div>

        {/* Right Section: Navigation Links and Menu Button */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white font-semibold hover:text-gray-200 transition duration-200 flex items-center"
              >
                <item.icon className="w-5 h-5 mr-2" />
                {item.name}
              </a>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none md:hidden"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 p-4"
          >
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white font-semibold hover:text-gray-200 transition duration-200 flex items-center"
                >
                  <item.icon className="w-5 h-5 mr-2" />
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
