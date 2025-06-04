import myImage1 from '../importa_images/my_image_jaket.jpg';
import { FaMapMarkerAlt, FaBook, FaUserTie } from 'react-icons/fa';

export default function About() {
  return (
    <div className="max-w-screen-xl w-full mx-auto px-4">
      <div className="min-h-screen text-white py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-yellow-300 font-serif">ABOUT ME</h1>

          <h2 className="text-3xl font-bold uppercase text-pink-100 tracking-wide">
            Mandela Vijay Sai Siva Manikanta
          </h2>

          <p className="italic text-gray-400">
            Preferred name: <span className="text-indigo-300">Vijay Mandela</span> | Nickname: <span className="text-indigo-300">Vijay</span>
          </p>

          <div className="flex items-center gap-2 text-gray-300">
            <FaMapMarkerAlt className="text-indigo-500" />
            Budampadu, Guntur, Andhra Pradesh – 522017
          </div>

          <p className="text-lg text-gray-200">
            I'm currently pursuing <span className="text-indigo-300 font-semibold">BTech in Computer Science and Engineering</span> with a specialization in <span className="text-indigo-300 font-semibold">DevOps and Software Modeling</span> at KL University.
          </p>

          <p className="text-lg text-gray-200">
            Along with DevOps, I'm skilled in <span className="text-indigo-300 font-semibold">Full Stack Development</span> using technologies like <span className="text-indigo-300">React.js</span>, <span className="text-indigo-300">Next.js</span>, <span className="text-indigo-300">Spring Boot</span>, and <span className="text-indigo-300">Tailwind CSS</span>.
          </p>

          <p className="text-lg text-gray-200">
            I’m also certified as an <span className="text-green-400 font-semibold">AWS Cloud Practitioner</span> and <span className="text-green-400 font-semibold">AWS Developer</span>, with a strong foundation in cloud technologies.
          </p>

          {/* Skill Set */}
          <div className="pt-4">
            <h3 className="text-2xl font-bold text-indigo-400">Skill Set</h3>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>DevOps</li>
              <li>AWS - Cloud</li>
              <li>Full Stack Development</li>
            </ul>
          </div>

          {/* Interests */}
          <div className="pt-4">
            <h3 className="text-2xl font-bold text-indigo-400">Interests</h3>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li className="flex items-center gap-2"><FaBook className="text-indigo-500" />Reading books</li>
              <li className="flex items-center gap-2"><FaUserTie className="text-indigo-500" />Human Psychology & Business</li>
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <img
            src={myImage1}
            alt="Vijay Profile"
            className="w-72 h-96 object-cover rounded-3xl shadow-lg shadow-yellow-200 hover:shadow-yellow-200 hover:shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
