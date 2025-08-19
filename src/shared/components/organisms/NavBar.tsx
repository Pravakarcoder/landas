import React, { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardPage from "@/pages/DashboardPage";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "SS", href: "/products/ss" },
    { label: "FW", href: "/products/fw" },
    { label: "PANTS", href: "/products/pants" },
    { label: "T-Shirt", href: "/products/tshirt" },
    { label: "SALE", href: "/products/sale" },
    { label: "COLLECTION", href: "/products/collection" },
    { label: "COMMUNITY", href: "/products/community" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black backdrop-blur-md shadow-2xl text-white px-4 md:px-6 py-4 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-yellow-400 text-xl md:text-2xl font-bold">
          LANDAS
        </Link>

        {/* Desktop Navigation - Hidden on mobile and tablet */}
        <nav className="hidden xl:flex space-x-6 2xl:space-x-14">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="hover:text-yellow-400 transition-colors duration-200 font-medium text-sm 2xl:text-base"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Side - Icons and Login */}
        <div className="hidden xl:flex items-center space-x-3 lg:space-x-4">
          <button className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
            <Search className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
            <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
            <Link to={"/dashboard"}>
              <User className="w-4 h-4 lg:w-5 lg:h-5" />
            </Link>
          </button>
          <Link to="/login" className="hover:text-primary transition-colors">
            <span className="text-sm">로그인</span>
          </Link>
        </div>

        {/* Mobile/Tablet Right Side - Icons and Menu */}
        <div className="flex xl:hidden items-center space-x-2">
          <button className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed top-16 right-0 w-64 bg-black/95 border-l border-gray-700 h-screen z-50 transform transition-transform duration-300 ease-in-out">
          <nav className="flex flex-col space-y-3 mt-6 px-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="hover:text-yellow-400 transition-colors duration-200 font-medium py-3 text-left border-b border-gray-800 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Login Section */}
          <div className="mt-6 pt-6 border-t border-gray-700 flex items-center justify-start space-x-4 px-6">
            <button className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>
            <Link to="/login" className="hover:text-primary transition-colors">
              {" "}
              <span className="text-sm">로그인</span>
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
