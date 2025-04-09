import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="p-4">
      <ul className="flex justify-center space-x-6 md:space-x-6 flex-wrap gap-y-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-2 py-2 md:px-4 rounded-lg text-white transition-all duration-300 whitespace-nowrap ${
                isActive
                  ? 'bg-blue-600 bg-opacity-30'
                  : 'hover:bg-blue-600 hover:bg-opacity-20'
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/weather"
            className={({ isActive }) =>
              `px-2 py-2 md:px-4 rounded-lg text-white transition-all duration-300 whitespace-nowrap ${
                isActive
                  ? 'bg-blue-600 bg-opacity-30'
                  : 'hover:bg-blue-600 hover:bg-opacity-20'
              }`
            }
          >
            Current Weather
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/forecast"
            className={({ isActive }) =>
              `px-2 py-2 md:px-4 rounded-lg text-white transition-all duration-300 whitespace-nowrap ${
                isActive
                  ? 'bg-blue-600 bg-opacity-30'
                  : 'hover:bg-blue-600 hover:bg-opacity-20'
              }`
            }
          >
            Forecast
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
