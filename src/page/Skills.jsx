import { BiLogoDjango } from "react-icons/bi";
import {
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAngular,
  FaPython,
  FaDatabase,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      name: "PHP",
      level: "95%",
      icon: <FaPhp className="w-12 h-12 text-blue-600" />,
    },
    {
      name: "HTML5",
      level: "98%",
      icon: <FaHtml5 className="w-12 h-12 text-orange-500" />,
    },
    {
      name: "CSS3",
      level: "98%",
      icon: <FaCss3Alt className="w-12 h-12 text-blue-500" />,
    },
    {
      name: "JavaScript",
      level: "98%",
      icon: <FaJs className="w-12 h-12 text-yellow-500" />,
    },
    {
      name: "Angular",
      level: "80%",
      icon: <FaAngular className="w-12 h-12 text-red-600" />,
    },
    {
      name: "Python",
      level: "75%",
      icon: <FaPython className="w-12 h-12 text-green-500" />,
    },
    {
      name: "MySQL",
      level: "90%",
      icon: <FaDatabase className="w-12 h-12 text-blue-800" />,
    },
    {
      name: "Django",
      level: "80%",
      icon: <BiLogoDjango className="w-12 h-12 text-green-600" />,
    },
  ];

  return (
    <section className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto">
        <div className="relative mb-10 text-center">
          <h2 className="text-4xl font-extrabold text-yellow-500 mb-6">
            Skills
          </h2>
          <p className="text-lg text-gray-400">
            Just like the Duden river, my skills flow seamlessly, delivering
            results with precision and consistency.
          </p>
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-bold opacity-10 text-gray-200">
            Skills
          </h1>
        </div>

        {/* Skills Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 border border-gray-700 rounded-lg shadow-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300"
            >
              <div className="mb-4">{skill.icon}</div>
              <p className="text-xl font-semibold text-yellow-500 mb-2">
                {skill.name}
              </p>
              <p className="text-sm text-gray-400">
                Proficiency: {skill.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
