import skillsData from "../datasets/SkillDataSet";
import devops from "../assets/skill_images/devops.png";
import React from "react";

export default function Skills() {
  return (
    <div className="min-h-screen px-8 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-300 font-mono">
        My Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="bg-gray-600 rounded-2xl shadow-md shadow-cyan-900 hover:shadow-lg hover:shadow-cyan-600 p-6 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={`src/assets/skill_images/${skill.image}`}
              alt={skill.name}
              className="w-20 h-16 mb-4 block mx-auto"
            />
            <h3 className="text-xl font-semibold text-yellow-300">{skill.name}</h3>
            <p className="text-sm text-cyan-400">{skill.level}</p>
            <p className="text-gray-300 mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
