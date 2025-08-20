import { Project } from "@/types";

export const projects: Project[] = [
    {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce platform built with NodeJs, MongoDB, ReactJS and Tailwind CSS.',
        technologies: ['NodeJS', 'ReactJS', 'Tailwind CSS', 'Stripe', 'RazorPay'],
        githubLink: 'https://github.com',
        demoLink: 'https://forever-orpin-phi.vercel.app/',
        image: '/projects/e-commerce-website.png',
      },
      {
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/task-manager.webp',
      },
      {
        title: 'Portfolio Website',
        description: 'My personal portfolio website showcasing my projects and skills.',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        githubLink: 'https://github.com',
        demoLink: 'https://sathvik-portfolio-3jre.onrender.com',
        image: '/projects/portfolio-website.jpg',
      },
      {
        title: 'Weather App',
        description: 'A weather application that provides real-time weather updates.',
        technologies: ['React', 'OpenWeatherMap API'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/weather-app.png',
      },
  ];