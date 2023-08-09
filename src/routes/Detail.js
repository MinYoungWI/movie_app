import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../component/Movie.css";
function Detail({}) {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(location.state === null){
      navigate('/');
    }
  });

  if(location.state){
    const{title} = location.state;
    const{poster}= location.state;
    const{summary}= location.state;
    const{genres}= location.state;
    const{year}= location.state;
    return (
      <span><div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {genres === undefined ?
            "" :
            genres.map((g, index) =>
              <li key={index} className="genres_genre">
                {g}
              </li>
            )}
        </ul>
        <p className="movie_summary">{summary ? `${summary.slice(0, 140)}...` : ""}</p>
      </div>
    </div></span>
    )
  }
  return null;
}

export default Detail;
