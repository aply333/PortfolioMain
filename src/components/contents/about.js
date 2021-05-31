import twin from "../assets/images/twin.jpg"
import portfolio from "./screenshots/portfolio.jpg"
import resturaunt from "./screenshots/resturaunt.jpg"
import snippet from "./screenshots/snippet.jpg"
import todo from "./screenshots/todo.jpg"
import trello from "./screenshots/trelloClone.jpg"
import merchant from "./screenshots/merchant.jpg"
import resume from "./AndreiLysenko.pdf"
import focused from "./screenshots/focusedKanban.jpg"

export const AboutContent = {
  gitHub:"https://github.com/aply333",
  linked:"https://www.linkedin.com/in/aply333/",
  resume: resume,
  bannerImg: twin,
  bannerAlt: "Photo I took while atop of the twin peaks, in San Francisco.",
  mainHeader: "Hi, I'm Andrei.",
  subHeader:
    " Full Stack Developer looking to build your ideas both front to back, mobile to desktop. ",
  aboutMe:{
      para1: "I'm a new FullStack developer, ready to hit the ground running. I've taught myself the basics of web development, then completed the program at Lambda School;  now I'm ready to apply my skills in the real world.",
      para2: "At Lambda School, I studied web development and computer science. In the program, we worked with Javascript, React, SQL and Python. We built smaller projects daily and,  worked as a team to create complete products. Along with the technical work, their program gave me the opportunity to be challenged, making me quick to learn and adapt.",
      para3: " New to the field, looking to start my career. I will work hard to meet and exceed your goals."
  },
  myStack: ["Javascript", "Node", "React", "HTML", "CSS", "Python", "SQL", "Redux", "Knex"],
  contact:{
    email: "andrei@aply.tech",
    phone: "(628)777-8068"
  },
  projects:[
    {
      id:6,
      title: "FocusedKanban",
      stack: ["JavaScript", "HTML5","Canvas", "CSS", "React", "ExpressJS", "SQLITE3", "Knex", "Bcrypt"],
      description: "Continuation of the TrelloClone project, but this time I’ve decided to build out more and incorporate some unique features. On the desktop users can build and manage a kanban board, then select a task, which will display on their mobile device. Separating planning from the task at hand.",
      img: focused,
      alt: "Screenshot of code, for my current project.",
      link: "https://github.com/aply333/FocusedKanBan"
    },
    {
      id: 5,
      title: "My Website",
      stack: ["React", "HTML", "CSS", "Formspree"],
      description: "I built this, intentionally limiting the use of any premade libraries. All the components were made using basic React and CSS. I chose to use Formspree; my contact form is simple and did not warrant building a backend, Formspree provides a decent level of protection and notifies when submissions are made.",
      img: portfolio,
      alt: "Screenshot of aply.tech.",
      link:"https://github.com/aply333/PortfolioMain"
    },
    {
      id: 4,
      title: "Task to Date",
      stack:["React", "Javascript", "HTML", "Momment" ,"CSS", "Express", "Knex", "SQL", "Bcrypt", "Axios", "Redux"],
      description:"A Calendar tool paired with a to-do list, built for both mobile and desktop layouts. Made to keep it simple. Components are custom made, and the database was assembled with sqlite3 and knex. The server saves and tracks user inputs, while also providing some level of account authorization.",
      img: todo,
      alt: "Screenshot of the calendar app I made.",
      link: "https://github.com/aply333/TaskToDate"
    },
    {
      id: 3,
      title: "Snippet Tool",
      stack: ["React", "React-Suite", "Express", "Bcrypt", "Knex", "SQL", "Redux", "Ace-Builds"],
      description: "This is a web-based, code, marque tool. It allows users to write or paste in code, which then they can highlight and add notes to. The editor will syntax appropriately and the server will store their snippets to their accounts. I chose to use the react-suite component library; it had most resembled my goal in mind and provides a clean professional look.",
      img: snippet,
      alt: "Screenshot of the snippet tool app.",
      link: "https://github.com/aply333/SnippetFrontEnd"
    },
    {
      id: 2,
      title: "Trello Clone",
      stack: ["React", "HTML", "CSS", "React-DnD", "React-Hook-Form"],
      description: "A clone of the Trello app front-end. The goal was to improve my ability in building apps with click and drag functionality, in which I succeeded. I had built out these components and using react hooks built my state management in place of Redux. Functional, a good lesson, and I do not recommend this approach. Users can create categories and tasks; move them where they please along with the board and throw them away when they are done with them.",
      img: trello,
      alt: "Screenshot of the Trello clone I made.",
      link: "https://github.com/aply333/TrelloClone"
    },
    {
      id: 1,
      title: "Merchant Market Place",
      stack: ["React", "Redux", "AntDesign","ExpressJS","Knex", "ElephantSQL"],
      description: "Merchant Market Place is a site that would exclusively catalog local businesses. I worked with a team of six developers, two designers, and a stakeholder. My primary role was to scaffold the front-end of the site and preparing components to be assembled into it. I had greatly enjoyed working on a team, and feel I excel in this.",
      img: merchant,
      alt: "Screenshot of the merchant market place.",
      link: ""
    },
    {
      id: 0,
      title: "Restaurant Passport",
      stack: ["HTML", "CSS", "LESS"],
      description: "This site/app both markets restaurants in your area, but also allows users to check-in, collecting a stamp from their visit. My role here was to design and build the landing pages for the project. These portions were made using basic HTML, with LESS to compile the CSS.",
      img: resturaunt,
      alt: "Screenshot of the landing page of the Restaurant Passport app.",
      link: "https://github.com/bw-restaurant-passport-1/User-Interface"
    }
  ]
};
