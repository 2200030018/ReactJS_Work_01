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
        <div className="bg-gradient-to-b from-cyan-900 w-96 min-h-screen rounded-tr-full flex flex-col">
            <header className="bg-gradient-to-b from-stone-950 to-cyan-900
            w-72 flex-grow rounded-tr-full flex flex-col items-center shadow-lg">
                <h1 className="text-2xl font-bold text-pink-300 pt-48 tracking-wider font-orbitron">{`<Vijay Mandela/>`}</h1>
                <nav className="mt-16 w-full">
                    <ul className="flex flex-col space-y-4 text-lg px-6">
                        {navItems.map((item) => {
                            const isActive = location.pathname === `/${item.to}`;
                            return (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        className={`flex items-center gap-4 px-4 py-2 rounded-xl transition-all duration-300 
                                        ${isActive
                                                ? 'bg-pink-200 text-black font-semibold shadow-md'
                                                : 'text-white hover:bg-pink-100 hover:text-black hover:shadow-md'
                                            }`}
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                        <span className="tracking-wide">{item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
        </div>
    );
}
