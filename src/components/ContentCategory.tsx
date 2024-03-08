import { useState } from "react";
import "../styles/components/ContentCategory.css";
import ContentDetails from "./ContentDetails";
import ContentCategoryCard from "./ContentCategoryCard";
import { IMovie } from "../interfaces/IMovie";

const ContentCategory = (props: {
  title: string;
  movies: Array<Object>;
  type: string;
}) => {
  const [isOpenContentDetails, setIsOpenContentDetails] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<IMovie>({
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
  });

  const openMovieDetails = (movie: IMovie) => {
    setIsOpenContentDetails(true);
    setSelectedMovie(movie);
  };

  return (
    <div className="content-category-container">
      <h1>{props.title}</h1>
      <div
        className={
          props.type === "vertical"
            ? "categories-vertical"
            : "categories-container"
        }
      >
        {props.movies.map((movie: any, index: number) => (
          <div key={index}>
            <ContentCategoryCard
              movie={movie}
              openMovieDetails={openMovieDetails}
            />
          </div>
        ))}
      </div>
      {isOpenContentDetails && (
        <ContentDetails
          movie={selectedMovie}
          closeContentDetails={() => setIsOpenContentDetails(false)}
        />
      )}
    </div>
  );
};

export default ContentCategory;
