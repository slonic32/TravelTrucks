import css from "./CamperDetails.module.css";
import ButtonMore from "../ButtonMore/ButtonMore";
import icon from "../../assets/icon.svg";

import defaultImg from "../../assets/camper.jpg";

import PropsList from "../PropsList/PropsList";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";

export default function CamperDetails() {
  const camper = useSelector(selectCamper);
  if (!camper || Object.keys(camper).length === 0) return null;
  return (
    <div className={css.camper}>
      <h2 className={css.camperName}>{camper.name}</h2>

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

      <p className={css.camperPrice}>€{camper.price.toFixed(2)}</p>

      <ul className={css.camperImg}>
        {camper.gallery.map(img => (
          <li key={nanoid()}>
            {" "}
            <img
              src={img.thumb || `${defaultImg}`}
              alt={camper.name}
              className={css.image}
            />
          </li>
        ))}
      </ul>

      <p className={css.camperText}>{camper.description}</p>
    </div>
  );
}
