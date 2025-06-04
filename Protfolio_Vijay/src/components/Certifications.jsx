import React, { useEffect, useState } from "react";
import certificateData from "../datasets/CertificateDataSet";

export default function Certifications() {
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      certificateData.forEach((_, index) => {
        setFlippedCards((prev) => {
          const newFlips = [...prev];
          newFlips[index] = true;
          return newFlips;
        });

        setTimeout(() => {
          setFlippedCards((prev) => {
            const newFlips = [...prev];
            newFlips[index] = false;
            return newFlips;
          });
        }, 900);
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen-xl w-full mx-auto px-4 py-14 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-300 font-mono">
        My Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {certificateData.map((cert, index) => (
          <div key={cert.id} className="relative perspective">
            <div
              className={`relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d ${
                flippedCards[index] ? "rotate-y-180" : ""
              }`}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-black to-stone-700 rounded-3xl shadow-lg shadow-yellow-200 border p-6 flex flex-col justify-center items-center">
                <img
                  src={`assets/${cert.image}`}
                  alt={cert.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-yellow-300 text-center">
                  {cert.name}
                </h3>
                <p className="text-sm text-indigo-400 text-center">
                  {cert.issuedBy} – {cert.issuedDate}
                </p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-cyan-700 hover:bg-cyan-500 text-white font-medium py-1 px-4 rounded-lg transition duration-300"
                  >
                    View Certificate
                  </a>
                )}
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-black rounded-full flex items-center justify-center border border-cyan-700 shadow-inner shadow-yellow-200">
                <img
                  src={`/assets/${cert.image}`}
                  alt="Back"
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
