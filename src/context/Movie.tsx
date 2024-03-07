import { ReactNode, createContext, useState } from "react";
import { IMovie } from "../interfaces/IMovie";
import { ICategories } from "../interfaces/ICategories";
import { IMovieContextData } from "../interfaces/IMovieContextData";
import { IMovieContextProps } from "../interfaces/IMovieContextProps";

export const MoviesContext = createContext<IMovieContextData | undefined>(
  undefined
);

export const MoviesContextProvider: React.FC<IMovieContextProps> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [ctxPopularMovies, setCtxPopularMovies] = useState<Array<IMovie>>([
    {
      adult: false,
      backdrop_path: "",
      genre_ids: [],
      id: 0,
      original_language: "",
      original_title: "",
      overview: "",
      popularity: 0,
      poster_path: "",
      release_date: "",
      title: "",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
  ]);
  const setPopularMovies = (movies: Array<IMovie>) => {
    setCtxPopularMovies(movies);
  };

  const [ctxCategories, setCxtCategories] = useState<Array<ICategories>>([
    {
      id: 0,
      name: "",
    },
  ]);
  const setCategories = (categories: Array<ICategories>) => {
    setCxtCategories(categories);
  };

  const [ctxTopRatedMovies, setCtxTopRatedMovies] = useState<Array<IMovie>>([
    {
      adult: false,
      backdrop_path: "",
      genre_ids: [],
      id: 0,
      original_language: "",
      original_title: "",
      overview: "",
      popularity: 0,
      poster_path: "",
      release_date: "",
      title: "",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
  ]);
  const setTopRatedMovies = (movies: Array<IMovie>) => {
    setCtxTopRatedMovies(movies);
  };

  const [ctxUpcomingMovies, setCtxUpcomingMovies] = useState<Array<IMovie>>([
    {
      adult: false,
      backdrop_path: "",
      genre_ids: [],
      id: 0,
      original_language: "",
      original_title: "",
      overview: "",
      popularity: 0,
      poster_path: "",
      release_date: "",
      title: "",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
  ]);
  const setUpcomingMovies = (movies: Array<IMovie>) => {
    setCtxUpcomingMovies(movies);
  };

  const contextValue: IMovieContextData = {
    popularMovies: ctxPopularMovies,
    setPopularMovies,
    categories: ctxCategories,
    setCategories,
    topRatedMovies: ctxTopRatedMovies,
    setTopRatedMovies,
    upcomingMovies: ctxUpcomingMovies,
    setUpcomingMovies,
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
};
