import html5Logo from "/logos/html5.svg";
import cssLogo from "/logos/css.svg";
import javascriptLogo from "/logos/javascript.svg";
import jqueryLogo from "/logos/jquery.svg";
import reactLogo from "/logos/react.svg";
import tailwindLogo from "/logos/tailwindcss.svg";
import bootstrapLogo from "/logos/bootstrap.svg";
import mongodbLogo from "/logos/mongodb.svg";
import expressLogo from "/logos/express.svg";
import nodeLogo from "/logos/nodedotjs.svg";
import gitLogo from "/logos/git.svg";
import restApiLogo from "/logos/fastapi.svg";


const skills = [
    { name: "HTML5", logo: html5Logo },
    { name: "CSS3", logo: cssLogo },
    { name: "JavaScript", logo: javascriptLogo },
    { name: "JQuery", logo: jqueryLogo },
    { name: "React.js", logo: reactLogo },
    { name: "Tailwind CSS", logo: tailwindLogo },
    { name: "Bootstrap", logo: bootstrapLogo },
    { name: "MongoDB", logo: mongodbLogo },
    { name: "Express.js", logo: expressLogo },
    { name: "Node.js", logo: nodeLogo },
    { name: "Git & GitHub", logo: gitLogo },
    { name: "REST API", logo: restApiLogo },
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
