import { MdEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="font-sans bg-white text-black">
            <footer id="contact" className="py-20 px-6 text-black "> 
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-4xl text-black font-extrabold mb-4">Let's Work Together</h2>
                    <p className="mb-8 text-lg text-black/90">I'm available for freelance projects and full-time roles.</p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://wa.me/+918882342032?text=Hello%20Afzal%2C%20I%20want%20to%20talk%20about%20a%20project"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition"
                        >
                            <FaWhatsapp className="text-xl" />
                            Chat on WhatsApp
                        </a>

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=webtechhub95@gmail.com&su=Hello%20Afzal&body=I%20want%20to%20talk%20about%20a%20project"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition"
                        >
                            <MdEmail className="text-xl" />
                            Email Me via Gmail
                        </a>
                    </div>
                </div>

                <p className="mt-12 text-center text-sm text-black/80">
                    © 2025 Afzal Qureshi. Built with <span className="font-semibold">React</span> & <span className="font-semibold">Tailwind CSS</span>.
                </p>
            </footer>
        </div>
    );
};

export default Footer;
