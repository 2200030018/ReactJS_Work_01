import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import myImage from '../assets/My_id_photo.jpeg';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-16  text-white min-h-screen">
      {/* Left Content */}
      <div className="md:w-1/2 text-left space-y-6">
        <h1 className="text-5xl font-bold text-gray-200 font-serif">PROFILE</h1>

        <h2 className="text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-yellow-600">
          <span className='text-red-600 font-serif uppercase'>Mandela</span> Vijay Sai Siva Manikanta
        </h2>

        <p className="text-lg text-gray-300 font-light leading-relaxed">
          BTech Computer Science and Engineering<br />
          Specialized in DevOps and Software Modeling
        </p>

        <p className="text-sm text-gray-400 italic">
          📍 Budampadu, Guntur, Andhra Pradesh - 522017
        </p>

        {/* Contact Section */}
        <div className="pt-6 space-y-3 text-sm text-gray-300">
          <div className="flex items-center gap-3 hover:text-teal-300 transition duration-300">
            <FaPhone className="text-indigo-400" />
            <span className="font-medium">6300361487</span>
          </div>
          <div className="flex items-center gap-3 hover:text-teal-300 transition duration-300">
            <FaEnvelope className="text-indigo-400" />
            <a href="mailto:vijaymandela10@gmail.com" className="hover:underline">
              vijaymandela10@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 hover:text-teal-300 transition duration-300">
            <FaLinkedin className="text-indigo-400" />
            <a href="https://linkedin.com/in/vijaymandela" target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/vijaymandela
            </a>
          </div>
          <div className="flex items-center gap-3 hover:text-teal-300 transition duration-300">
            <FaGithub className="text-indigo-400" />
            <a href="https://github.com/2200030018" target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com/2200030018
            </a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
        <div className="relative w-96 h-96 rounded-full border-4 border-teal-400 shadow-[0_0_30px_rgba(236,72,153,0.6)] animate-pulse-glow">
          <img
            src={myImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
          
        </div>
      </div>
    </div>
  );
}
