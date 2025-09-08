import css from "./CamperDetails.module.css";
import ButtonMore from "../ButtonMore/ButtonMore";
import icon from "../../assets/icon.svg";

import defaultImg from "../../assets/camper.jpg";

import PropsList from "../PropsList/PropsList";

export default function CamperDetails({ camper }) {
  if (!camper || Object.keys(camper).length === 0) return null;
  return (
    <li className={css.camper}>
      <div className={css.camperImg}>
        <img
          src={camper.gallery[0].thumb || defaultImg}
          alt={camper.name}
          className={css.image}
        />
      </div>
      <div className={css.camperDetails}>
        <div className={css.camperHeader}>
          <div className={css.headerUp}>
            <h2 className={css.camperName}>{camper.name}</h2>
            <div className={css.priceBlock}>
              <p className={css.camperPrice}>€{camper.price.toFixed(2)}</p>
            </div>
          </div>
          <div className={css.headerDown}>
            <div className={css.reviewBlock}>
              <svg width="16" height="16" className={css.reviewStar}>
                <use href={`${icon}#icon-Rating`}></use>
              </svg>
              <p
                className={css.reviewText}
              >{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
            </div>
            <div className={css.locationBlock}>
              <svg width="16" height="16" className={css.locationIcon}>
                <use href={`${icon}#icon-location16`}></use>
              </svg>
              <p className={css.locationText}>{camper.location}</p>
            </div>
          </div>
        </div>
        <p className={css.camperText}>{camper.description}</p>
        <PropsList camper={camper}></PropsList>

        <ButtonMore></ButtonMore>
      </div>
    </li>
  );
}
