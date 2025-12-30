import AINexusImg from "./ProjectImages/AINexus.png";
import DeeMusicImg from "./ProjectImages/DeeMusic.png";
import InstagramCloneImg from "./ProjectImages/InstagramClone.png";
import CarRacingGameImg from "./ProjectImages/CarRacingGame.png";
import NationsHubImg from "./ProjectImages/NationsHub.png";
import NikeImg from "./ProjectImages/Nike.png";
import GitHubProfileSearchImg from "./ProjectImages/GitHubProfileSearch.png";
import MovieRecommendationImg from "./ProjectImages/MovieRecommendation.png";
import jwtAuthenticationImg from "./ProjectImages/jwtAuthentication.png";
import sjtravelsnextImg from "./ProjectImages/sjTravelsNextJS.png";
import ParticleCosmosImg from "./ProjectImages/ParticleCosmos.png";

const ProjectData = [
  {
    id: 1,
    title: "AI Nexus (Powered By Gemini)",
    desc: "Liquid glass iOS 26 inspired, AI Nexus is a Gemini-powered chat interface with real-time history, editable queries, one-tap copy, adaptive mobile layouts, and theme toggling in a clean, minimal UI.",
    image: AINexusImg,
    github: "https://github.com/deepanshu1420/AINexus-Powered-By-Gemini.git",
    live: "https://ainexus-online.netlify.app/",
    skills: ["React.js", "JavaScript", "Socket.IO", "Gemini API Key", "Axios", "Vite", "ReactMarkdown", "UI/UX", "TailwindCSS"],
    isNew: true 
  },
   {
    id: 2,
    title: "JSON Web Token Authentication",
    desc: "A MERN stack application implementing JWT-based authentication with bcrypt.js encryption and secure session handling, ensuring protected routes, real-time access control, and improved application security.",
    image: jwtAuthenticationImg,
    github: "https://github.com/deepanshu1420/jwtAuthentication.git",
    live: "https://jwtauth-secure.vercel.app/",
    skills: ["MERN Stack", "JavaScript", "MongoDB", "Node.js", "Express.js", "Handlebars.js", "Bcrypt.js", "Nodemon", "JWT Tokens"],
    isNew: false 
  },
  {
    id: 3,
    title: "DeeMusic NextGen",
    desc: "Apple Music–inspired glassmorphic UI, DeeMusic-NextGen offers real-time streaming, dynamic playlists, mood-based discovery, fluid animations, responsive layouts, and interactive engagement in a sleek, modern interface.",
    image: DeeMusicImg,
    github: "https://github.com/deepanshu1420/DeeMusic-NextGen.git",
    live: "https://deemusic-online.netlify.app/",
    skills: ["React.js", "JavaScript", "Bootstrap", "React Router", "Spotify Web Playback SDK", "Spotify API", "Axios", "Vite", "TailwindCSS"],
    isNew: true
  },
  {
    id: 4,
    title: "Instagram Clone",
    desc: "Instagram replica with real-time post creation, likes and comments, fully responsive on mobile and desktop, attention to visual details and typography, seamless light/dark theme toggle, powered by Meta.",
    image: InstagramCloneImg,
    github: "https://github.com/deepanshu1420/InstagramClone.git",
    live: "https://insta-clone-online.netlify.app/",
    skills: ["React.js", "TypeScript", "Heroicons", "PostCSS", "Vite", "TailwindCSS", "UI/UX", "Instagram Meta", "React Icons"]
  },
  {
    id: 5,
    title: "Car Racing Game",
    desc: "Driven by asynchronous logic and event-based controls, this racing simulator delivers adjustable speeds, fluid dynamics, responsive handling, real-time interactions, and immersive visuals.",
    image: CarRacingGameImg,
    github: "https://github.com/deepanshu1420/CarRacingGame.git",
    live: "https://deepanshu1420.github.io/CarRacingGame/",
    skills: ["Asynchronous JavaScript", "Material UI","HTML5", "CSS3", "Game Development"]
  },
  {
    id: 6,
    title: "Nations Hub Info",
    desc: "Welcome to Nations Hub! Explore information about every country on Earth with our rich interactive experience. Discover stats, flags, and challenge yourself with geography games!",
    image: NationsHubImg,
    github: "https://github.com/deepanshu1420/Find-Nations-Hub-Info.git",
    live: "https://nationshub-online.netlify.app/",
    skills: ["React.js", "JavaScript", "REST Countries API", "React Transition Group", "CSS3", "HTML5", ],
    isNew: true
  },
  {
    id: 7,
    title: "sjTravels NextJS",
    desc: "A modern travel platform built with Next.js v15 and TypeScript, featuring responsive layouts, smooth animations, fast rendering, and SEO-optimized experiences for temple tours, homestays, and vehicle rentals.",
    image: sjtravelsnextImg,
    github: "https://github.com/deepanshu1420/sjTravelsNextJS.git",
    live: "https://sjtravelsnext.vercel.app/",
    skills: ["Next.js", "React.js", "TypeScript", "Shadcn/ui", "TailwindCSS", "UI/UX", "Lucide React Icons", "Framer Motion"],
    isNew: true
  },
  {
    id: 8,
    title: "Nike NextJS",
    desc: "Next.js-powered Nike site with responsive layouts, interactive hero sections, engaging product showcases, and animated testimonials in an advanced e-commerce front-end.",
    image: NikeImg,
    github: "https://github.com/deepanshu1420/Nike-Website-NextJS.git",
    live: "https://nike-nextjs.netlify.app/",
    skills: ["Next.js", "React.js", "JavaScript", "Node.js", "TailwindCSS", "Git", "Heroicons", "UI/UX"],
    isNew: true
  },
  {
    id: 9,
    title: "GitHub Profile Search",
    desc: "The GitHub Profile Search App lets users instantly explore profiles, view bios, repositories, followers, and more, with real-time updates for an engaging experience.",
    image: GitHubProfileSearchImg,
    github: "https://github.com/deepanshu1420/GitHubProfileSearch.git",
    live: "https://githubprofilesearch-online.netlify.app/",
    skills: ["React.js", "JavaScript", "GitHub REST API", "CSS3", "HTML5", "React Framer Motion"]
  },
  {
    id: 10,
    title: "Particle Cosmos",
    desc: "Gesture-controlled 3D particle visualizer where real-time hand movements via webcam shape dynamic visuals using Three.js and MediaPipe.",
    image: ParticleCosmosImg,
    github: "https://github.com/deepanshu1420/ParticleCosmos.git",
    live: "https://particlecosmos.netlify.app/",
    skills: ["Three.js", "MediaPipe", "JavaScript", "WebGL", "Webcam API", "CSS3", "HTML5"],
    isNew: true
  },
  {
    id: 11,
    title: "Movie Recommendation App",
    desc: "An interactive movie recommendation app where users can browse, search, and discover films with live updates, selectable posters, IMDb ratings, detailed views, and a responsive, engaging interface.",
    image: MovieRecommendationImg,
    github: "https://github.com/deepanshu1420/MovieRecommendationApp.git",
    live: "https://movierecommendationapp-online.netlify.app/",
    skills: ["React.js", "Create React App", "JavaScript", "Axios", "React Router", "React Icons", "TMDB API", "TailwindCSS", "HTML5"],
    isNew: false
  }
];

export default ProjectData;
