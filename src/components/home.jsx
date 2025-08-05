

const Home = () => {

    return (
        <div className="font-sans bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
            <section className="flex flex-col justify-center items-center text-center px-6 py-40 bg-[#F9FAFB] text-[#111827]">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-up">
                    Hi, I'm Afzal
                </h1>
                <p className="text-2xl md:text-3xl mb-8 font-light">
                    MERN Stack Developer & Frontend Developer
                </p>
                <div className="space-x-4">
                    <a
                        href="#projects"
                        className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-blue-100 transition"
                    >
                        My Projects
                    </a>
                    <a
                        href="#contact"
                        className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
                    >
                        Contact Me
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Home