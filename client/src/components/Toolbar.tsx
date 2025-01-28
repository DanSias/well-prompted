import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ThemeToggle from "../components/ThemeToggle";

const Toolbar: React.FC = () => {
  const { token, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="px-4 py-3 shadow-md bg-blue-600 text-white dark:bg-sky-900 dark:text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold text-white">Well Prompted</h1>
        <ThemeToggle />
        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          {token ? (
            <button
              onClick={handleLogout}
              className="hover:underline focus:outline-none">
              Logout
            </button>
          ) : (
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
