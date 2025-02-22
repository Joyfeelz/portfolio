import React from "react";

const Service = () => {
  return (
    <div className="service-container p-8 space-y-12">
      {/* Intro Section */}
      <section className="intro text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-yellow-500">Full Stack Development Services</h1>
        <p className="text-lg leading-relaxed">
          As a seasoned Full Stack Developer, I offer a complete range of web
          development services, ensuring that your digital product is not only
          visually engaging but also highly functional, scalable, and secure.
          Whether you need a sophisticated web application, a responsive
          website, or custom software solutions, I am here to bring your ideas
          to life with cutting-edge technology.
        </p>
      </section>

      {/* What I Do Section */}
      <section className="what-i-do max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-yellow-500">What I Do</h2>
        <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Front-End Development */}
          <div className="service p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-yellow-500">Front-End Development</h3>
            <p className="mb-4">
              Creating a seamless, responsive, and visually engaging user
              experience is my priority. I design and develop intuitive
              front-end interfaces using the latest technologies:
            </p>
            <ul className="list-disc pl-5 ">
              <li>HTML5, CSS3, JavaScript</li>
              <li>React.js, Angular, Vue.js</li>
              <li>Bootstrap, Tailwind CSS</li>
              <li>Responsive Web Design (Mobile-first approach)</li>
            </ul>
          </div>

          {/* Back-End Development */}
          <div className="service p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-yellow-500">Back-End Development</h3>
            <p className="mb-4">
              I build robust, scalable, and secure server-side solutions to
              ensure your application functions efficiently:
            </p>
            <ul className="list-disc pl-5 ">
              <li>Node.js, Express.js</li>
              <li>Python, Django, Flask</li>
              <li>Ruby on Rails, Laravel</li>
              <li>Database Management (MySQL, PostgreSQL, MongoDB)</li>
              <li>RESTful APIs, GraphQL</li>
            </ul>
          </div>

          {/* Full Stack Development */}
          <div className="service p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-yellow-500">Full Stack Development</h3>
            <p className="mb-4">
              Bringing everything together, I integrate front-end and back-end
              to create seamless web applications:
            </p>
            <ul className="list-disc pl-5 ">
              <li>End-to-End Application Development</li>
              <li>Server-Side Logic Integration</li>
              <li>API Development & Integration</li>
              <li>Authentication and Authorization Systems</li>
              <li>Real-time Features (Socket.io, WebSockets)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="why-choose max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-yellow-500">Why Choose Me?</h2>
        <ul className="list-inside list-disc space-y-3">
          <li>
            <strong>Comprehensive Solutions:</strong> From wireframing and design
            to coding and deployment, I offer a full spectrum of services to
            turn your concept into a fully functional application.
          </li>
          <li>
            <strong>Modern Technologies:</strong> I stay up-to-date with the
            latest development trends and technologies to ensure your
            application is built using industry best practices.
          </li>
          <li>
            <strong>Scalable & Maintainable Code:</strong> I write clean, modular,
            and maintainable code that is scalable for future enhancements or
            changes.
          </li>
          <li>
            <strong>User-Centric Design:</strong> I ensure that the user
            experience is at the forefront, whether you’re building a
            consumer-facing product or an enterprise-level application.
          </li>
          <li>
            <strong>Timely Delivery:</strong> I am committed to meeting deadlines
            and delivering your project on time, with constant updates and
            feedback loops throughout the process.
          </li>
          <li>
            <strong>Responsive Support:</strong> I provide ongoing support to
            ensure your application performs optimally even after launch.
          </li>
        </ul>
      </section>

      {/* My Process Section */}
      <section className="my-process max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-yellow-500">My Process</h2>
        <ol className="list-decimal pl-6 space-y-4 ">
          <li>
            <strong>Discovery & Planning:</strong> I take the time to understand
            your business goals, target audience, and technical requirements to
            lay a strong foundation for the project.
          </li>
          <li>
            <strong>Design & Prototyping:</strong> Through wireframes, mockups,
            and prototypes, I ensure that your vision is accurately represented
            in the design.
          </li>
          <li>
            <strong>Development:</strong> I implement the design and
            functionality, developing both the front-end and back-end while
            keeping everything fully integrated.
          </li>
          <li>
            <strong>Testing & Quality Assurance:</strong> Rigorous testing
            across browsers, devices, and functionalities ensures that your app
            is bug-free and performs smoothly.
          </li>
          <li>
            <strong>Deployment & Maintenance:</strong> Once the application is
            ready, I handle deployment and provide ongoing maintenance to ensure
            continued success.
          </li>
        </ol>
      </section>

      {/* Technologies I Use Section */}
      <section className="technologies max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-yellow-500">Technologies I Use</h2>
        <p className="text-lg mb-4">
          Here are the tools and technologies I leverage to bring your project
          to life:
        </p>
        <ul className="space-y-4 ">
          <li>
            <strong>Frontend:</strong> React, Vue, Angular, HTML5, CSS3,
            JavaScript, TypeScript, Bootstrap, Tailwind
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express, Django, Flask, Ruby on
            Rails, Laravel, PHP
          </li>
          <li>
            <strong>Database:</strong> PostgreSQL, MongoDB, MySQL, SQLite,
            Firebase
          </li>
          <li>
            <strong>DevOps:</strong> Docker, AWS, Heroku, Kubernetes, Jenkins
          </li>
          <li>
            <strong>Version Control:</strong> Git, GitHub, GitLab, Bitbucket
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact text-center">
        <h2 className="text-3xl font-semibold mb-4 text-yellow-500">Let’s Build Something Great Together</h2>
        <p className="text-lg mb-6">
          Are you ready to bring your project to life with a full-stack web
          solution? Whether you're creating a dynamic website, a web
          application, or a custom software solution, I can help you from start
          to finish. Get in touch today to discuss your ideas and let’s make
          your vision a reality.
        </p>
        <a href="mailto:joyfeelz911@gmail.com" className="contact-btn px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
          Contact Me
        </a>
      </section>
    </div>
  );
};

export default Service;
