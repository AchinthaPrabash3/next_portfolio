import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const contact = [
    {
      link: "https://www.instagram.com/achintha0110/",
      item: <FaInstagram />,
    },
    {
      link: "https://www.linkedin.com/in/achintha-prabasha-829894260/",
      item: <FaLinkedinIn />,
    },
    {
      link: "https://github.com/AchinthaPrabash3",
      item: <FaGithub />,
    },
    {
      link: "https://x.com/PrabashAch10994",
      item: <FaTwitter />,
    },
  ];

  return (
    <div className="pb-12 mt-24" id="contact">
      <h2 className="uppercase md:text-9xl text-7xl font-bold text-center leading-none">
        contact me <br />
        <span className=" hero-text">build your design</span>
      </h2>
      <div className="w-fit mx-auto mt-12 flex gap-6">
        {contact.map(({ link, item }, i) => {
          return (
            <a
              href={link}
              key={i}
              target="_blank"
              className="hover:scale-95 transition-all duration-300"
            >
              <div className=" *:size-10 bg-white *:fill-black rounded-full p-2 ">
                {item}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Contact;
