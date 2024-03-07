import "../styles/pages/Home.css";
import { useEffect } from "react";
import ContentCategory from "../components/ContentCategory";
import ContentCategories from "../components/ContentCategories";
import MovieBanner from "../components/pages/home/MovieBanner";
import { useMovies } from "../hooks/useMovies";
import GoToSearchBanner from "../components/pages/home/GoToSearchBanner";
import AppFooter from "../components/layout/AppFooter";

const Home = () => {
  const {
    popularMovies,
    getPopularMovies,
    getTopRatedMovies,
    topRatedMovies,
    upcomingMovies,
    getUpcomingMovies,
  } = useMovies();

  useEffect(() => {
    getPopularMovies();
    getTopRatedMovies();
    getUpcomingMovies();
  }, []);

  return (
    <div className="home-page">
      <MovieBanner movies={popularMovies?.slice(0, 5)} />
      <ContentCategories />
      <ContentCategory title="Popular" movies={popularMovies} />
      <ContentCategory title="Top Rated" movies={topRatedMovies} />
      <ContentCategory title="Upcoming" movies={upcomingMovies} />
      <GoToSearchBanner />
      <hr />
      <AppFooter />
    </div>
  );
};

export default Home;
