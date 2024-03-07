import { useMoviesModel } from "../models/useMoviesModel";

export const useMovies = () => {
  const {
    popularMovies,
    getPopularMovies,
    categories,
    getCategories,
    getMoviesByCategories,
    topRatedMovies,
    getTopRatedMovies,
    upcomingMovies,
    getUpcomingMovies,
  } = useMoviesModel();

  return {
    popularMovies,
    getPopularMovies,
    categories,
    getCategories,
    getMoviesByCategories,
    topRatedMovies,
    getTopRatedMovies,
    upcomingMovies,
    getUpcomingMovies,
  };
};
