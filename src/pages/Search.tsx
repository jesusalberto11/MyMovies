import { useState } from "react";
import "../styles/pages/Search.css";
import ContentCategory from "../components/ContentCategory";
import { useMovies } from "../hooks/useMovies";
import ActionButton from "../components/shared/ActionButton";
import { SVG_ICONS } from "../helpers/svgIcons";

const Search = () => {
  const { getMoviesBySearch } = useMovies();

  const [searchMovies, setSearchMovies] = useState<Array<object>>([{}]);
  const [userInput, setUserInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearchForMovie = (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    getMoviesBySearch(userInput.toLowerCase()).then((response) =>
      onGetSearch(response)
    );
  };

  const onGetSearch = (movies: Array<object>) => {
    setSearchMovies(movies);
    setIsLoading(false);
  };
  return (
    <div className="search-page flex centered">
      <form className="search-form" onSubmit={handleSearchForMovie}>
        <input
          className="searchbar"
          type="search"
          value={userInput}
          placeholder="Search movie"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <ActionButton
          title="Search"
          icon={SVG_ICONS.SEARCH}
          type="submit"
          onClickButton={() => {}}
        />
      </form>

      <div className="search-results">
        {isLoading ? (
          <span className="loader"></span>
        ) : searchMovies.length !== 1 ? (
          <div className="searched-movies-container">
            <ContentCategory
              title={`Results found`}
              movies={searchMovies}
              type="vertical"
            />
          </div>
        ) : userInput.trim() !== "" ? (
          <h1>No results found!</h1>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
