'use client'


import DevToArticles from '../devToArticles/DevToArticles';

import React, { useEffect } from 'react';
const Artigos = () => {
    useEffect(() => {
        const scrollToSection = () => {
        const element = document.getElementById('artigos');
        if (element) {
            element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            });
        }
        };

        const artigosLink = document.getElementById('projetos-link');
        if (artigosLink) {
        artigosLink.addEventListener('click', scrollToSection);
        }

        return () => {
        if (artigosLink) {
            artigosLink.removeEventListener('click', scrollToSection);
        }
        };
    }, []);

    return (
        <section id='artigos' className='text-start pt-12 pl-24 pb-4'>
            <h1 className='text-4xl font-bold text-gray-800'>
                Artigos
            </h1>
            <DevToArticles/>
            </section>
        );
    };
    
    export default Artigos;