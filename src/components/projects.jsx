import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import img6 from "/apple.png";

const projects = [

    {
        Image: "/apple.png",
        title: 'EcoWear E-Commerce',
        desc: 'Sustainable store built using React, Tailwind, Node.js, MongoDB. Includes cart, checkout, and dark mode.',
        url: 'https://naimdev.com',
    },
    {
        Image: "/Images/ChatApp.mp4",
        isVideo: true,
        title: 'Chat App',
        desc: 'Real-time chat app built with Node.js, MongoDB, and Socket.io. Includes login, chat rooms, and responsive design..',
        url: 'https://your-taskmanager-demo.com',
    },

    {
        Image: "/Images/To-Do List.png",
        title: 'Todo App',
        desc: 'Simple todo app using React and Node.js. Supports create, update, delete tasks with clean UI and state handling.',
        url: 'https://your-todo-demo.com',
    },
    {
        Image:"/Images/Portfolio Presentation.png",
        title: 'Web Portfolio',
        desc: 'Personal portfolio built with React and Tailwind. Highlights projects with smooth transitions and mobile-friendly design.',
        url: 'https://webtech95.github.io/WebPage-Portfolio/',
    },
    {
        Image: "/Images/Brown Modern Bakery Logo.png",
        title: 'Bakery Website',
        desc: 'Bakery landing page using React, Redux Toolkit, and Tailwind. Features product showcase and responsive layout.',
        url: 'https://your-bakery-site.com',
    },
    {
        Image: "/Images/Youtube Clone.mp4",
        title: 'Youtube Clone',
        desc: 'Modern portfolio using React and Tailwind CSS. Includes project showcase, dark mode, and responsive layout for all screen sizes.',
        url: 'https://webtech95.github.io/youtube-Clone/',
        isVideo: true,
    },
];

const Project = () => {
    return (
        <div className="font-sans bg-white min-h-screen">
            <section
                id="projects"
                className="py-20 px-6 bg-white "
            >
                <h2 className="text-4xl font-bold text-center text-black-700 mb-12">
                    Projects
                </h2>

                <div className="max-w-6xl mx-auto">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {projects.map((project, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="bg-white text-center p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all h-full">
                                    {project.isVideo ? (
                                        <video
                                            src={project.Image}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-48 object-cover rounded-md mb-4"
                                        />
                                    ) : (
                                        <img
                                            src={project.Image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover rounded-md mb-4"
                                        />
                                    )}
                                    <h3 className="text-xl font-semibold text-black-900 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-black-600 text-sm mb-4">
                                        {project.desc}
                                    </p>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-blue-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </div>




    );
};

export default Project;
