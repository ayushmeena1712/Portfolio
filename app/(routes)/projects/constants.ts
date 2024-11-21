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
];
