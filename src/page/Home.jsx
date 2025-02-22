import React from "react";
import { Link } from "react-router-dom";
import {
  FaAngular,
  FaAws,
  FaDatabase,
  FaGit,
  FaJava,
  FaNode,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { SiMysql, SiSpringboot } from "react-icons/si";
import { BiLogoDjango } from "react-icons/bi";

const Home = () => {
  return (
    <div className="container mx-auto">
      <section className="flex flex-col w-full md:flex-row justify-evenly py-16 mx-auto items-center text-center md:text-left bg-black ">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            I'm Jimi Talabi Joy
          </h1>
          <p className="text-xl mt-4 opacity-80">Fullstack Developer</p>
          <div className="mt-6 space-x-4">
            <button className="bg-yellow-500 text-black py-2 px-6 rounded-lg transform hover:scale-105 transition-all duration-300">
              Hire Me
            </button>
            <Link
              to="./projects"
              className="border border-yellow-500 py-2 px-6 rounded-lg text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              My Works
            </Link>
          </div>
        </div>
        <div className="mt-6 md:mt-0 flex justify-center">
          <img
            src="/assets/joy.jpg"
            alt="Jimi Talabi Joy"
            className="rounded-full shadow-2xl w-80 h-80 object-cover border-4 border-yellow-500"
          />
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 text-center bg-[#131313] ">
        <h2 className="text-3xl font-semibold text-yellow-500">About Me</h2>
        <p className="text-lg mt-4 max-w-3xl mx-auto opacity-80">
          I'm a passionate Fullstack Developer with a focus on building scalable
          and efficient web applications. I specialize in JavaScript, React,
          Node.js, and more. I thrive in collaborative environments and am
          always looking to grow and learn new technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500">Skills</h2>
          <div className="flex flex-wrap justify-center">
            <div className="m-4">
              <FaReact size={40} className="text-blue-500 mx-auto" />
              <p className="mt-2">React</p>
            </div>
            <div className="m-4">
              <FaNode size={40} className="text-green-500 mx-auto" />
              <p className="mt-2">Node.js</p>
            </div>
            <div className="m-4">
              <FaPhp size={40} className="text-red-500 mx-auto" />
              <p className="mt-2">Java</p>
            </div>
            <div className="m-4">
              <FaDatabase size={40} className="text-gray-700 mx-auto" />
              <p className="mt-2">MongoDB</p>
            </div>
            <div className="m-4">
              <SiMysql size={40} className="text-gray-700 mx-auto" />
              <p className="mt-2">MySQL</p>
            </div>
            <div className="m-4">
              <FaGit size={40} className="text-orange-500 mx-auto" />
              <p className="mt-2">Git</p>
            </div>
            <div className="m-4">
              <FaAngular size={40} className="text-yellow-500 mx-auto" />
              <p className="mt-2">Angular</p>
            </div>
            <div className="m-4">
              <BiLogoDjango size={40} className="text-green-500 mx-auto" />
              <p className="mt-2">Django</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 text-center  ">
        <h2 className="text-3xl font-semibold text-yellow-500">My Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow-2xl bg-black hover:bg-[#131313] transition-all duration-300">
            <h3 className="text-2xl font-semibold">Web Development</h3>
            <p className="mt-4">
              I create responsive, modern, and user-friendly websites using the
              latest technologies, ensuring a seamless experience across
              devices.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-2xl bg-black hover:bg-[#131313] transition-all duration-300">
            <h3 className="text-2xl font-semibold">App Development</h3>
            <p className="mt-4">
              I build cross-platform mobile applications for both iOS and
              Android, ensuring optimal performance and usability.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-2xl bg-black hover:bg-[#131313] transition-all duration-300">
            <h3 className="text-2xl font-semibold">Consultation</h3>
            <p className="mt-4">
              I offer consultation services to help businesses solve technical
              challenges and improve their web and app strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 text-center bg-black ">
        <h2 className="text-3xl font-semibold text-yellow-500">
          What Clients Say
        </h2>
        <div className="mt-8 space-y-8">
          {/* First Client Testimonial */}
          <div className="p-8 rounded-lg shadow-2xl bg-[#131313]">
            <p className="text-xl italic">
              "Jimi is an exceptional developer. Her attention to detail and
              ability to deliver results on time are remarkable. I highly
              recommend her for any full-stack development project."
            </p>
            <p className="mt-4 font-semibold">Sarah T., CEO</p>
          </div>

          {/* Second Client Testimonial */}
          <div className="p-8 rounded-lg shadow-2xl bg-[#131313]">
            <p className="text-xl italic">
              "I had the pleasure of working with Jimi on a recent project. She
              demonstrated excellent problem-solving skills and her work ethic
              is unmatched."
            </p>
            <p className="mt-4 font-semibold">Mark L., Product Manager</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 text-center ">
        <h2 className="text-3xl font-semibold text-yellow-500">Projects</h2>
        <p className="text-xl mt-4 max-w-3xl mx-auto opacity-80">
          Here are some of the projects I've worked on. Each of them showcases
          my skills in full-stack development, from frontend design to backend
          integration.
        </p>
        <div className="mt-8 space-x-4">
          <Link
            to="./projects"
            className="border border-yellow-500 py-2 px-6 rounded text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 text-center bg-[#131313] ">
        <h2 className="text-3xl font-semibold text-yellow-500">Get in Touch</h2>
        <p className="text-xl mt-4 max-w-3xl mx-auto opacity-80">
          Interested in collaborating on a project or want to learn more about
          what I do? Feel free to reach out.
        </p>
        <div className="mt-6">
          <a
            href="mailto:joyfeelz911@gmail.com"
            className="bg-yellow-500 text-black py-2 px-6 rounded-lg transform hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
