import { FaHome, FaUser, FaTrophy, FaTools } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { to: '', label: 'Home', icon: <FaHome /> },
    { to: 'about', label: 'About', icon: <FaUser /> },
    { to: 'skills', label: 'Skills', icon: <FaTools /> },
    { to: 'certifications', label: 'Certifications', icon: <FaTrophy /> },
  ];

  return (
    <div
  className="
    fixed top-0 left-0 right-0 sm:left-0 sm:top-0 sm:bottom-0
    bg-gradient-to-b from-green-800 to-black
    h-16 sm:h-full sm:w-72
    flex items-center sm:items-start
    justify-between sm:justify-start
    px-4 sm:px-6
    sm:flex-col
    z-50
    shadow-none sm:shadow-[4px_0_10px_-2px_rgba(0,0,0,0.4)]
  "
>


      {/* Title */}
      <h1 className="text-lg sm:text-2xl font-extrabold text-yellow-300 tracking-wider font-orbitron whitespace-nowrap">
        {'<Vijay Mandela/>'}
      </h1>

      {/* Nav items */}
      <nav className="w-full sm:mt-10">
        <ul className="flex flex-row sm:flex-col justify-around sm:justify-start sm:space-y-6 text-sm sm:text-base">
          {navItems.map((item) => {
            const isActive = location.pathname === `/${item.to}`;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`flex items-center gap-2 sm:gap-3 px-2 py-2 rounded-md transition-all duration-300
                    ${
                      isActive
                        ? 'bg-pink-200 text-black font-semibold shadow-md'
                        : 'text-white hover:bg-pink-100 hover:text-black'
                    }
                  `}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
