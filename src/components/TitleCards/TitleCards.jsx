import React, { useRef, useState } from "react";
import card_data from "../../assets/cards/Cards_data";
import "./TitleCard.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// TitleCards component

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmMzOWVkODFmZmYxNWNjMjQ0NGZiZTQ1N2FjY2Q4MCIsIm5iZiI6MTczODIxOTU1OC40ODk5OTk4LCJzdWIiOiI2NzliMjAyNmIyMzYyOWU3ZjhmYmNkZWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kVIX39_XxAjz4HScVCcMctNY0QrbcGEHOKS7Ur9phso",
    },
  };

  // Function to handle the scroll event
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <>
      <div className="title-card">
        <h2>{title ? title : "Popular on Netflix"}</h2>
        <div className="card-list" ref={cardsRef}>
          {apiData.map((card, index) => {
            return (
              <Link to={`/player/${card.id}`} className="card" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w780` + card.backdrop_path}
                  alt=""
                />
                <p>{card.original_title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TitleCards;
