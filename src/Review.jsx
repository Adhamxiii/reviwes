/* eslint-disable no-unused-vars */
import { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }

    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const next = () => {
    setIndex((index) => {
      return checkNumber(index + 1);
    });
  };

  const prev = () => {
    setIndex((index) => {
      return checkNumber(index - 1);
    });
  };

  const random = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex === index) return (randomIndex = index + 1);
    setIndex(checkNumber(randomIndex));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={next}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={random}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
