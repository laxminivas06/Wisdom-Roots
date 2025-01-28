import { Menu, X, Home, Info, Code, Users, Phone, UserCheck, Award, Target } from 'lucide-react';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: 'main', icon: Home },
  { name: 'Mentors', href: 'mentors', icon: UserCheck },
  { name: 'Team', href: 'team', icon: Users },
  { name: 'Achievements', href: 'achievements', icon: Award },
  { name: 'Plan of Action', href: 'planOfAction', icon: Target },
  { name: 'Contact', href: 'main', icon: Phone },
];

export function Navigation({ setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigationClick = (href) => {
    setActiveSection(href);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 p-2 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://i.postimg.cc/3NZmYVm6/temp-Imagenlk-Xy0.avif"
            alt="Wisdom Roots Logo"
            className="w-16 h-auto"
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigationClick(item.href)}
                className="text-white font-semibold hover:text-gray-200 transition duration-200 flex items-center"
              >
                <item.icon className="w-5 h-5 mr-2" />
                {item.name}
              </button>
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
    </nav>
  );
}
