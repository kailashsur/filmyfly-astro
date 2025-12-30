/**
 * SEO Helper Functions
 * Generate meta tags and structured data for pages
 */

import type { Movie, Category } from './api';

const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://filmyfly.work';

export interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
    structuredData?: any;
}

/**
 * Generate movie-specific SEO data
 */
export function generateMovieSEO(movie: Movie, downloadRedirectUrl: string): SEOProps {
    const title = `${movie.title} - Download HD Movie | FilmyFly`;
    const description = movie.description || `Download ${movie.title} in HD quality. ${movie.genre || ''} movie ${movie.releaseYear || ''}. Free download in ${movie.sizes || '480p, 720p, 1080p'}.`;
    const keywords = movie.keywords || `${movie.title}, download movie, ${movie.genre || ''}, ${movie.releaseYear || ''}, hd movie, free download`;
    const url = `${SITE_URL}/${movie.slug}`;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Movie",
        "name": movie.title,
        "description": description,
        "image": movie.thumbnail,
        "genre": movie.genre,
        "datePublished": movie.releaseYear?.toString(),
        "actor": movie.cast?.split(',').map(name => ({
            "@type": "Person",
            "name": name.trim()
        })),
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "ratingCount": "100"
        }
    };

    return {
        title,
        description,
        keywords,
        image: movie.thumbnail,
        url,
        type: 'article',
        structuredData
    };
}

/**
 * Generate category-specific SEO data
 */
export function generateCategorySEO(category: Category): SEOProps {
    const title = `${category.name} Movies - Download HD | FilmyFly`;
    const description = category.description || `Download latest ${category.name} movies in HD quality. Free ${category.name} movie downloads at FilmyFly.`;
    const keywords = `${category.name}, ${category.name} movies, download ${category.name}, hd movies, free download`;
    const url = `${SITE_URL}/category/${category.id}/${category.slug}`;

    return {
        title,
        description,
        keywords,
        url,
        type: 'website'
    };
}

/**
 * Generate page-specific SEO data
 */
export function generatePageSEO(
    title: string,
    description: string,
    keywords?: string,
    url?: string
): SEOProps {
    return {
        title: `${title} | FilmyFly`,
        description,
        keywords,
        url: url || SITE_URL,
        type: 'website'
    };
}
