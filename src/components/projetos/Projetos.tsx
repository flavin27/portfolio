'use client'


import ProjectCard from '../projectCard/ProjectCard';
import React, { useEffect } from 'react';
const Projetos = () => {
    useEffect(() => {
        const scrollToSection = () => {
        const element = document.getElementById('proejetos');
        if (element) {
            element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            });
        }
        };

        const projetosLink = document.getElementById('projetos-link');
        if (projetosLink) {
        projetosLink.addEventListener('click', scrollToSection);
        }

        return () => {
        if (projetosLink) {
            projetosLink.removeEventListener('click', scrollToSection);
        }
        };
    }, []);

    return (
        <section id='projetos' className='text-start pt-6 pl-24'>
            <h1 className='text-4xl font-bold text-gray-800'>
                Projetos
            </h1>
            <div className='pt-12'>
                <ProjectCard 
                title="Bot Bandejão UERJ"
                link="https://github.com/flavin27/bot-bandejao-uerj-v2"
                technologies="PHP, Docker"
                description="Projeto feito em php para utilizar a API do Twitter, por meio do docker, para postar tweets diários visando informar o ccardápio do restaurente universitário"
                image="/chrome_pOk86xJWXP.png"
                />
            </div>
        </section>
    );
};

export default Projetos;
