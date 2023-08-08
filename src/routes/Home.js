import React, { useEffect, useState } from "react";
import Movie from "../component/Movie"
import './Home.css';
import axios from 'axios';

function Home() {
  const [isLoading, setIsLoding] = useState(true)
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json")
    setMovies(movies)
    setIsLoding(false);
  };

  useEffect(() => {
    getMovies()
  }, []);
  return (
    <div className="App">
      <section className='contatiner'>
        {isLoading ? (
          <div className='loader'>
            <span className='loader_text'>
              Loding...
            </span>
          </div>
        ) : (
          <div className='movies'>
            {movies.map((m) => {
              return (
                <Movie
                  key={m.id}
                  id={m.id}
                  year={m.year}
                  title={m.title}
                  summary={m.summary}
                  poster={m.medium_cover_image}
                  genres={m.genres}>
                </Movie>
              )
            })}
          </div>
        )
        }
      </section>
    </div>
  )
}

export default Home;
