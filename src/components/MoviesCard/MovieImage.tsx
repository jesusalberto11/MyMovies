import "../../styles/components/MoviesCard/MovieImage.css";
import NoImage from "../../assets/no-img.jpg";
const IMAGE_SOURCE: string = "https://image.tmdb.org/t/p/w500/";

const MovieImage = (props: { source: string; alt: string }) => {
  return (
    <img
      className="card-image"
      src={props.source ? `${IMAGE_SOURCE}${props.source}` : NoImage}
      alt={props.alt}
      title={`${props.alt} poster`}
      loading="lazy"
    />
  );
};

export default MovieImage;
