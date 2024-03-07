import "../styles/components/ContentDetails.css";
import { IMovie } from "../interfaces/IMovie";
import MovieRatingAndAvg from "./MoviesCard/MovieRatingAndAvg";
import BackgroundCloser from "./shared/BackgroundCloser";
import SimpleButton from "./shared/SimpleButton";
import { SVG_ICONS } from "../helpers/svgIcons";
import MovieImage from "./MoviesCard/MovieImage";

const ContentDetails = (props: {
  movie: IMovie;
  closeContentDetails: Function;
}) => {
  return (
    <>
      <div className="content-details-container">
        <BackgroundCloser close={props.closeContentDetails} />
        <div className="content-details-content">
          <div className="content-details-header">
            <h2 className="content-details-title hide-text">
              {props.movie?.title}
            </h2>
            <SimpleButton
              showTitle={false}
              title="Close"
              icon={SVG_ICONS.CLOSE}
              onClickItem={props.closeContentDetails}
            />
          </div>
          <div
            className="content-details-banner"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props.movie?.backdrop_path})`,
            }}
          >
            <div className="content-details-image-description flex">
              <div
                className="image-and-description flex"
                style={{ gap: "15px" }}
              >
                <MovieImage
                  source={props.movie?.poster_path}
                  alt={props.movie?.title}
                />
                <p className="content-details-description">
                  {props.movie?.overview}
                </p>
              </div>
              <MovieRatingAndAvg
                average={props.movie?.vote_average}
                movieDate={props.movie?.release_date}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentDetails;
