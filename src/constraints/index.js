import { link } from "framer-motion/client";
import project1 from "../assets/chatbot.png";
import project2 from "../assets/website.png";
import project3 from "../assets/mobile.png";
import project4 from "../assets/story.jpg";
import project5 from "../assets/Server.jpg"

export const HERO_CONTENT = `I am a Computer Science student at the University of West London with a passion for software development, machine learning, and web technologies. My expertise lies in programming languages like Python and Java, as well as web development frameworks such as Django. I have gained hands-on experience working with Firebase and GitHub while building real-world applications like chatbots, a Story Management System, and mobile apps. These projects have sharpened my ability to design efficient, scalable, and user-friendly solutions.`;

export const ABOUT_TEXT = `At the University of West London, I’ve taken on various leadership roles, including Course Representative and Peer Mentor, where I got the opportunity to improve the student experience and support my peers. As Communication Manager for the Nepalese Society, I helped lead our team to win Society of the Year, which helped refine my skills in teamwork, organization, and communication. My involvement with the ATAL Tech Society gave me valuable exposure to emerging technologies and the broader tech landscape.

\n Alongside my academic and leadership experiences, I gained practical insights through company visits and industry workshops. A two-day workshop at Amazon provided a closer look at their technology processes, while visits to Sky and Brompton Technology allowed me to see how technology is applied in different sectors. Additionally, shadowing IT professionals at Travelodge offered me hands-on experience with IT infrastructure. These experiences have broadened my understanding of the tech industry and the application of technology in real-world settings.`;
  
export const ABOUT_LINK = `https://sucomms5.wixsite.com/uwlsu/post/building-confidence-community-dinesh-s-time-at-uwl`;

export const EXPERIENCES = [
  {
    year: "May 2023 - Present",
    role: "F&B Supervisor",
    company: "Travelodge Hotels Limited",
    description: `Worked across multiple locations under different management teams, showcasing adaptability and leadership. Trained new employees on Opera, a hotel management software, while overseeing office administration and improving operational efficiency. Implemented health and safety protocols and leveraged customer feedback from TripAdvisor and Wish Surveys to enhance service quality. Recognized with the Brilliant Base Award for consistently demonstrating actions and behaviors that contributed to the company’s success.`,
    technologies: ["Office Administration", "Staff Training", "Customer Service","Opera (HM Software)"],
  },
  {
    year: "September 2024 - November 2024",
    role: "Programmatic SEO Specialist Intern",
    company: "TikBox",
    description: `Analyzed user data using Google Analytics, examining key metrics such as traffic sources and user behavior to identify trends and optimize the user experience. Utilized insights to improve conversion rates by enhancing the website's performance. Integrated Elementrix and Yoast with WordPress to optimize blog posts, ensuring they followed SEO best practices. Optimized content for better keyword targeting, readability, and meta descriptions, which resulted in improved search engine rankings.`,
    technologies: ["Google Analytics", "WordPress", "Elementrix", "Yoast", "SEO", "Data Analysis"],
  },
  
];

export const PROJECTS = [
  {
    title: "Heart Disease Prediction Chatbot",
    image: project1,
    description:
      "A web app that predicts the likelihood of heart disease using an SVM machine learning model, integrated with an interactive chatbot powered by the Hugging Face Transformers API for user queries. The app also provides a user-friendly interface for seamless interaction with the prediction system.",
    technologies: ["Python", "Machine Learning", "API", "Django", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "UWL Nepalese Society Website",
    image: project2,
    description:
      "A community-based website built for the Nepalese society to connect, share content, and interact. The website features different pages where I contributed in Board Members page for easy access to leadership information, and a Blog page for sharing community news and events as well as researched and provided content for the website, ensuring it was informative and engaging.",
    technologies: ["Python", "Django", "Git", "GitHub", "VSCode"],
    link: "https://uwlnepalesesociety.com/"
  },
  {
    title: "E-commerce Mobile Web App",
    image: project3,
    description:
      "This mobile web app provides an intuitive shopping experience with an interactive product catalog and seamless navigation. Users can easily browse through products, add items to their cart, and manage their selections effortlessly. The app ensures secure user authentication, leveraging Firebase to protect user data and accounts.",
    technologies: ["Java", "Android Studio", "XML", "Firebase"],
  },
  {
    title: "Story Management System",
    image: project4,
    description:
      "A Java-based story management system for journalists to register, update, and manage stories, with editor functionalities for review and approval. The system supports saving and publishing stories with modular design and unit testing for validation.",
    technologies: ["Java","OOP","JUnit"],
  },
  {
    title: "ITMagazine Workflow Server",
    image: project5,
    description:
      "A distributed system application for managing IT magazine stories. It enables synchronous communication via RMI for local and remote interactions and asynchronous communication using RabbitMQ for message queuing between departments like editing, processing, and accounts.",
    technologies: ["Java","RMI","RabbitMQ","Distributed Systems"],
  },
];

export const CONTACT = {
  address: "London, United Kingdom ",
  phoneNo: "+44 7795 243240 ",
  email: "dipak.lama1979@gmail.com",
};
