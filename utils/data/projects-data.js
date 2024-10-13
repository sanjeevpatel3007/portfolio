import { GoogleAnalytics } from '@next/third-parties/google';
import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
   
    {
        id: 1,
        name: 'JobLynk',
        description: 'JobLynk is a comprehensive MERN stack job portal application designed to connect students with potential job opportunities. It allows job seekers to create profiles, browse job listings, and apply for positions, while enabling companies to post job vacancies, manage applications, and find suitable candidates efficiently. The platform features a responsive design for optimal user experience across devices and implements secure user authentication.',
        tools: ['React', 'Vite', 'TailwindCSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer', 'Redux Toolkit', 'Axios', 'Radix UI'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: '',
        link: 'https://job-portal-frontend-mu.vercel.app/',
        projectgithub: 'https://github.com/sanjeevpatel3007/JobPortal',
      },
      {
        id: 2,
        name: 'DotBlog',
        description: 'DotBlog is a modern blogging platform built with the MERN stack, enabling users to read, create, edit, and delete blog posts. Authors can manage their content through a user-friendly dashboard, where they can view statistics and interact with readers. The application emphasizes a clean, intuitive design and offers rich media support, allowing authors to include images and videos in their posts, making it a vibrant community for sharing ideas and stories.',
        tools: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: '',
        link: 'https://dotblog-frontend.onrender.com/',
        projectgithub: 'https://github.com/sanjeevpatel3007/dotblog',
      },
      {
        id: 3, 
        name: 'Wanderlust - Airbnb Clone',
        description: 'Wanderlust is a full-stack web application that replicates the core functionalities of Airbnb. The application allows users to browse listings, make bookings, and manage their rental properties. It is built using EJS templates for dynamic server-side rendering and Express.js for handling the backend logic. The app provides a seamless experience for users looking for short-term rentals, with features like filtering, property management, and secure authentication.',
        tools: ['EJS', 'Express.js', 'Node.js', 'MongoDB', 'Bootstrap', 'Passport.js'],
        role: 'Full Stack Developer',
        code: '', 
        demo: '', 
        image: '', 
        link: 'https://wanderlust-gwow.onrender.com/listings', 
        projectgithub: 'https://github.com/sanjeevpatel3007/wanderLust', 
      }
      ,
    {
        id: 4,
        name: 'AI Powered Financial App',
        description: "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
        link:'https://www.msn.com/en-in',
        projectgithub:'https://github.com/sanjeevpatel3007/jobLynk',

    },
  
   
  
  
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
