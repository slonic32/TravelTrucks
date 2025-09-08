import css from "./Camper.module.css";
import ButtonMore from "../ButtonMore/ButtonMore";
import icon from "../../assets/icon.svg";
import { useDispatch } from "react-redux";

import PropsList from "../PropsList/PropsList";

function camperImg(camper) {
  const defaultImg = "/camper.jpg";
  if (Array.isArray(camper.gallery)) {
    return camper.gallery[0] !== undefined ? camper.gallery[0] : defaultImg;
  }

  return defaultImg;
}

function camperReview(camper) {
  const defaultReview = "0.0(0 Reviews)";
  if (Array.isArray(camper.reviews)) {
    if (camper.reviews.length) {
      const sum = camper.reviews.reduce(
        (acc, currentValue) => acc + currentValue.reviewer_rating,
        0
      );
      return `${sum / camper.reviews.length}(${camper.reviews.length} Reviews)`;
    }
  }

  return defaultReview;
}

export default function Camper({ camper }) {
  const dispatch = useDispatch();
  const handleClick = () => {};
  return (
    <li className={css.camper}>
      <div className={css.camperCard}>
        <div className={css.camperImg}>
          <img
            src={camperImg(camper)}
            alt={camper.name}
            className={css.image}
          />
        </div>
        <div className={css.camperDetails}>
          <div className={css.camperHeader}>
            <div className={css.headerUp}>
              <h2 className={css.camperName}>{camper.name}</h2>
              <div className={css.priceBlock}>
                <p className={css.camperPrice}>€{camper.price}</p>
                <button
                  className={css.camperFav}
                  type="button"
                  onClick={handleClick}
                >
                  <svg
                    width="24"
                    height="24"
                    className={camper.favorite ? css.favIconY : css.favIconN}
                  >
                    <use href={`${icon}#icon-heart`}></use>
                  </svg>
                </button>
              </div>
            </div>
            <div className={css.headerDown}>
              <div className={css.reviewBlock}>
                <svg width="16" height="16" className={css.revieStar}>
                  <use href={`${icon}#icon-Rating`}></use>
                </svg>
                <p className="css.reviewText">{camperReview(camper)}</p>
              </div>
              <div className={css.locationBlock}>
                <svg width="16" height="16" className={css.locationIcon}>
                  <use href={`${icon}#icon-location`}></use>
                </svg>
                <p className={css.locationText}>{camper.location}</p>
              </div>
            </div>
          </div>
          <p className={css.camperText}>{camper.description}</p>
          <PropsList camper={camper}></PropsList>

          <ButtonMore></ButtonMore>
        </div>
      </div>
    </li>
  );
}
