'use client'

import React, { useEffect } from 'react';

const Sobre = () => {
    useEffect(() => {
        const scrollToSection = () => {
        const element = document.getElementById('sobre');
        if (element) {
            element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            });
        }
        };

        const sobreLink = document.getElementById('sobre-link');
        if (sobreLink) {
        sobreLink.addEventListener('click', scrollToSection);
        }

        return () => {
        if (sobreLink) {
            sobreLink.removeEventListener('click', scrollToSection);
        }
        };
    }, []);

    return (
        <section id="sobre">
        <div className="text-start p-12 pl-24">
            <h1 className="text-4xl font-bold text-gray-800">Sobre</h1>
            <p className="text-lg text-gray-600 pt-6">
            Sou um estudante de Ciência da Computação da Universidade do Estado do Rio de Janeiro e também um desenvolvedor back-end. Tenho um grande interesse e conhecimento em PHP, banco de dados e Docker. Estou sempre buscando aprimorar minhas habilidades e aprender novas tecnologias para criar soluções eficientes e escaláveis.
            </p>
        </div>
        </section>
    );
};

export default Sobre;
