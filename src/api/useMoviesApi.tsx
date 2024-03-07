const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGM1YjhjNjQ2ZGEwZWNhYTMzMzQ5YjQ4MWRlMzAxYiIsInN1YiI6IjY1ZTg5ZjM4ZWE0MjYzMDE3YjIyYmIwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wl5DN0mesPW1V7Gxhfg4xjoIwbPgDlbkYr_OmXQR_xI",
  },
};

const ENDPOINT: string = "https://api.themoviedb.org/3/";

const POPULAR_MOVIES_ENDPOINT: string = "movie/popular?language=en-US&page=1";

const GENRES_ENPPOINT: string = "genre/movie/list?language=en";

const GET_BY_GENRES: string =
  "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=";

const TOP_RATED_ENDPOINT: string = "movie/top_rated?language=en-US&page=1";

const UPCOMING_MOVIES_ENDPOINT: string = "movie/upcoming?language=en-US&page=1";

export const useMoviesApi = () => {
  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(
        `${ENDPOINT}${POPULAR_MOVIES_ENDPOINT}`,
        OPTIONS
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("[ERROR] while fetching all popular movies: ", error);
      return false;
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${ENDPOINT}${GENRES_ENPPOINT}`, OPTIONS);
      const data = await response.json();

      return data.genres;
    } catch (error) {
      console.error("[ERROR] while fetching all movies genres: ", error);
      return false;
    }
  };

  const fetchMoviesByCategories = async (selectedCategory: number) => {
    try {
      const response = await fetch(
        `${ENDPOINT}${GET_BY_GENRES}${selectedCategory}`,
        OPTIONS
      );
      const data = await response.json();

      return data.results;
    } catch (error) {
      console.error("[ERROR] while fetching all movies by genres: ", error);
      return false;
    }
  };

  const fetchTopRatedMovies = async () => {
    try {
      const response = await fetch(`${ENDPOINT}${TOP_RATED_ENDPOINT}`, OPTIONS);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("[ERROR] while fetching top rated movies: ", error);
      return false;
    }
  };

  const fetchUpcomingMovies = async () => {
    try {
      const response = await fetch(
        `${ENDPOINT}${UPCOMING_MOVIES_ENDPOINT}`,
        OPTIONS
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("[ERROR] while fetching top rated movies: ", error);
      return false;
    }
  };

  return {
    fetchPopularMovies,
    fetchCategories,
    fetchMoviesByCategories,
    fetchTopRatedMovies,
    fetchUpcomingMovies,
  };
};
