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
            <div className='flex flex-wrap gap-6 pt-12'>
                <ProjectCard 
                title="Bot Bandejão UERJ"
                link="https://github.com/flavin27/bot-bandejao-uerj-v2"
                technologies="PHP, Docker"
                description="Projeto feito em PHP para utilizar a API do Twitter, por meio do Docker, para postar tweets diários visando informar o cardápio do restaurante universitário."
                image="/chrome_pOk86xJWXP.png"
                />
                <ProjectCard 
                title="Portal de Noticias"
                link="https://github.com/flavin27/portal-de-noticias"
                technologies="PHP, Laravel, SQL, Teste Unitários"
                description="Projeto feito em PHP com o framework Laravel conectado a um banco de dados mySQL para armazenar noticias inseridas por usuarios, com subtitulo e texto, tendo a possibilidade de adicionar ou apagar, além de um mecanismo de busca que faz a consulta por noticias com termos similares no banco de dados e exibe os resultados."
                image="/msedge_uPwkOBn8kn.png"
                />
            </div>
            </section>
        );
    };
    
    export default Projetos;