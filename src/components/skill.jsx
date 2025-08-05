const skills = [
    { name: 'HTML5', logo: '/logos/html5.svg' },
    { name: 'CSS3', logo: '/logos/css.svg' },
    { name: 'JavaScript', logo: '/logos/javascript.svg' },
    { name: 'JQuery', logo: '/logos/jquery.svg' },
    { name: 'React.js', logo: '/logos/react.svg' },
    { name: 'Tailwind CSS', logo: '/logos/tailwindcss.svg' },
    { name: 'Bootstrap', logo: '/logos/bootstrap.svg' },
    { name: 'MongoDB', logo: '/logos/mongodb.svg' },
    { name: 'Express.js', logo: '/logos/express.svg' },
    { name: 'Node.js', logo: '/logos/nodedotjs.svg' },
    { name: 'Git & GitHub', logo: '/logos/git.svg' },
    { name: 'REST API', logo: '/logos/fastapi.svg' },
];

const Skill = () => {
    return (
        <div className="font-sans bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">

            <section className="py-24 px-6 bg-[#0F172A] text-white">
                <h2 className="text-4xl font-bold text-center mb-12">Skills & Tools</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {skills.map(skill => (
                        <div
                            key={skill.name}
                            className="flex items-center gap-3 bg-gradient-to-tr from-blue-500 via-cyan-500 to-indigo-500 
                                       dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 
                                       py-4 px-4 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
                        >
                            <img src={skill.logo} alt={skill.name} className="w-8 h-8" />
                            <span className="block text-lg font-semibold">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Skill;
