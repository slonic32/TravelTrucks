import css from "./Features.module.css";
import icon from "../../assets/icon.svg";
import { nanoid } from "nanoid";
import Prop from "../Prop/Prop";
import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";

export default function Features() {
  const camper = useSelector(selectCamper);
  if (!camper || Object.keys(camper).length === 0) return null;
  return (
    <div className={css.block}>
      <div>
        <ul className={css.propList}>
          {camper.transmission && (
            <Prop
              key={nanoid()}
              propIcon={`${icon}#icon-transmission20`}
              propText={camper.transmission}
            ></Prop>
          )}
          {camper.engine && (
            <Prop
              key={nanoid()}
              propIcon={`${icon}#icon-engine20`}
              propText={camper.engine}
            ></Prop>
          )}
          {camper.AC && (
            <Prop
              key={nanoid()}
              propIcon={`${icon}#icon-ac20`}
              propText={"AC"}
            ></Prop>
          )}
          {camper.bathroom && (
            <Prop
              key={nanoid()}
              propIcon={`${icon}#icon-bathroom20`}
              propText={"Bathroom"}
            ></Prop>
          )}
          {camper.kitchen && (
            <Prop
              key={nanoid()}
              propIcon={`${icon}#icon-kitchen20`}
              propText={"Kitchen"}
            ></Prop>
          )}
          {camper.TV && (
            <Prop
              key={nanoid()}
              propIcon={`${icon}#icon-tv20`}
              propText={"TV"}
            ></Prop>
          )}
          {camper.radio && (
            <Prop
              key={nanoid()}
              propIcon={`${icon}#icon-radio20`}
              propText={"radio"}
            ></Prop>
          )}
          {camper.refrigerator && (
            <Prop
              key={nanoid()}
              propIcon={`${icon}#icon-refrigerator20`}
              propText={"refrigerator"}
            ></Prop>
          )}
          {camper.microwave && (
            <Prop
              key={nanoid()}
              propIcon={`${icon}#icon-microwave20`}
              propText={"microwave"}
            ></Prop>
          )}
          {camper.gas && (
            <Prop
              key={nanoid()}
              propIcon={`${icon}#icon-gas20`}
              propText={"gas"}
            ></Prop>
          )}
          {camper.water && (
            <Prop
              key={nanoid()}
              propIcon={`${icon}#icon-water20`}
              propText={"water"}
            ></Prop>
          )}
        </ul>
      </div>

      <div className={css.details}>
        <p className={css.detailsHeader}>Vehicle details</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="527"
          height="2"
          viewBox="0 0 527 2"
          fill="none"
          className={css.divider}
        >
          <path d="M0 1H527" stroke="#DADDE1" />
        </svg>

        <ul className={css.detailstext}>
          <li className={css.detaileline} key={nanoid()}>
            <p>Form</p>
            <p className={css.firstLetter}>{camper.form}</p>
          </li>
          <li className={css.detaileline} key={nanoid()}>
            <p>Length</p>
            <p className={css.firstLetter}>{camper.length}</p>
          </li>
          <li className={css.detaileline} key={nanoid()}>
            <p>Width</p>
            <p className={css.firstLetter}>{camper.width}</p>
          </li>
          <li className={css.detaileline} key={nanoid()}>
            <p>Height</p>
            <p className={css.firstLetter}>{camper.height}</p>
          </li>
          <li className={css.detaileline} key={nanoid()}>
            <p>Tank</p>
            <p className={css.firstLetter}>{camper.tank}</p>
          </li>
          <li className={css.detaileline} key={nanoid()}>
            <p>Consumption</p>
            <p className={css.firstLetter}>{camper.consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
