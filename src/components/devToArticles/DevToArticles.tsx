'use client'
import useFetch from '../../hooks/useFetch/useFetch';

const DevToArticles: React.FC = () => {
    const url = 'https://dev.to/api/articles?username=flavin27';

    const { data: articles, loading, error } = useFetch(url);

    if (loading) {
        return <p>Carregando artigos...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className='pt-12'>
            <ul>
                {articles.map((article) => (
                    <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200">
                    <div className="flex items-center justify-center">
                        <img
                        className="h-48 w-full object-cover"
                        src={article.cover_image}
                        alt={article.title}
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            {article.title}
                        </a>
                        </h3>
                        <p className="text-gray-600 mb-4">
                        Publicado em: {article.readable_publish_date}
                        </p>
                        <p className="text-gray-700 text-base">{article.description}</p>
                    </div>
                    <div className="px-6 py-4 bg-gray-100">
                        <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                        Ler Artigo
                        </a>
                    </div>
                    </div>                                                                          
                ))}
            </ul>
        </div>
    );
};

export default DevToArticles;
