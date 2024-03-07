import { useEffect, useState } from "react";
import { IMovie } from "../../../interfaces/IMovie";
import "../../../styles/components/pages/home/MovieBanner.css";
import MovieRatingAndAvg from "../../MoviesCard/MovieRatingAndAvg";
import MovieImage from "../../MoviesCard/MovieImage";

const MovieBanner = (props: { movies: Array<IMovie> }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    setCurrentMovieIndex(0);
  }, []);

  return (
    <div
      className="movie-banner-container flex"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props.movies[currentMovieIndex]?.backdrop_path})`,
      }}
      role="presentation"
    >
      <div className="banner-image-and-description flex">
        <MovieImage
          source={props.movies[currentMovieIndex]?.poster_path}
          alt={props.movies[currentMovieIndex]?.title}
        />
        <div className="movie-details flex">
          <h2>{props.movies[currentMovieIndex]?.title}</h2>
          <div style={{ width: "130px" }}>
            <MovieRatingAndAvg
              average={props.movies[currentMovieIndex]?.vote_average}
              movieDate={props.movies[currentMovieIndex]?.release_date}
            />
          </div>
          <p className="banner-description">
            {props.movies[currentMovieIndex]?.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieBanner;
