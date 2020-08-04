import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaBlockLoading = () => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={456.93}
            viewBox="0 0 280 456.93"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="120" cy="120" r="120" />
            <rect x="0" y="269" rx="3" ry="3" width="283" height="30" />
            <rect x="0" y="323" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="420" rx="3" ry="3" width="100" height="30" />
            <rect x="165" y="420" rx="20" ry="20" width="120" height="30" />
        </ContentLoader>
    )
}

export default PizzaBlockLoading;