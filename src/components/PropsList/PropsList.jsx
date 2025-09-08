import css from "./PropsList.module.css";
import icon from "../../assets/icon.svg";
import { nanoid } from "nanoid";
import Prop from "../Prop/Prop";

export default function PropsList({ camper }) {
  return (
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
  );
}
