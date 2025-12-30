/**
 * API Client for FilmyFly Backend
 * Connects to Express.js API endpoints
 */

const API_BASE = import.meta.env.PUBLIC_API_URL || 'http://localhost:8080/api';

export interface Movie {
    id: number;
    title: string;
    slug: string;
    description?: string;
    thumbnail?: string;
    genre?: string;
    languages?: string;
    duration?: string;
    releaseYear?: number;
    cast?: string;
    sizes?: string;
    downloadUrl?: string;
    screenshot?: string;
    keywords?: string;
    categoryId?: number;
    category?: Category;
    createdAt: string;
    updatedAt: string;
    TrendingMovie?: any;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    description?: string;
    _count?: {
        movies: number;
    };
    createdAt: string;
    updatedAt: string;
}

export interface Pagination {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

export interface APIResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    pagination?: Pagination;
}

/**
 * Fetch homepage data (trending + recent movies + categories)
 */
export async function getHomePageData(page: number = 1) {
    const res = await fetch(`${API_BASE}/home?page=${page}`);
    const json: APIResponse<{
        trendingMovies: Movie[];
        recentMovies: Movie[];
        categories: Category[];
        pagination: Pagination;
    }> = await res.json();
    return json;
}

/**
 * Get paginated list of movies
 */
export async function getMovies(page: number = 1, limit: number = 20) {
    const res = await fetch(`${API_BASE}/movies?page=${page}&limit=${limit}`);
    const json: APIResponse<Movie[]> = await res.json();
    return json;
}

/**
 * Get trending movies
 */
export async function getTrendingMovies() {
    const res = await fetch(`${API_BASE}/movies/trending`);
    const json: APIResponse<Movie[]> = await res.json();
    return json;
}

/**
 * Get single movie by slug
 */
export async function getMovieBySlug(slug: string) {
    const res = await fetch(`${API_BASE}/movies/${slug}`);
    const json: APIResponse<{
        movie: Movie;
        relatedMovies: Movie[];
        downloadRedirectUrl: string;
    }> = await res.json();
    return json;
}

/**
 * Get all categories with movie counts
 */
export async function getCategories() {
    const res = await fetch(`${API_BASE}/categories`);
    const json: APIResponse<Category[]> = await res.json();
    return json;
}

/**
 * Get category by slug with movies
 */
export async function getCategoryBySlug(slug: string, page: number = 1, limit: number = 20) {
    const res = await fetch(`${API_BASE}/categories/${slug}?page=${page}&limit=${limit}`);
    const json: APIResponse<{
        category: Category;
        movies: Movie[];
        pagination: Pagination;
    }> = await res.json();
    return json;
}

/**
 * Search movies
 */
export async function searchMovies(query: string, page: number = 1, limit: number = 20) {
    const res = await fetch(`${API_BASE}/q=${encodeURIComponent(query)}&page=${page}&limit=${limit}`);
    const json: APIResponse<{
        query: string;
        movies: Movie[];
        pagination: Pagination;
    }> = await res.json();

    console.log("Res : ", res)
    return json;
}

/**
 * Get static page by slug
 */
export async function getStaticPage(slug: string) {
    const res = await fetch(`${API_BASE}/static-pages/${slug}`);
    const json: APIResponse<{
        id: number;
        title: string;
        slug: string;
        content: string;
        metaTitle?: string;
        metaDescription?: string;
        metaKeywords?: string;
        isPublished: boolean;
        createdAt: string;
        updatedAt: string;
    }> = await res.json();
    return json;
}

/**
 * Get public Astro settings
 */
export async function getPublicSettings() {
    const res = await fetch(`${API_BASE}/astro-settings`);
    const json: APIResponse<{
        downloadRedirectUrl?: string;
        googleTagManagerHead?: string;
        googleTagManagerBody?: string;
        googleAnalytics?: string;
        googleSearchConsole?: string;
        adsenseCode?: string;
        adsteraCode?: string;
        siteUrl?: string;
        siteName?: string;
        telegramLink?: string;
        facebookLink?: string;
        twitterLink?: string;
        instagramLink?: string;
    }> = await res.json();
    return json;
}
