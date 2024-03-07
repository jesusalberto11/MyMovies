import { ICategories } from "./ICategories";
import { IMovie } from "./IMovie";

export interface IMovieContextData {
  popularMovies: Array<IMovie>;
  setPopularMovies: (movies: Array<IMovie>) => void;

  categories: Array<ICategories>;
  setCategories: (categories: Array<ICategories>) => void;

  topRatedMovies: Array<IMovie>;
  setTopRatedMovies: (movies: Array<IMovie>) => void;

  upcomingMovies: Array<IMovie>;
  setUpcomingMovies: (movies: Array<IMovie>) => void;
}
