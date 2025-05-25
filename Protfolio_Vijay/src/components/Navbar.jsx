import { FaHome, FaUser, FaTrophy } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="bg-gradient-to-b from-cyan-900 w-96 min-h-screen rounded-tr-full flex flex-col">
        <header className="bg-gradient-to-b from-stone-950 to-cyan-900
 w-72 min-h-screen rounded-tr-full flex flex-col items-center shadow-lg">
            <h1 className="text-2xl font-bold text-yellow-50 font-mono pt-36 tracking-wide">{`<Vijay Mandela/>`}</h1>
            <nav className="mt-16 w-full">
                <ul className="flex flex-col space-y-6 text-white text-lg px-8">
                    <li className="flex items-center gap-3 hover:text-yellow-300 transition-all duration-300">
                        <FaHome /> <Link to="">Home</Link>
                    </li>
                    <li className="flex items-center gap-3 hover:text-yellow-300 transition-all duration-300">
                        <FaUser /> <Link to="about">About</Link>
                    </li>
                    <li className="flex items-center gap-3 hover:text-yellow-300 transition-all duration-300">
                        <FaTrophy /> Achievements
                    </li>
                </ul>
            </nav>
        </header>
        </div>
    );
}
