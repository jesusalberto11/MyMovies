import { useEffect, useState } from "react";
import "../styles/components/ContentCategories.css";
import ContentCategory from "./ContentCategory";
import { ICategories } from "../interfaces/ICategories";
import { useMovies } from "../hooks/useMovies";

const ContentCategories = () => {
  const { categories, getCategories, getMoviesByCategories } = useMovies();

  const [fetchedCategories, setFetchedCategories] = useState<
    Array<Object | null>
  >(null!);
  const [selectedCategory, setSelectedCategory] = useState<ICategories>({
    id: 0,
    name: "",
  });

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory.id === 0) return;

    getMoviesByCategories(selectedCategory.id).then((fetchedMovies) =>
      setFetchedCategories(fetchedMovies)
    );
  }, [selectedCategory.id]);

  return (
    <>
      {!categories ? (
        <p>loading</p>
      ) : (
        <div className="content-categories-container flex">
          <h1>Explore the categories</h1>
          <div
            className={
              !categories
                ? "categories-container no-pointer-events"
                : "categories-container"
            }
          >
            {categories.map((category: any, index: number) => (
              <div
                key={index}
                className="categories-card centered"
                onClick={() => setSelectedCategory(category)}
              >
                <p className="category-name">{category.name}</p>
              </div>
            ))}
          </div>
          {fetchedCategories && (
            <ContentCategory
              title={`Your choice on ${selectedCategory.name}`}
              movies={fetchedCategories}
            />
          )}
        </div>
      )}
    </>
  );
};

export default ContentCategories;
