const AboutMe = () => {
    return (
        <div className="font-sans bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-15">
            
            <section className=" mx-auto text-center text-white ">
                <h2 className="text-5xl font-extrabold mb-6">About Us</h2>
                
                <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-8">
                    We are a team of passionate web developers committed to building modern,
                    scalable, and user-friendly web applications. With expertise in frontend
                    and backend technologies, we transform ideas into impactful digital
                    solutions.
                </p>

                <h3 className="text-3xl font-bold mb-4">Who We Are</h3>
                <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
                    Our journey started with a simple goal: to create websites and applications 
                    that not only look stunning but also deliver real value. Over time, we’ve 
                    mastered the <span className="font-semibold text-blue-400">MERN stack (MongoDB, Express.js, React, Node.js)</span> 
                    and modern frontend frameworks, enabling us to craft responsive, accessible, 
                    and performance-driven solutions.
                </p>
            </section>
        </div>
    );
};

export default AboutMe;
