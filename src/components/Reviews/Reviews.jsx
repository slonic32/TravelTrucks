import { useSelector } from "react-redux";
import css from "./Reviews.module.css";
import { selectCamper } from "../../redux/campers/selectors";
import icon from "../../assets/icon.svg";
import { nanoid } from "nanoid";

export default function Reviews() {
  const camper = useSelector(selectCamper);
  if (!camper || Object.keys(camper).length === 0) return null;
  return (
    <div className={css.block}>
      <ul className={css.list}>
        {camper.reviews.map(rev => (
          <li key={nanoid()}>
            <div className={css.reviewBox}>
              <div className={css.avatar}>
                <span className={css.letter}>{rev.reviewer_name[0]}</span>
              </div>
              <div className={css.reviewRight}>
                <p className={css.name}>{rev.reviewer_name}</p>
                <div>
                  <ul className={css.rate}>
                    <li key={nanoid()}>
                      {rev.reviewer_rating >= 0.5 ? (
                        <svg width="16" height="16" className={css.star}>
                          <use href={`${icon}#star-yellow`}></use>
                        </svg>
                      ) : (
                        <svg width="16" height="16" className={css.star}>
                          <use href={`${icon}#star-gray`}></use>
                        </svg>
                      )}
                    </li>
                    <li key={nanoid()}>
                      {rev.reviewer_rating >= 1.5 ? (
                        <svg width="16" height="16" className={css.star}>
                          <use href={`${icon}#star-yellow`}></use>
                        </svg>
                      ) : (
                        <svg width="16" height="16" className={css.star}>
                          <use href={`${icon}#star-gray`}></use>
                        </svg>
                      )}
                    </li>
                    <li key={nanoid()}>
                      {rev.reviewer_rating >= 2.5 ? (
                        <svg width="16" height="16" className={css.star}>
                          <use href={`${icon}#star-yellow`}></use>
                        </svg>
                      ) : (
                        <svg width="16" height="16" className={css.star}>
                          <use href={`${icon}#star-gray`}></use>
                        </svg>
                      )}
                    </li>
                    <li key={nanoid()}>
                      {rev.reviewer_rating >= 3.5 ? (
                        <svg width="16" height="16" className={css.star}>
                          <use href={`${icon}#star-yellow`}></use>
                        </svg>
                      ) : (
                        <svg width="16" height="16" className={css.star}>
                          <use href={`${icon}#star-gray`}></use>
                        </svg>
                      )}
                    </li>
                    <li key={nanoid()}>
                      {rev.reviewer_rating >= 4.5 ? (
                        <svg width="16" height="16" className={css.star}>
                          <use href={`${icon}#star-yellow`}></use>
                        </svg>
                      ) : (
                        <svg width="16" height="16" className={css.star}>
                          <use href={`${icon}#star-gray`}></use>
                        </svg>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <p className={css.description}>{rev.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
