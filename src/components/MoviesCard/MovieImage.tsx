import "../../styles/components/MoviesCard/MovieImage.css";

const IMAGE_SOURCE: string = "https://image.tmdb.org/t/p/w500/";

const MovieImage = (props: { source: string; alt: string }) => {
  return (
    <img
      className="card-image"
      src={`${IMAGE_SOURCE}${props.source}`}
      alt={props.alt}
      title={`${props.alt} poster`}
      loading="lazy"
    />
  );
};

export default MovieImage;
