// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  // Define an array of contact links with their icons and details
  const contactLinks = [
    {
      icon: <FaEnvelope className="mr-2 text-yellow-500" />,
      label: "Send an email to Jimi Talabi Joy",
      link: "mailto:joyfeelz911@gmail.com",
      text: "joyfeelz911@gmail.com",
    },
    {
      icon: <FaPhone className="mr-2 text-yellow-500" />,
      label: "Call Jimi Talabi Joy",
      link: "tel:+2349155269162",
      text: "09155269162",
    },
    {
      icon: <FaLinkedin className="mr-2 text-yellow-500" />,
      label: "Visit Jimi Talabi Joy's LinkedIn profile",
      link: "https://www.linkedin.com/in/joy-feel-0254b7227/",
      text: "LinkedIn ",
    },
    {
      icon: <FaGithub className="mr-2 text-yellow-500" />,
      label: "Visit Jimi Talabi Joy's GitHub profile",
      link: "https://github.com/Joyfeelz",
      text: "GitHub ",
    },
    {
      icon: <FaTwitter className="mr-2 text-yellow-500" />,
      label: "Visit Jimi Talabi Joy's GitHub profile",
      link: "https://x.com/Joy_feelz?t=vPCIG3U7iy2jpi9Fh5Z-VQ&s=09",
      text: "Twitter",
    },
  ];

  return (
    <footer className="bg-[#020202] shadow-lg text-white py-3">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex justify-between w-full items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-yellow-500">
                Jimi Talabi Joy
              </h2>
              <p className="text-lg text-gray-400">Full Stack Developer</p>
            </div>

            {/* Render Contact Links Dynamically */}
            <div className="space-y-3 text-lg text-gray-200">
              {contactLinks.map((item, index) => (
                <p
                  key={index}
                  className="flex items-center justify-center lg:justify-start"
                >
                  {item.icon}
                  <Link
                    to={item.link}
                    className="hover:underline"
                    aria-label={item.label}
                  >
                    {item.text}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 py-3">
        <p>&copy; 2024 Jimi Talabi Joy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
