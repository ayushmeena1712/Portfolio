interface project {
  title: string;
  description: string;
  image: string;
  repository: string;
  deployment: string;
  techUsed: string[];
}
export const projects: project[] = [
  {
    title: "Authentication System",
    description:
      "A authentication system which deals with latest trends in authentication.",
    image: "/image.jpg",
    repository: "https://github.com/ayushmeena1712/blog_mongo.git",
    deployment: "https://blog-mongo.vercel.app/",
    techUsed: [
      "Nextjs",
      "Tailwind CSS",
      "Reactjs", 
      "Javascript",
      "Axios Interceptor",
      "Node Mailer",
      "Multer",
      "Memory Based Authentication",
      "Cloudinary",
      "render Deployment for backend",
      "Frontend deployed on vercel",
    ],
  },
  {
    title: "App Write Notes Application",
    description: "Notes Application using AppWrite",
    image: "/appwrite.jpg",
    repository: "https://github.com/ayushmeena1712/Blogger.git",
    deployment: "https://blogger-nine-nu.vercel.app/",
    techUsed: [
      "Tailwind CSS",
      "Reactjs", 
      "AppWrite", 
      "Javascript",
      "TinyMCE real time editor",
      "3rd Party Backend",
    ],
  },
  {
    title: "Portfolio Site",
    description: "Using the next.js for portfolio",
    image: "/portfolio.png",
    repository: "https://github.com/ayushmeena1712/Portfolio.git",
    deployment: "https://portfolio-eqfzeo192-ayush-meenas-projects-5ed997da.vercel.app/",
    techUsed: [
      "Next.js",  
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
      "Emailjs",
    ],
  },
];
