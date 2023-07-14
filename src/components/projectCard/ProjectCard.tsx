
interface ProjectCardProps {
    title: string;
    link: string;
    technologies: string;
    description: string;
    image: string;
}

import Image from 'next/image';

const ProjectCard = ({ title, link, technologies, description, image }: ProjectCardProps) => {
    return (
        <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center justify-center">
            <Image className="h-48 w-48 object-cover" src={image} alt={title} layout="responsive" width={500} height={300}/>
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">Tecnologias utilizadas: {technologies}</p>
            <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 py-4 bg-gray-100">
            <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
            Ver Projeto
            </a>
        </div>
        </div>
    );
    };

export default ProjectCard;
