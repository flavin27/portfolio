import { useEffect, useState } from 'react';
import axios from 'axios';

interface Article {
    title: string;
    description: string;
    url: string;
    readable_publish_date: string
    cover_image: string
}

const useFetch = (url: string) => {
    const [data, setData] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);

                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError('Erro ao buscar os artigos.');
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
