import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchMovie } from "api/Movies";

import { Movie } from "types/Movies";
import { Header, Footer, openErrorToast } from "components";

import style from "./Details.module.scss";

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetchMovie({ id });

        setMovie(response);
      } catch (e) {
        openErrorToast("Something went wrong, when try to fetch Movie");
      }
    };

    handleFetch();
  }, [id]);

  return (
    <div>
      <Header />
      <div className={style.discovery}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          width="100%"
          height="100%"
          alt={movie?.title}
        />
      </div>
      <div className={style.container}>
        <img
          className={style.poster}
          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
          alt={movie?.title}
        />

        <div className={style.infos}>
          <h1>{movie?.title}</h1>
          <p>{movie?.tagline}</p>
          <p>{movie?.overview}</p>

          <ul className={style.details}>
            <li className={style.detailItem}>
              <span className={style.bold}>Release date:</span>
              <span>{movie?.release_date}</span>
            </li>
            <li className={style.detailItem}>
              <span className={style.bold}>Home page:</span>
              <a href={movie?.homepage} target="_blank" rel="noreferrer">
                Homepage
              </a>
            </li>
            <li className={style.detailItem}>
              <span className={style.bold}>Genres:</span>
              <span>
                {movie?.genres.map((genre) => (
                  <span className={style.badge}>{genre.name}</span>
                ))}
              </span>
            </li>
            <li className={style.detailItem}>
              <span className={style.bold}>Productions company:</span>
              <span>
                {movie?.production_companies.map((company) => (
                  <span className={style.companies}>{company.name}</span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
