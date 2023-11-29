'use client'
import { motion } from 'framer-motion';

const Navbar = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        }
    };

    return (
        <nav className="flex items-end justify-end flex-wrap p-6  shadow-2xl bg-black ">
            <div className="text-xl mx-10 ">
                <button
                    onClick={() => scrollToSection('sobre')}
                    className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-400 mr-4"
                >
                    Sobre
                </button>
                <button
                    onClick={() => scrollToSection('projetos')}
                    className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-400 mr-4"
                >
                    Projetos
                </button>
                <button
                    onClick={() => scrollToSection('artigos')}
                    className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-400 mr-4"
                >
                    Artigos
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
