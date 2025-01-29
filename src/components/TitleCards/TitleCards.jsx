import React, { useRef } from "react";
import card_data from "../../assets/cards/Cards_data";
import "./TitleCard.css";
import { useEffect } from "react";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();
  // Function to handle the scroll event
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <>
      <div className="title-card">
        <h2>{title ? title : "Popular on Netflix"}</h2>
        <div className="card-list" ref={cardsRef}>
          {card_data.map((card, index) => {
            return (
              <div className="card" key={index}>
                <img src={card.image} alt="" />
                <p>{card.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TitleCards;
