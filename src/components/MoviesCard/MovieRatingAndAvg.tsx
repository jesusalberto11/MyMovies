import "../../styles/components/ContentCategoryCard.css";

const MovieRatingAndAvg = (props: { average: number; movieDate: string }) => {
  const formatMovieAverage = (average: number) => {
    return <p className="card-movie-vote">{average?.toFixed(1)}</p>;
  };
  const formatMovieDate = (movieDate: string) => {
    if (!movieDate) return;
    const [year] = movieDate.split("-");
    return <p className="card-movie-relase-date">{year}</p>;
  };

  return (
    <div className="card-details flex">
      <div className="star-and-avg flex">
        <div className="vote-avg-star">★</div>
        {formatMovieAverage(props?.average)}
      </div>
      {formatMovieDate(props?.movieDate)}
    </div>
  );
};

export default MovieRatingAndAvg;
