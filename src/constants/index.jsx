import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import ATUS from "../assets/atus-imgs/Desktop-View.png";
import TPCS from "../assets/tpcs-imgs/main.png";
import WTWR from "../assets/wtwr-imgs/full-scrn/full_screen_signed_out_homepage.png";
import MIST from "../assets/mist-imgs/Desktop-Main.png";
import projectImage5 from "../assets/wtwr-imgs/full-scrn/full_screen_add_modal.png";
import projectImage6 from "../assets/wtwr-imgs/full-scrn/full_screen_register_modal.png";

import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "ANDREW WEAVER",
  greet: "Hello there! 👋🏻",
  description:
    "I am an Auto Body Technician-turned-Software Engineer with strong problem-solving skills and a keen attention to detail. I'm most comfortable with HTML, JavaScript, and React, and I’m eager to apply my technical expertise and adaptability to software development.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage5,
    githubLink: "https://github.com/Weaver17/Personal-Porfolio",
  },
  {
    id: 2,
    name: "Triple Peaks Coffee Shop",
    description:
      "Developed my first webpage through TripleTen, gaining hands-on experience with real-world HTML and CSS practices to build a functional and visually appealing design.",
    image: TPCS,
    githubLink: "https://github.com/Weaver17/se_project_coffeeshop",
  },
  {
    id: 3,
    name: "Around the U.S.",
    description:
      "For my introduction to JavaScript, the next project was a small homepage for a user on an image sharing website. This site has the option to edit your profile, add images, and like certian images of other users.",
    image: ATUS,
    githubLink: "https://github.com/Weaver17/se_project_aroundtheus",
  },
  {
    id: 4,
    name: "What to Wear",
    description:
      "My first full stack app! A MERN stack application that makes a call to an API, which then responds with the daily weather forecast. We collect the weather data, process it, and then based on the forecast, we recommend suitable clothing to the user.",
    image: WTWR,
    githubLink: "https://github.com/Weaver17/se_project_react",
  },
  {
    id: 5,
    name: "M I S T",
    description:
      "A MERN stack application designed for PC gaming enthusiasts and individuals who appreciate free content (excluding microtransactions). This app leverages shared components from WTWR to streamline development and maintain design consistency.",
    image: MIST,
    githubLink: "https://github.com/user/blog-platform",
  },
  // {
  //   id: 6,
  //   name: "Chat Application",
  //   description:
  //     "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
  //   image: projectImage6,
  //   githubLink: "https://github.com/user/chat-application",
  // },
];

export const BIO = [
  "Originally from New Jersey, I have been a resident of Columbus, Ohio, for the past 20 years and graduated from Olentangy High School in 2012. While my initial career aspirations were in veterinary technology, I discovered a passion for automotive detailing and body work, where I've honed my skills and developed a deep appreciation for precision and craftsmanship.",
  "My longstanding interest in coding and software engineering led me to make a career change in 2024, enrolling in TripleTen's Software Engineering Bootcamp. This rigorous, self-paced, ten-month program employs two-week sprints to simulate real-world workflows and project management. Through this experience, I enhanced my HTML and CSS skills, gained proficiency in JavaScript and React, and acquired backend development expertise with technologies such as Node.js, Express, and MongoDB.",
];

export const SKILLS = [
  {
    icon: <FaHtml5 className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "HTML",
    experience: "",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "CSS",
    experience: "",
  },
  {
    icon: <IoLogoJavascript className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "",
  },

  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-cyan-500 lg:text-5xl" />,
    name: "Tailwind",
    experience: "",
  },
];

export const EXPERIENCES = [
  {
    title: "Reconditioning Associate/Senior Reconditioning Associate",
    company: "Carmax",
    duration: "September 2017 - Present",
    description: "At Carmax, I began as an automotive detailer",
  },
  {
    title: "Assistant/Chief Carpet Technician",
    company: "Stanley Steemer",
    duration: "March 2016 - September 2017",
    description:
      "I began as an Assistant, supporting the Crew Chief by managing equipment and hoses to ensure efficient operations. After six months, I was promoted to Crew Chief, where I took on the responsibility of identifying and effectively cleaning various materials, including carpet, upholstery, tile and grout, and leather. This role required attention to detail and a thorough understanding of cleaning techniques tailored to different surfaces.",
  },
  {
    title: "Pet Care Associate/Shift Lead",
    company: "Pet Palace Boarding Resort",
    duration: "May 2013 - December 2015",
    description:
      "At Pet Palace, I was responsible for overseeing the care of up to 100 dogs, cats, and other pets. My duties included managing daycare activities, conducting daily walks, and maintaining detailed records on each pet's chart to ensure proper care and report potential issues. After a year and a half, I was promoted to Shift Lead, where I managed daily operations and supervised associates. In this role, I also administered medications, including insulin shots for cats, demonstrating precision and responsibility in handling medical needs.",
  },
];

export const EDUCATION = [
  {
    degree: "Full-Stack Web Developer Certificate",
    institution: "TripleTen by Yandex",
    duration: "January - October 2024",
    description:
      "TripleTen are professional tech bootcamps that help people from all walks of life to become tech professionals. What makes TripleTen different is an in-depth curriculum with lots of practice, flexible lessons, all-around support, and career coaches that teach grads how to get hired. The Software Engineering bootcamp teaches full-stack web development using JavaScript and the MERN stack: MongoDB, Express, React, Node.js, as well as HTML5 and CSS, and Git/GitHub.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/Weaver17",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/andrew-weaver-1725-profile/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
