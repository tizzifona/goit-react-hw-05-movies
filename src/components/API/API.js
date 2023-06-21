const API_KEY = '4f3b16f8367209c446bd09682fa8b6ff';
const API_BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const searchMoviesByKeyword = async (keyword) => {
  try {
    const response = await fetch(`${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${keyword}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const getMovieCredits = async (movieId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    const data = await response.json();
    return data.cast;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    return [];
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    return [];
  }
};
