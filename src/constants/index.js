import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tplogo,
  thinrootlogo,
  nextjs,
  aws,
  ecom,
  face,
  gpt,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML and AI Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: docker,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Thinroot Software Pvt Ltd",
    icon: thinrootlogo,
    iconBg: "#383E56",
    date: "December 21 - August 2023",
    points: [
      "Developing and maintaining web and mobile apps using React.js and React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser and cross-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Trustlypay Financial Technologies Pvt Ltd",
    icon: tplogo,
    iconBg: "#383E56",
    date: "October 23 - July 2024",
    points: [
      "Developed a secure and scalable payment gateway system enabling seamless transactions between merchants and customers, utilizing MERN stack Technology",
      "Implemented features such as multi-currency support, transaction history and real-time payment processing, ensuring a smooth user experience and enhanced security.",
      "Integrated various third-party payment APIs, to support diverse payment methods, enhancing the flexibility and reach of the payment gateway.",
      "Employed robust security protocols, including data encryption, tokenization, and two-factor authentication, to protect sensitive payment information and comply with industry standards.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Nitish is highly talented developer! Delivered our project with great quality code. Improved UI and  optimized code for a smoother experience to our customers",
    name: "Selva",
    designation: "CEO",
    company: "Thinroot Software",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Nitish is self motivated and goal oriented individual with high knowledge in MERN stack developemnt. The talent and dedication showed in the work is appreciable!",
    name: "Rajat",
    designation: "Manager",
    company: "Trustlypay",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Nitish optimized the code and improved the UI of the application the application feels super smooth and easy on the eye. The load time has come down by 50%",
    name: "Prakash",
    designation: "Manager",
    company: "Thinroot Software",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const projects = [
  {
    name: "Ecommerce application",
    description:
      "Web platform application that allows users to view products, add them to the cart and see product description, and the user can also manage their profile and place orders, there is also an admin panel through which an sellers can view and manage his store and products and any events or coupons for a product.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://github.com/nitishmishra617/MERN_ECOMMERCE_APP",
  },
  {
    name: "Face Recognition Attendance System",
    description:
      "In this application we can register a student with their image which is trained using Opencv python module and when a valid face is detected it marks the attendace of the student. Its a fun project for OpenCV and ML beginners",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: face,
    source_code_link:
      "https://github.com/nitishmishra617/Face_Recognition_Attendance_System",
  },
  {
    name: "Chat GPT clone",
    description:
      "A simple chat gpt clone which utilizes the openai api and node js as backend and react as frontend. We can generate a text, or a paragraph on a particular topic, chat with the bot, can get the code written in JS, and generate si-fi images as well. The project uses freely available version of openAI API which has some limitations.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "OPen AI",
        color: "pink-text-gradient",
      },
    ],
    image: gpt,
    source_code_link: "https://github.com/nitishmishra617/chatgpt_clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
