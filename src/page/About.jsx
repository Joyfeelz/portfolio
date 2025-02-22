import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-20 " id="about">
      <div className="container mx-auto px-6">
        <div className="">

          {/* Information Section */}
          <div className="text-center lg:text-left space-y-6 w-full ">
            <div className="relative text-center mb-10">
              <h2 className="text-4xl font-extrabold text-yellow-500 mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Highly motivated and self-driven full stack developer with
                expertise in both front-end and back-end development. Trained at
                Goggle Info Tech in front-end web development and self-taught in
                back-end development.
              </p>
              <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-bold opacity-10 text-gray-200">
                About
              </h1>
            </div>

            {/* Contact and Links */}
            <div className=" flex flex-col lg:flex-row justify-evenly items-center gap-10 lg:gap-20 ">
              <div className="w-72 h-72 rounded-full overflow-hidden shadow-xl mb-8 lg:mb-0 lg:w-96 lg:h-96">
                <img
                  src="/assets/joy1.jpg"
                  alt="Jimi Talabi Joy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 text-lg text-gray-200">
                <p>
                  <strong>Name:</strong> Jimi Talabi Joy
                </p>
                <p>
                  <strong>Profession:</strong> Full Stack Developer
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <Link
                    to="mailto:joyfeelz911@gmail.com"
                    className="text-yellow-500"
                  >
                    joyfeelz911@gmail.com
                  </Link>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <Link to="tel:+234 9155269162" className="text-yellow-500">
                    09155269162
                  </Link>
                </p>
                <p>
                  <strong>LinkedIn:</strong>{" "}
                  <Link
                    to="https://www.linkedin.com/in/joy-feel-0254b7227/"
                    rel="noopener noreferrer"
                    className="text-yellow-500"
                  >
                    LinkedIn Profile
                  </Link>
                </p>
                <p>
                  <strong>GitHub:</strong>{" "}
                  <Link
                    to="https://github.com/Joyfeelz"
                    rel="noopener noreferrer"
                    className="text-yellow-500"
                  >
                    GitHub Profile
                  </Link>
                </p>
                {/* Education and Projects */}
                <div className="space-y-4 text-lg text-gray-200 mt-6">
                  <h3 className="text-2xl font-bold text-yellow-500">
                    Education and Training
                  </h3>
                  <p>
                    <strong>Goggle Info Tech:</strong> Front-end Web
                    Development, <em>Oct 4, 2024</em>
                  </p>
                  <p>
                    <strong>Self-taught:</strong> Back-end Web Development
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-lg text-gray-200 mt-10">
              <h3 className="text-2xl font-bold text-yellow-500 text-center">
                Projects
              </h3>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Personal Website:</strong> Developed a personal
                  website using HTML, CSS, JavaScript, and Angular to showcase
                  my skills and experience. Utilized PHP and Python as
                  programming languages and MySQL as the database management
                  system.
                </li>
                <li>
                  <strong>E-commerce Platform:</strong> Contributed to the
                  development of a scalable e-commerce platform using HTML, CSS,
                  JavaScript, and Angular. Employed PHP and Python programming
                  languages to enhance platform functionality. Designed and
                  implemented a robust database schema using MySQL.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Download CV Button */}
        {/* <div className="text-center mt-8">
          <a
            href="/nresume.pdf"
            download="jimi_talabi_joy_resume.pdf"
            className="bg-yellow-500 text-black py-3 px-8 rounded-lg hover:bg-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Download CV
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default About;
