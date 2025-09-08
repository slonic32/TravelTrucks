import css from "./Camper.module.css";
import ButtonMore from "../ButtonMore/ButtonMore";
import icon from "../../assets/icon.svg";

import defaultImg from "../../assets/camper.jpg";

import PropsList from "../PropsList/PropsList";
import { useDispatch } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/campers/slice";
import { useNavigate } from "react-router-dom";

export default function Camper({ camper, favorite = false }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (favorite) {
      dispatch(deleteFavorite(camper));
    } else {
      dispatch(addFavorite(camper));
    }
  };

  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/catalog/${camper.id}`);
  };

  return (
    <li className={css.camper}>
      <div className={css.camperImg}>
        <img
          src={camper.gallery[0].thumb || `${defaultImg}`}
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
              <button
                className={css.camperFav}
                type="button"
                onClick={handleClick}
              >
                <svg
                  width="26"
                  height="24"
                  className={favorite ? css.favIconY : css.favIconN}
                >
                  <use href={`${icon}#icon-heart`}></use>
                </svg>
              </button>
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

        <ButtonMore action={goToDetails}></ButtonMore>
      </div>
    </li>
  );
}
