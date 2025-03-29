import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Stethoscope className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-gray-800">MedApp</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" current={location.pathname === "/"}>
              Home
            </NavLink>
            <NavLink to="/about" current={location.pathname === "/about"}>
              About
            </NavLink>
            <NavLink to="/contact" current={location.pathname === "/contact"}>
              Contact
            </NavLink>
          </div>

          <Link
            to="/book"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, current }) {
  return (
    <Link
      to={to}
      className={`${
        current
          ? 'text-blue-500 font-semibold'
          : 'text-gray-600 hover:text-blue-500'
      } transition-colors`}
    >
      {children}
    </Link>
  );
}

export default Navbar;