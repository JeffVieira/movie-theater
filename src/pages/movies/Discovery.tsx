import React, { useEffect, useState } from "react";
import _ from "lodash";

import { fetchMovies, searchMovie } from "api/Movies";

import { Movie } from "types/Movies";
import { Footer, MovieCover, Header } from "components";
import Rating from "@bit/semantic-org.semantic-ui-react.rating";

import style from "./Discovery.module.scss";

const Discovery = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    fetchMostPopularMovies();
  }, []);

  const fetchMostPopularMovies = async () => {
    try {
      const response = await fetchMovies();

      setMovies(response.results);
    } catch (e) {}
  };

  const handleSearch = _.debounce(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;

      if (query) {
        try {
          const response = await searchMovie({ query });

          setMovies(response.results);
        } catch (e) {}

        return;
      }

      fetchMostPopularMovies();
    },
    300
  );

  const handleRating = (event: React.SyntheticEvent, data: any) => {
    setRating(data.rating * 2);
  };

  const filterByRating = (movie: Movie) => {
    if (rating === 0) return true;

    return movie.vote_average <= rating;
  };

  return (
    <div>
      <Header />
      <div className={style.discovery}>
        <div className={style.discoveryContainer}>
          <div className={style.searchBar}>
            <h1 className={style.searchTitle}>Welcome to the Theater!</h1>
            <p className={style.searchText}>Find your favorite movies!</p>
            <input
              className={style.searchInput}
              type="text"
              placeholder="search you move here."
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <main className={style.container}>
        <div className={style.mostPopular}>
          <h2>Most popular</h2>

          <div>
            Filter by rating:
            <Rating maxRating={5} onRate={handleRating} clearable />
          </div>
        </div>

        <div className={style.movies}>
          {_.filter(movies, filterByRating).map((movie: Movie) => {
            return <MovieCover movie={movie} key={movie.id} />;
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Discovery;
