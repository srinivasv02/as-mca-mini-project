import React, { useEffect, useState } from 'react';

const NewPage = () => {
    const [news, setNews] = useState([]);

    const fetchNews = () => {
        const key = "f6531261a5b349998c49e5a5f98df3e8";
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setNews(data.articles);
            })
            .catch(error => console.error('Error fetching news:', error));
    };

    useEffect(() => {
        fetchNews();
        const interval = setInterval(fetchNews, 10 * 1000); // Fetch news every 10 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Top Headlines</h1>
            <div style={articlesStyle}>
                {news.map((article, index) => (
                    <div style={cardStyle} key={index}>
                        <img src={article.urlToImage} alt={article.title} style={imageStyle} />
                        <div style={contentStyle}>
                            <h2 style={titleStyle}>{article.title}</h2>
                            <p style={descriptionStyle}>{article.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <form action="/login" method="GET">
                    <button type="submit">Go to Next Page</button>
                </form>
            </div>
        </div>
    );
};

export default NewPage;

// Internal CSS styles
const articlesStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
};

const cardStyle = {
    width: 'calc(33.33% - 20px)', // Adjust according to your layout
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
    width: '100%',
    height: 'auto',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
};

const contentStyle = {
    padding: '10px',
};

const titleStyle = {
    fontSize: '18px',
    marginBottom: '5px',
};

const descriptionStyle = {
    fontSize: '14px',
    color: 'white',
    
};
