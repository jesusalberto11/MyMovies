import "../styles/components/ContentCategoryCard.css";
import { IMovie } from "../interfaces/IMovie";
import MovieRatingAndAvg from "./MoviesCard/MovieRatingAndAvg";
import MovieImage from "./MoviesCard/MovieImage";

const ContentCategoryCard = (props: {
  movie: IMovie;
  openMovieDetails: Function;
}) => {
  return (
    <div
      className="content-category-card flex"
      key={props.movie?.id}
      onClick={() => props?.openMovieDetails(props?.movie)}
    >
      <MovieImage source={props.movie?.poster_path} alt={props.movie?.title} />
      <p className="card-title" title={props.movie?.title}>
        {props.movie?.title ? props.movie?.title : props.movie?.name}
      </p>
      {props.movie?.vote_average && (
        <MovieRatingAndAvg
          average={props.movie?.vote_average}
          movieDate={props.movie?.release_date}
        />
      )}
    </div>
  );
};

export default ContentCategoryCard;
