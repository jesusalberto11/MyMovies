import { useContext } from "react";
import { MoviesContext } from "../context/Movie";
import { useMoviesApi } from "../api/useMoviesApi";
import { IMovieContextData } from "../interfaces/IMovieContextData";

export const useMoviesModel = () => {
  const {
    popularMovies,
    setPopularMovies,
    categories,
    setCategories,
    topRatedMovies,
    setTopRatedMovies,
    upcomingMovies,
    setUpcomingMovies,
  } = useContext(MoviesContext) as IMovieContextData;

  const {
    fetchPopularMovies,
    fetchCategories,
    fetchMoviesByCategories,
    fetchTopRatedMovies,
    fetchUpcomingMovies,
  } = useMoviesApi();

  const getPopularMovies = async () => {
    try {
      const response = await fetchPopularMovies();
      setPopularMovies(response);
    } catch (error) {
      console.error("[ERROR] while getting all popular movies: ", error);
      return false;
    }
  };

  const getCategories = async () => {
    try {
      const response = await fetchCategories();
      setCategories(response);
    } catch (error) {
      console.error("[ERROR] while getting all movies genres: ", error);
      return false;
    }
  };

  const getMoviesByCategories = async (selectedCategory: number) => {
    try {
      const response = await fetchMoviesByCategories(selectedCategory);
      return response;
    } catch (error) {
      console.error("[ERROR] while getting all movies by genres: ", error);
      return false;
    }
  };

  const getTopRatedMovies = async () => {
    try {
      const response = await fetchTopRatedMovies();
      setTopRatedMovies(response);
    } catch (error) {
      console.error("[ERROR] while getting top rated movies: ", error);
      return false;
    }
  };

  const getUpcomingMovies = async () => {
    try {
      const response = await fetchUpcomingMovies();
      setUpcomingMovies(response);
    } catch (error) {
      console.error("[ERROR] while getting top rated movies: ", error);
      return false;
    }
  };

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
